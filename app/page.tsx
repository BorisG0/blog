import BookInfo from '@/books/components/BookInfo';

export default function Home() {
  return (
    <>
      <div className='window' style={{ width: '300px' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>A very cool website</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>Welcome to Boris Gratchev's website</p>
        </div>
      </div>
      <BookInfo />
    </>
  );
}
