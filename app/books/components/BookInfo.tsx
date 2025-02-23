import { Book } from '@/app/types/book';

interface BookInfoProps {
  book: Book;
}

function BookInfo({ book }: BookInfoProps) {
  return (
    <div className='window' style={{width: '300px'}}>
      <div className='title-bar'>
        <div className='title-bar-text'>{book.title}</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        <p><strong>Author:</strong> {book.author}</p>
        {book.description && <p>{book.description}</p>}
      </div>
    </div>
  );
}

export default BookInfo;