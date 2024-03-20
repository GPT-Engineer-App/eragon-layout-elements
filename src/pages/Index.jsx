import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaUser, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
      {/* Top Navigation */}
      <Flex align="center" px={4} py={2} borderBottomWidth={1} borderColor="gray.700">
        <Box>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlcmFnb24lMjBsb2dvfGVufDB8fHx8MTcxMDk2MjE5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Eragon Logo" boxSize="40px" />
        </Box>
        <Spacer />
        <HStack spacing={4}>
          <Button size="sm" variant="ghost">
            Home
          </Button>
          <Button size="sm" variant="ghost">
            About
          </Button>
          <Button size="sm" variant="ghost">
            Contact
          </Button>
          <IconButton size="sm" variant="ghost" icon={<FaUser />} aria-label="Profile" />
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} py={20} px={4} align="center" textAlign="center">
        <Heading as="h1" size="2xl">
          Hi, I'm Eragon 👋
        </Heading>
        <Text fontSize="xl" maxW="600px">
          I'm your AI sales rep. Let me take selling off your plate so you can focus on building your product. I can:
        </Text>

        <HStack spacing={4}>
          <Button colorScheme="blue">Find Prospects</Button>
          <Button colorScheme="blue">Prepare For A Discovery Call</Button>
          <Button colorScheme="blue">Create a Cadence</Button>
          <Button colorScheme="blue">Highlight top performing talk tracks</Button>
        </HStack>
      </VStack>

      {/* Bottom Links */}
      <Flex px={4} py={8} borderTopWidth={1} borderColor="gray.700">
        <Button variant="link" color="gray.400">
          Request access
        </Button>
        <Spacer />
        <Button variant="link" color="gray.400">
          About us
        </Button>
      </Flex>

      {/* Chat Bubble */}
      <Box pos="fixed" bottom={4} right={4} bg="blue.500" p={4} rounded="lg" boxShadow="lg" maxW="300px">
        <Text mb={2}>
          Can you create an interactive map of California wildfires using this CSV data? <a href="https://www.fire.ca.gov/incidents">https://www.fire.ca.gov/incidents</a>
        </Text>
        <IconButton icon={<FaComments />} aria-label="Open chat" colorScheme="blackAlpha" variant="outline" size="sm" alignSelf="flex-end" />
      </Box>
    </Box>
  );
};

export default Index;
