import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
  Center,
  InputGroup,
  InputLeftAddon,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import { gettingUsersData, loginSuccess } from "../Redux/Authentication/action";
import {tokenGenrator} from "../utils/tokenGenrator"
import Nav from "../Components/Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const authData = useSelector((store) => store.authReducer);
  const { users } = authData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    const authentication = users.filter((user) => {
      return user.userEmail === email && user.password === password;
    });
    if(email ==="admin@gmail.com" && password==="admin"){
      navigate("/admin-dashboard")
    }
    else if (authentication.length === 1) {
      const handleSuccessfullLogin = () => {
        toast({
          title: "Login Successful",
          description: `Welcome back ${authentication[0][
            "username"
          ].toUpperCase()}`,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/", { replace: true });
        const { id, username } = authentication[0];
        const token = tokenGenrator();
        const userDetails = { userID: id, token, name: username };
        localStorage.setItem("UserResponseData", JSON.stringify(userDetails));
        dispatch(loginSuccess(userDetails));
        setIsLoading(false);
      };

      setTimeout(handleSuccessfullLogin, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: "Login Unsuccessful",
          description: "Invalid Credentials",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(gettingUsersData());
  }, [dispatch]);
  return (
    <Box>
        <Nav />
    
    <Flex
      backgroundImage={`url(https://st2.depositphotos.com/1017228/7119/i/450/depositphotos_71198405-stock-photo-closeup-image-of-a-fitness.jpg)`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="400px"
        p={8}
        boxShadow="md"
        bg="rgba(255, 255, 255, 0.8)"
        rounded="md"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
          Login Here
        </Text>
        <Stack spacing={4}>
          <FormControl id="email">
            <InputGroup>
              <InputLeftAddon children="Email" paddingLeft={"32px"}
                    paddingRight={"32px"}/>
              <Input
                placeholder="Please enter your email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <InputGroup>
              <InputLeftAddon children="Password" />
              <Input
                placeholder="Please enter your password..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Center>
            <VStack spacing={4}>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
                width="xs"
                onClick={() => handleLogin(users)}
                // isDisabled={email === "" || password === ""}
                isLoading={isLoading}
                loadingText="Logging In"
                leftIcon={<FaSignInAlt />}
              >
                Login
              </Button>
              <ReactLink to="/register">
                <Text>
                  New User ? <span style={{ color: "red" }}>Signup</span>
                </Text>
              </ReactLink>
            </VStack>
          </Center>
        </Stack>
      </Box>
    </Flex>
    </Box>
  );
};

export default Login;
