import React from "react";
import { StyleSheet } from "react-native";
import { Box, Center, ScrollView } from "@gluestack-ui/themed";
import ReusableCard from "../common/Card";
import Dropdown from "../common/Dropdown";

const Movies = () => {
  const subtypes = ["Option 1", "Option 2", "Option 3"];

  return (
    <ScrollView h="$full" w="$full">
      <Center>
        <Box w="$full">
          <Box style={styles.dropdown}>
            <Dropdown subtypes={subtypes} />
          </Box>
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
          <ReusableCard />
        </Box>
      </Center>
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 30,
  },
});
