import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Select,
  Table,
  TableContainer,
  keyframes,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Exercise from "../Components/Exercise";
import Start from "../Components/Start";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Aos from "aos";



const HomePage = () => {
  const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }`;

  const toast = useToast();

  const [wakeUpTime, setWakeUpTime] = useState("");
  const [foodTaken, setFoodTaken] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day,setDay]=useState("");
  const [week,setWeek]= useState("")
  const [month,setMonth]= useState("")

  const [data, setData] = useState([]);
  let { userID } = JSON.parse(localStorage.getItem("UserResponseData"));

  const handleFrom = () => {
    let obj = {
      month,
      wakeUpTime,
      foodTaken,
      startTime,
      endTime,
      day,
      week
    };
    axios
      .patch(`http://localhost:8080/users/${userID}`, {
        singleUserData: [...data.singleUserData, obj],
      })
      .then((res) => {
        console.log(res.data);
      });
    axios
      .post("http://localhost:8080/data", obj)
      .then(() => {
        toast({
          title: "Data has been added",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong",
          status: "failure",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      });
    setStartTime("");
    setEndTime("");
    setFoodTaken("");
    setWakeUpTime("");
    setDay("");
    setWeek("");
    setMonth("")
    console.log(obj);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userID}`).then((res) => {
      setData(res.data);
    });
  }, [userID]);

  useEffect(()=>{
    Aos.init()
  },[])

  
  return (
    <Box>
      <Nav />
      <Hero />
      <Box
        className="marquee_box"
        width={"90%"}
        margin={"auto"}
        overflow={"hidden"}
      >
        <Box whiteSpace="nowrap" animation={`${marquee} 10s linear infinite`}>
          <Image
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg"
            style={{
              display: "inline-block",
              marginRight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Image
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{
              display: "inline-block",
              marginRight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Image
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{
              display: "inline-block",
              marginRight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
          <Image
            src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{
              display: "inline-block",
              marginRight: "20px",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Box>
      </Box>
      <Box id="Classes" width={"50%"} margin={"auto"} textAlign={"center"} mt={"5rem"} border={'1px solid silver'} p={'40px'} borderRadius={'8px'}>
        <h2>DAILY ROUTINE</h2>
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
          <Button mt={4} colorScheme='purple' onClick={handleFrom}>
            Submit
          </Button>
        </FormControl>

        {/* <TableContainer>
        <Table variant='simple'>
        <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
        </Table>
        </TableContainer> */}
      </Box>
      <Exercise />
      <Start />
      <Pricing />
      <Footer />
    </Box>
  );
};

export default HomePage;
