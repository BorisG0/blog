'use client'

import { books } from '@/app/data/books';
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className='window' style={{ width: '300px' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>My Book Recommendations</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close' onClick={() => router.push('/')}></button>
          </div>
        </div>
        <div className='window-body'>
          <p>I compiled some of the books I read over the years.</p>

          <ul className='tree-view'>
            <li>
              <details open>
                <summary>Fiction</summary>
                <ul>
                  {books.map((book) => (
                    <li key={book.title}>
                      <details open>
                        <summary>{book.title}</summary>
                        <ul>
                          <li>by {book.author}</li>
                          <li>{book.comment}</li>
                          <li>{book.recommend ? 'I recommend' : 'I do not recommend'}</li>
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary>Non-fiction</summary>
                <ul>
                  <li>Currently no books here</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
