import React, { useState } from "react";
import ContactDetails from "./ContactDetails";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack, CircularProgress, CircularProgressLabel, Image } from "@chakra-ui/react";
import { FaSearch, FaHandshake, FaChartPie, FaLightbulb } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dummy success rate, in a real app this should come from server-side calculations
  const successRate = 75;

  const handleSearch = () => {
    // Dummy search function, in a real app this should interact with a backend service
    setLoading(true);
    setTimeout(() => {
      setProjects([
        { name: "Project Solar", description: "Renewable energy initiative", funded: true, contact: "solar@projects.com" },
        { name: "Project Health", description: "Healthcare for everyone", funded: false, contact: "health@projects.com" },
        { name: "Project Education", description: "Improving education systems", funded: false, contact: "edu@projects.com" },
        { name: "Project Nutrition", description: "Nutritional support for communities", funded: true, contact: "nutrition@projects.com" },
        { name: "Project Environment", description: "Preserving natural ecosystems", funded: false, contact: "environment@projects.com" },
      ]);
      setLoading(false);
      toast({
        title: "Search completed.",
        description: "We've found some projects for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Container maxW="container.xl" p={5} bg="brand.800" color="white">
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" display="flex" alignItems="center">
          <FaHandshake />
          <span style={{ marginLeft: "0.5rem" }}>Funder Connect</span>
        </Heading>
        <Text>Connecting funders with project holders for a better future.</Text>
        <Flex>
          <Input placeholder="Search Projects" value={search} onChange={(e) => setSearch(e.target.value)} mr={2} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch} isLoading={loading}>
            Search
          </Button>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <CircularProgress value={successRate} color="green.400" size="120px" thickness="8px">
            <CircularProgressLabel>{successRate}%</CircularProgressLabel>
          </CircularProgress>
          <Box>
            <Heading as="h3" size="lg" display="flex" alignItems="center">
              <FaChartPie />
              <span style={{ marginLeft: "0.5rem" }}>Success Rate</span>
            </Heading>
            <Text>The rate of successful project funding within our platform.</Text>
          </Box>
        </Stack>
        <Box w="100%">
          {projects.map((project, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" my={2}>
              <Heading fontSize="xl" display="flex" alignItems="center">
                <FaLightbulb />
                <span style={{ marginLeft: "0.5rem" }}>{project.name}</span>
              </Heading>
              <Text mt={4}>{project.description}</Text>
              <Button mt={4} colorScheme={project.funded ? "green" : "red"} variant="solid" isDisabled={project.funded} onClick={() => setSelectedProject(project)}>
                {project.funded ? "Funded" : "Fund This Project"}
              </Button>
            </Box>
          ))}
          {selectedProject && <ContactDetails project={selectedProject} />}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
