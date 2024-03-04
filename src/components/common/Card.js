import React from "react";
import {
  Button,
  ButtonText,
  Box,
  Card,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";

const ReusableCard = () => {
  return (
    <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3" mb={1}>
      <Center>
        <HStack space="md" alignItems="center">
          <Box flexGrow={1}>
            <Image
              h={100}
              w={100}
              source={{
                uri: "https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
              }}
            />
          </Box>
          <Box flexGrow={7}>
            <VStack>
              <Box flexGrow={1}>
                <Text fontWeight="bold">Title</Text>
              </Box>
              <Box flexGrow={1}>
                <Text>Popularity:</Text>
              </Box>
              <Box flexGrow={1}>
                <Text>Release Date:</Text>
              </Box>
              <Box flexGrow={1}>
                <Button
                  size="sm"
                  variant="solid"
                  action="primary"
                  borderRadius="$lg"
                  backgroundColor="#6358aa"
                >
                  <ButtonText>More Details</ButtonText>
                </Button>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Center>
    </Card>
  );
};

export default ReusableCard;
