const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzY1YTlhMDktZmUzNi00ODhiLTg5M2ItMjI1Y2NlZmNiYWM0XkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg',
  },
  {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_SX300.jpg',
  },
  {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg',
  },
  {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg',
  },
  {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg',
  },
  {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg',
  },
  {
    id: '11',
    title: 'The Dark Knight',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
  },
  {
    id: '12',
    title: 'The Dark Knight Rises',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
  },
  {
    id: '13',
    title: 'Man of steel',
    category: 'Action',
    likes: 5,
    dislikes: 2,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg',
  },
  {
    id: '14',
    title: 'Pirates of the caribbean ',
    category: 'Comedy',
    likes: 2,
    dislikes: 1,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
];

const movies$ = new Promise((resolve) => setTimeout(resolve, 100, movies));
export default movies$;
