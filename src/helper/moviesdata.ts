export type Movie = {
  id: number;
  title: string;
  genre: string[];
  release_year: number;
  rating: string;
  duration: string;
  description: string;
  director: string;
  cast: string[];
  image: string;
  trailer: string;
};

export const moviesdata: Movie[] = [
  {
    id: 1, // Assign unique id for each movie
    title: "Inception",
    genre: ["Action", "Adventure", "Sci-Fi"],
    release_year: 2010,
    rating: "PG-13",
    duration: "2h 28min",
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious gets a shot at redemption when he is tasked with planting an idea into the mind of a CEO.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
    ],
    image: "https://example.com/inception.jpg",
    trailer: "https://example.com/inception_trailer.mp4",
  },
  {
    id: 2, // Assign unique id for each movie
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    release_year: 1972,
    rating: "R",
    duration: "2h 55min",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    image: "https://example.com/the_godfather.jpg",
    trailer: "https://example.com/the_godfather_trailer.mp4",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    release_year: 1994,
    rating: "R",
    duration: "2h 22min",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    image: "https://example.com/the_shawshank_redemption.jpg",
    trailer: "https://example.com/the_shawshank_redemption_trailer.mp4",
  },
];
