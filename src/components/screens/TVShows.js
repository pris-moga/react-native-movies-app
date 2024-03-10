import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Box, Center, ScrollView } from "@gluestack-ui/themed";
import ReusableCard from "../common/Card";
import Dropdown from "../common/Dropdown";

const TVShows = () => {
  const subtypes = ["Airing Today", "On The Air", "Popular", "Top Rated"];
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [TVShows, setTVShows] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRiNjI2NzRjZTkyOGZjMTQ4N2U3MjY1ZTQwNDY4YyIsInN1YiI6IjY0M2Q3NGI1MmVhNmI5MDRlZjUyMjhmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n5Ysv8B9JYUzZf3BjjyOkwoY5rnNh7pFcPsRe5O7e60";

  useEffect(() => {
    if (selectedSubtype) {
      fetchTVShows(selectedSubtype);
    }
  }, [selectedSubtype]);

  const fetchTVShows = async (subtype) => {
    try {
      const formattedSubtype = subtype.replace(/\s+/g, "_");
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${formattedSubtype.toLowerCase()}?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setTVShows(data.results);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
  };

  return (
    <ScrollView h="$full" w="$full">
      <Center>
        <Box w="100%">
          <Box style={styles.dropdown}>
            <Dropdown
              subtypes={subtypes}
              onSelectSubtype={handleSubtypeSelect}
            />
          </Box>
          <Center>
            {TVShows.map((show) => (
              <ReusableCard key={show.id} media={show} />
            ))}
          </Center>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default TVShows;

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 30,
  },
});
