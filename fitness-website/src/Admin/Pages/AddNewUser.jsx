import React, { useState } from "react";
import AdminNav from "../Components/AdminNav";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Toast,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const toast = useToast();
  // "username": "N",
  //   "userEmail": "N@",
  //   "password": "123",
  //   "singleUserData": [],
  const handleAddUser = async () => {
    let newUser = {
      username: name,
      userEmail: email,
      password: password,
      singleUserData: [],
    };
    let data = await axios
      .post("http://localhost:8080/users",newUser)
      .then((res) => {
        console.log(res.data);
        toast({
            title: "New has been added",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
      }).catch((err)=>{
        console.log(err.message);
        toast({
            title: "Something Went Wrong",
            status: "failure",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
      })
  };
  return (
    <Box>
      <AdminNav />
      <Box textAlign={"center"} mt={"2rem"}>
        <h2 style={{ fontWeight: "bold" }}>ADD NEW USER HERE</h2>
      </Box>
      <Box
        w={"30%"}
        m={"auto"}
        border={"1px solid silver"}
        mt={"2rem"}
        p={"30px"}
        borderRadius={"8px"}
      >
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
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box mt={"1rem"}>
            <Button colorScheme="green" w={"100%"} onClick={handleAddUser}>
              Add User
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AddNewUser;
