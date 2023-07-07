import React from "react";
import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AdminNav = () => {

    const navigate=useNavigate()

    const handleLogo = ()=>{
        navigate("/")
    }
  return (
    <Box
      id="Navbar"
      position="sticky"
      top={"0"}
      zIndex={"100"}
      bg={"white"}
      boxShadow="0px 7px 7px -5px rgba(120,108,120,0.2)"
      border={"1px solid silver"}
    >
      <Flex
        height={{ base: "3.2rem", md: "4.94rem" }}
        px={{ base: "1rem", md: "3rem" }}
        gap={"2rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        
          <Image
            src="https://img.freepik.com/premium-vector/fitness-logo-design-sports-logo_331749-164.jpg"
            alt="logo"
            width={"4rem"}
            mt={"-10px"}
            height={{ base: "3.2rem", md: "100%" }}
            onClick={handleLogo}
          />
        
        <Flex
          height={"100%"}
          align={"center"}
          display={{ base: "none", lg: "flex" }}
          width={"36%"}
          minW={"28rem"}
          justifyContent={"space-around"}
          pos={"relative"}
        >
          <Link to={"/admin-dashboard"}>
            <Text 
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              ALL DATA
            </Text>
          </Link>
          <Link to={"/admin-users"}>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              USERS DATA
            </Text>
          </Link>
          <Link to={'/admin-add-user'}>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              ADD USER
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminNav;
