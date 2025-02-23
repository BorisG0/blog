'use client'

import { useRouter } from 'next/navigation'
import BookInfo from './components/BookInfo'
import { books } from '../data/books'
export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className='window' style={{ width: '100%' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>Book Recommendations</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close' onClick={() => router.push('/')}></button>
          </div>
        </div>
        <div className='window-body'>
          <p>Books I&apos;ve read and enjoyed</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
            {books.map((book) => (
              <BookInfo key={book.title} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
