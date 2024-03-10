import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Box, Center, ScrollView } from "@gluestack-ui/themed";
import ReusableCard from "../common/Card";
import Dropdown from "../common/Dropdown";

const Movies = () => {
  const subtypes = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [movies, setMovies] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWRiNjI2NzRjZTkyOGZjMTQ4N2U3MjY1ZTQwNDY4YyIsInN1YiI6IjY0M2Q3NGI1MmVhNmI5MDRlZjUyMjhmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n5Ysv8B9JYUzZf3BjjyOkwoY5rnNh7pFcPsRe5O7e60";

  useEffect(() => {
    if (selectedSubtype) {
      fetchMovies(selectedSubtype);
    }
  }, [selectedSubtype]);

  const fetchMovies = async (subtype) => {
    try {
      const formattedSubtype = subtype.replace(/\s+/g, "_");
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${formattedSubtype.toLowerCase()}?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
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
            {movies.map((movie) => (
              <ReusableCard key={movie.id} media={movie} />
            ))}
          </Center>
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
