
import BookInfo from './components/BookInfo';
import { books } from '../data/books';
import Link from 'next/link';
export default function Page() {
  const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
  return (
    <div className='window' style={{ width: '100%' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>Book Recommendations</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <Link href="/">
            <button aria-label='Close'></button>
          </Link>
        </div>
      </div>
      <div className='window-body'>
        <p>Books I&apos;ve read and enjoyed</p>
        <p>Images are fetched using the Amazon API, links are not affiliate links</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
          {shuffledBooks.map((book) => (
            <BookInfo key={book.title} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
