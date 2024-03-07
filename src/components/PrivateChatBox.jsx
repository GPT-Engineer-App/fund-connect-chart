import React, { useState } from "react";
import { Box, VStack, Textarea, Button } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const PrivateChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([...messages, currentMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <VStack align="stretch" p={5} shadow="md" borderWidth="1px" mt={4} bg="white" color="black">
      <Box overflowY="auto" maxH="300px" p={2} borderWidth="1px">
        {messages.map((message, index) => (
          <Box key={index} bg="gray.100" p={2} my={1} borderRadius="md">
            {message}
          </Box>
        ))}
      </Box>
      <Textarea value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} placeholder="Type your message..." />
      <Button rightIcon={<FaPaperPlane />} colorScheme="blue" mt={2} onClick={handleSendMessage}>
        Send
      </Button>
    </VStack>
  );
};

export default PrivateChatBox;
