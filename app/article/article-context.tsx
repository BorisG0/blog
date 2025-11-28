import { createContext } from 'react';

export const ArticleContext = createContext<{
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}>({
  description: '',
  setDescription: () => {},
  date: '',
  setDate: () => {},
});
