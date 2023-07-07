import React from "react";
import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleImgIcon = () => {
    navigate("/");
  };
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
        <Box>
          <Image
            src="https://img.freepik.com/premium-vector/fitness-logo-design-sports-logo_331749-164.jpg"
            alt="logo"
            width={"4rem"}
            mt={"-10px"}
            height={{ base: "3.2rem", md: "100%" }}
            onClick={handleImgIcon}
          />
        </Box>
        <Flex
          height={"100%"}
          align={"center"}
          display={{ base: "none", lg: "flex" }}
          width={"36%"}
          minW={"28rem"}
          justifyContent={"space-around"}
          pos={"relative"}
        >
          {/* <Link to={"/men"}>
        <Text
          fontSize={"1.1rem"}
          color={"gray.600"}
          _hover={{ color: "blue.500" }}
          _active={{ color: "blue.500",fontWeight:"bold" }}
        >
          Mens
        </Text>
      </Link> */}
          <Link spy={true} to="Hero" smooth={true} activeClass="activeClass">
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              HOME
            </Text>
          </Link>
          <Link spy={true} to="exercise" smooth={true} activeClass="activeClass">
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              SCHEDULE
            </Text>
          </Link>
          <Link spy={true} to="Classes" smooth={true} activeClass="activeClass">
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              CLASSES
            </Text>
          </Link>
          <Link spy={true} to="pricing" smooth={true} activeClass="activeClass">
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              _hover={{ color: "blue.500" }}
              _active={{ color: "blue.500", fontWeight: "bold" }}
              cursor={"pointer"}
            >
              PRICING
            </Text>
          </Link>
          <Button style={{ backgroundColor: "white" }} onClick={handleLogin}>
            <CiUser style={{ fontSize: "25px" }} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
