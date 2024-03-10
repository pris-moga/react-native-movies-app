import React, { useState } from "react";
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
  Center,
} from "@gluestack-ui/themed";
import Dropdown from "../common/Dropdown";
import ReusableCard from "../common/Card";

const SearchResults = () => {
  const [searchType, setSearchType] = useState("movie");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRiNjI2NzRjZTkyOGZjMTQ4N2U3MjY1ZTQwNDY4YyIsInN1YiI6IjY0M2Q3NGI1MmVhNmI5MDRlZjUyMjhmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n5Ysv8B9JYUzZf3BjjyOkwoY5rnNh7pFcPsRe5O7e60";

  const handleSearchTypeSelect = (type) => {
    setSearchType(type);
  };

  const handleInputChange = (text) => {
    setSearchInput(text);
  };

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURI(searchInput);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${searchType}?include_adult=false&language=en-US&page=1&query=${encodedQuery}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

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
            <InputField
              type="text"
              placeholder="i.e. James Bond"
              onChangeText={handleInputChange}
              value={searchInput}
            />
          </Input>
        </FormControl>

        <FormControl size="lg" isRequired={true}>
          <FormControlLabel mb="$3">
            <FormControlLabelText>Choose Search Type</FormControlLabelText>
          </FormControlLabel>
          <HStack space="lg">
            <Box flexGrow={1}>
              <Dropdown
                subtypes={["movie", "multi", "tv"]}
                onSelectSubtype={handleSearchTypeSelect}
              />
            </Box>
            <Button
              w={100}
              borderRadius="$lg"
              backgroundColor="#6358aa"
              onPress={handleSearch}
            >
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
      <Center>
        {searchResults.map((media) => (
          <ReusableCard key={media.id} media={media} />
        ))}
      </Center>
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
