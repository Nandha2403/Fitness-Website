import React, { useEffect, useRef, useState } from "react";
import AdminNav from "../Components/AdminNav";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import ExportExcel from "../Components/ExportExcel";

const AdminUsers = () => {
  const [data, setData] = useState([]);

  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updateId,setUpdateId] = useState("")
  const [render,setRender]= useState(false)



  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  let url = `http://localhost:8080/users`;

 

  const handleSearchFilt = ()=>{
    if(searchName){
      url=`http://localhost:8080/users?username=${searchName}`
    }
    fetchData()
  }

  const fetchData = async () => {
    let ftData = await axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleUpdate = (el) => {
    onOpen();
    setUpdateId(el.id);
  };
  const handleUpdateSave = async () => {
    let updateObj = {
      username: name,
      userEmail: email,
    };
    let upd = await axios
      .patch(`http://localhost:8080/users/${updateId}`, updateObj)
      .then((res) => {
        console.log(res.data);
        setRender(!render);
        onClose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleDelete = async (el) => {
    let deletedData = await axios
      .delete(`http://localhost:8080/users/${el.id}`)
      .then((res) => {
        alert("Data has been deleted");
        setRender(!render);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [render, name,email]);
  return (
    <Box>
      <AdminNav />
      <Box w={"90%"} mt={"2rem"} m={"auto"}>
        {/*  */}
        <Flex
          m={"auto"}
          mt={"2rem"}
          p={"0px 20px 0px 20px"}
          justifyContent={"space-between"}
        >
          <Box style={{ display: "flex" }}>
            <Input size={"sm"} placeholder="Search by name" value={searchName} onChange={(e)=> setSearchName(e.target.value)}/>
            <Button ml={"5px"} size={"sm"} onClick={handleSearchFilt}>
              Search
            </Button>
          </Box>
          <Box>
            <ExportExcel csvData={data} fileName={"Excel Export"} />
          </Box>
        </Flex>

        <TableContainer
          mt={"1rem"}
          border={"1px solid gray"}
          p={"20px"}
          borderRadius={"3px"}
        >
          <Table variant="striped" colorScheme="teal" size={"sm"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.id}</Td>
                  <Td>{el.username}</Td>
                  <Td>{el.userEmail}</Td>
                  <Td>
                    <Button
                      size={"xs"}
                      colorScheme="green"
                      onClick={() => handleUpdate(el)}
                    >
                      Update
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      size={"xs"}
                      colorScheme="red"
                      onClick={() => handleDelete(el)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/*  */}
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdateSave}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default AdminUsers;
