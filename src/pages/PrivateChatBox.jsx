import React from "react";
import { Box, VStack, Text, Input, Button } from "@chakra-ui/react";

const PrivateChatBox = () => {
  return (
    <VStack spacing={4} p={5} bg="gray.700" borderRadius="md" boxShadow="base">
      <Text fontSize="lg" fontWeight="bold">
        Chat with the Project Holder
      </Text>
      <Box w="100%" h="300px" bg="white" borderRadius="md" overflowY="scroll">
        {}
      </Box>
      <Input placeholder="Type your message..." />
      <Button colorScheme="blue">Send</Button>
    </VStack>
  );
};

export default PrivateChatBox;
