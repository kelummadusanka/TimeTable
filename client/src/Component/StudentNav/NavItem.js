import React from "react";
import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  Link
  
} from "@chakra-ui/react";

// import {Link} from 'react-router-dom'

export default function NavItem({ icon, title, active, navSize,to }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      textColor='black'
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right" >
        <Link
        
          backgroundColor={active && "#d1cce6"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#d1cce6" }}
          _active={{ textDecor: "none", backgroundColor: "#d1cce6" }}
          w={navSize === "large" && "100%"}
          href = {to}
        >
          <MenuButton w="100%" >
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        {/* <MenuList py={0} border="none" w={200} h={200} ml={5}></MenuList> */}
      </Menu>
    </Flex>
  );
}
