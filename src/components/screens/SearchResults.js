import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  ScrollView,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  Input,
  InputField,
  HStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import Dropdown from "../common/Dropdown";
import ReusableCard from "../common/Card";

const SearchResults = () => {
  const subtypes = ["Option 1", "Option 2"];

  return (
    <ScrollView>
      <Box style={styles.form}>
        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$3">
            <FormControlLabelText>
              Search Movie/TV Show Name
            </FormControlLabelText>
          </FormControlLabel>
          <Input mb="$3">
            <InputField type="text" placeholder="i.e. James Bond" />
          </Input>
        </FormControl>

        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$3">
            <FormControlLabelText>Choose Search Type</FormControlLabelText>
          </FormControlLabel>
          <HStack space="lg">
            <Box flexGrow={1}>
              <Dropdown subtypes={subtypes} />
            </Box>
            <Button w={100} borderRadius="$lg" backgroundColor="#6358aa">
              <ButtonText>Search</ButtonText>
            </Button>
          </HStack>
          <FormControlHelper>
            <FormControlHelperText fontSize={12}>
              Please select a search type.
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
      </Box>
      <ReusableCard />
      <ReusableCard />
      <ReusableCard />
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 30,
  },
});
