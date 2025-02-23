import { Book } from '@/app/data/types';
import { useEffect, useState } from 'react';

interface BookInfoProps {
  book: Book;
}

function BookInfo({ book }: BookInfoProps) {
  const [asin, setAsin] = useState<string>('');

  useEffect(() => {
    if (book.link) {
      const asin = book.link.split('/dp/')[1].split('/')[0];
      setAsin(asin);
      console.log(asin);
    }
  }, [book.link]);

  return (
    <fieldset style={{ width: '20em', height: '33em' }}>
      <legend>
        {book.title}
      </legend>
      {book.image && <img src={book.image} alt={book.title} />}
      {(!book.image && asin) && (
        <a href={book.link} target='_blank'>
          <img
            src={`https://images.amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`}
            style={{ width: '100%', height: '95%', objectFit: 'contain' }}
          />
        </a>
      )}
      <label>by {book.author}</label>
    </fieldset>
  );
}

export default BookInfo;
