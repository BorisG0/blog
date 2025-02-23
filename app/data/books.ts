export type Book = {
  title: string;
  author: string;
  recommend: boolean;
  comment: string;
  image: string;
};

export const books: Book[] = [
  {
    title: 'American Psycho',
    author: 'Bret Easton Ellis',
    recommend: true,
    comment: 'Fun read, some similarities to the movie. I found it even better.',
    image: '/images/american-psycho.jpg',
  },
];
