import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='window' style={{ width: '30em' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>A very cool website</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <p>Welcome to Boris Gratchev&apos;s website</p>
          <Link href='/books'>Books</Link>
          <br />
          <Link href='/about'>About</Link>
        </div>
      </div>
    </>
  );
}
