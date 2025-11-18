const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    releaseDate: '1994-09-22',
    type: ['Drama'],
    team: {
      director: 'Frank Darabont',
      producer: 'Niki Marvin',
      leadActor: 'Tim Robbins',
      writer: 'Stephen King'
    }
  },
  {
    id: 2,
    title: 'The Godfather',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseDate: '1972-03-24',
    type: ['Crime', 'Drama'],
    team: {
      director: 'Francis Ford Coppola',
      producer: 'Albert S. Ruddy',
      leadActor: 'Marlon Brando',
      writer: 'Mario Puzo'
    }
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    releaseDate: '2008-07-18',
    type: ['Action', 'Crime', 'Drama'],
    team: {
      director: 'Christopher Nolan',
      producer: 'Emma Thomas',
      leadActor: 'Christian Bale',
      writer: 'Jonathan Nolan'
    }
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
    description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    releaseDate: '1994-10-14',
    type: ['Crime', 'Drama'],
    team: {
      director: 'Quentin Tarantino',
      producer: 'Lawrence Bender',
      leadActor: 'John Travolta',
      writer: 'Quentin Tarantino'
    }
  },
  {
    id: 5,
    title: 'Forrest Gump',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the eyes of an Alabama man with a low IQ.',
    releaseDate: '1994-07-06',
    type: ['Drama', 'Romance'],
    team: {
      director: 'Robert Zemeckis',
      producer: 'Wendy Finerman',
      leadActor: 'Tom Hanks',
      writer: 'Winston Groom'
    }
  },
  {
    id: 6,
    title: 'Inception',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    releaseDate: '2010-07-16',
    type: ['Action', 'Sci-Fi', 'Thriller'],
    team: {
      director: 'Christopher Nolan',
      producer: 'Emma Thomas',
      leadActor: 'Leonardo DiCaprio',
      writer: 'Christopher Nolan'
    }
  },
  {
    id: 7,
    title: 'The Matrix',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    releaseDate: '1999-03-31',
    type: ['Action', 'Sci-Fi'],
    team: {
      director: 'Lana Wachowski',
      producer: 'Joel Silver',
      leadActor: 'Keanu Reeves',
      writer: 'Lilly Wachowski'
    }
  },
  {
    id: 8,
    title: 'Interstellar',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    releaseDate: '2014-11-07',
    type: ['Sci-Fi', 'Drama', 'Adventure'],
    team: {
      director: 'Christopher Nolan',
      producer: 'Lynda Obst',
      leadActor: 'Matthew McConaughey',
      writer: 'Jonathan Nolan'
    }
  },
  {
    id: 9,
    title: 'Parasite',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.jpg',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    releaseDate: '2019-10-11',
    type: ['Thriller', 'Comedy', 'Drama'],
    team: {
      director: 'Bong Joon Ho',
      producer: 'Kwak Sin-ae',
      leadActor: 'Song Kang-ho',
      writer: 'Bong Joon Ho'
    }
  },
  {
    id: 10,
    title: 'Schindler\'s List',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_poster.jpg',
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.',
    releaseDate: '1993-12-15',
    type: ['Biography', 'Drama', 'History'],
    team: {
      director: 'Steven Spielberg',
      producer: 'Steven Spielberg',
      leadActor: 'Liam Neeson',
      writer: 'Thomas Keneally'
    }
  },
  {
    id: 11,
    title: 'Goodfellas',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    releaseDate: '1990-09-21',
    type: ['Biography', 'Crime', 'Drama'],
    team: {
      director: 'Martin Scorsese',
      producer: 'Irwin Winkler',
      leadActor: 'Robert De Niro',
      writer: 'Nicholas Pileggi'
    }
  },
  {
    id: 12,
    title: 'The Lord of the Rings: The Return of the King',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-The_Return_of_the_King%282003%29.jpg',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom.',
    releaseDate: '2003-12-17',
    type: ['Action', 'Adventure', 'Fantasy'],
    team: {
      director: 'Peter Jackson',
      producer: 'Barrie M. Osborne',
      leadActor: 'Elijah Wood',
      writer: 'J.R.R. Tolkien'
    }
  }
];

export default movies;