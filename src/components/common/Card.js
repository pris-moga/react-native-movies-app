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
import { useNavigation } from "@react-navigation/native";

const ReusableCard = ({ media }) => {
  const navigation = useNavigation();

  const handleMoreDetails = () => {
    navigation.navigate("MoreDetails", { media });
  };

  if (!media) {
    return null;
  }

  const { title, popularity, release_date, poster_path } = media;

  return (
    <Card p="$5" borderRadius="$lg" w={"80%"} mb="$3">
      <Center>
        <HStack space="md" alignItems="center">
          <Box flexGrow={1}>
            {
              <Image
                h={100}
                w={100}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                }}
                alt={title}
              />
            }
          </Box>
          <Box flexGrow={7}>
            <VStack>
              <Box flexGrow={1}>
                <Text fontWeight="bold">{title}</Text>
              </Box>
              <Box flexGrow={1}>
                <Text>Popularity: {popularity}</Text>
              </Box>
              <Box flexGrow={1}>
                <Text>Release Date: {release_date}</Text>
              </Box>
              <Box flexGrow={1}>
                <Button
                  size="sm"
                  variant="solid"
                  action="primary"
                  borderRadius="$lg"
                  backgroundColor="#6358aa"
                  onPress={handleMoreDetails}
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
