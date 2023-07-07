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

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [filtday, setFiltDay] = useState("");
  const [filtweek, setFiltWeek] = useState("");
  const [filtmonth, setFiltMonth] = useState("");
  // 
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [foodTaken, setFoodTaken] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day,setDay]=useState("");
  const [week,setWeek]= useState("")
  const [month,setMonth]= useState("")
  const [updateId,setUpdateId]=useState('')
  const [render,setRender]= useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  let url;
   if(filtday && filtmonth && filtweek){
    url=`http://localhost:8080/data?day=${filtday}&week=${filtweek}&month=${filtmonth}`
  }else if (filtday && filtmonth){
    url=`http://localhost:8080/data?day=${filtday}&month=${filtmonth}`
  }else if (filtday && filtweek){
    url=`http://localhost:8080/data?day=${filtday}&week=${filtweek}`
  }else if (filtmonth && filtweek){
    url=`http://localhost:8080/data?week=${filtweek}&month=${filtmonth}`
  }else if(filtday){
    url= `http://localhost:8080/data?day=${filtday}`
  }else if (filtweek){
    url=`http://localhost:8080/data?week=${filtweek}`
  }else if (filtmonth){
    url=`http://localhost:8080/data?month=${filtmonth}`
  }
  else{
    url=`http://localhost:8080/data`
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
  
  const handleUpdate = (el)=>{
    onOpen()
    setUpdateId(el.id)
  }
  const handleUpdateSave = async()=>{
    let updateObj={
      wakeUpTime,
      foodTaken,
      month,
      day,
      week,
      startTime,
      endTime
    }
    let upd= await axios.patch(`http://localhost:8080/data/${updateId}`,updateObj).then((res)=>{
      console.log(res.data);
      setRender(!render)
      onClose()
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  const handleDelete = async(el)=>{
    let deletedData = await axios.delete(`http://localhost:8080/data/${el.id}`).then((res)=>{
      alert("Data has been deleted")
      setRender(!render)
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  useEffect(() => {
    fetchData();
  }, [render,filtday,filtmonth,filtweek]);
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
          <Box>
            <Select
              size={"sm"}
              value={filtmonth}
              onChange={(e) => setFiltMonth(e.target.value)}
            >
              <option value="">Filter by Month</option>
              <option value="January">January</option>
              <option value="Tuesday">February</option>
              <option value="February">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Select>
          </Box>
          <Box>
            <Select
              size={"sm"}
              value={filtweek}
              onChange={(e) => setFiltWeek(e.target.value)}
            >
              <option value="">Filter by week</option>
              <option value="Week-1">Week 1</option>
              <option value="Week-2">Week 2</option>
              <option value="Week-3">Week 3</option>
              <option value="Week-4">Week 4</option>
            </Select>
          </Box>
          <Box>
            <Select
              size={"sm"}
              value={filtday}
              onChange={(e) => setFiltDay(e.target.value)}
            >
              <option value="">Filter by day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </Select>
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
                <Th>Day</Th>
                <Th>Month</Th>
                <Th>Wake Up Time</Th>
                <Th>Food</Th>
                <Th>Start Time</Th>
                <Th>End Time</Th>
                <Th>Duration</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {data.map((el) => (
                <Tr>
                  <Td>{el.id}</Td>
                  <Td>{el.foodTaken}</Td>
                  <Td>{el.id}</Td>
                  <Td>{el.id}</Td>
                  <Td>{el.id}</Td>
                </Tr>
              ))} */}
              {/* "wakeUpTime": "5am",
          "foodTaken": "rice",
          "calories": "20",
          "startTime": "6:00am",
          "endTime": "6:30am",
          "day": "monday",
          "week": "Week-1" */}
              {data.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.day}</Td>
                  <Td>{el.month}</Td>
                  <Td>{el.wakeUpTime}</Td>
                  <Td>{el.foodTaken}</Td>
                  <Td>{el.startTime}</Td>
                  <Td>{el.endTime}</Td>
                  <Td>{Math.floor(el.endTime - el.startTime)}H</Td>
                  <Td><Button size={'xs'} colorScheme="green" onClick={()=> handleUpdate(el)}>Update</Button></Td>
                  <Td><Button size={'xs'} colorScheme="red" onClick={()=> handleDelete(el)}>Delete</Button></Td>
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
          <ModalHeader>Update Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
          <FormLabel>Wake Up Time</FormLabel>
          <Input
            type="text"
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
          />
          <FormLabel>Food Taken</FormLabel>
          <Input
            type="text"
            value={foodTaken}
            onChange={(e) => setFoodTaken(e.target.value)}
          />
          <Flex align={"center"} justifyContent={'space-evenly'} mt={'10px'}  p={'5px 0 5px 0'}>
          <FormLabel>Start Time</FormLabel>
          <Input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            w={'150px'}
          />
          <FormLabel>End Time</FormLabel>
          <Input
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            w={'150px'}
          />
          </Flex>
            <Select mt={'10px'} value={week} onChange={(e)=> setWeek(e.target.value)}>
              <option value="">Select Week</option>
            <option value="Week-1">Week 1</option>
            <option value="Week-2">Week 2</option>
            <option value="Week-3">Week 3</option>
            <option value="Week-4">Week 4</option>
          </Select>
          <Select mt={'10px'} value={day} onChange={(e)=> setDay(e.target.value)}>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </Select>
          <Select mt={'10px'} value={month} onChange={(e)=> setMonth(e.target.value)}>
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="Tuesday">February</option>
            <option value="February">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Select>
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleUpdateSave}>
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

export default AdminDashboard;
