import { Box, Button, Text, VStack } from "@chakra-ui/react";

const ContactDetails = ({ project }) => {
  return (
    <VStack align="start" p={5} shadow="md" borderWidth="1px" mt={4}>
      <Text fontWeight="bold">Contact Details:</Text>
      <Text>Email: {project.contact}</Text>
      <Button colorScheme="blue" mt={2}>
        Chat with Project Holder
      </Button>
    </VStack>
  );
};

export default ContactDetails;
