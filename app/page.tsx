import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='window' style={{ width: '30em' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>Home</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <button aria-label='Close'></button>
          </div>
        </div>
        <div className='window-body'>
          <h1>Boris Gratchev</h1>
          <Link href='/books'>Books</Link>
          
          <br />
          <Link href='/about'>About</Link>

          <h1>Essays</h1>
          <Link href='/article/smart-heater'>DUI Smart Heater</Link>
          <br />
          <Link href='/article/backup-script'>Backup your Laptop</Link>
          <br />
          <Link href='/article/imperial-units'>I love imperial units</Link>

          <h1>Tabs, Chords, Strumming Patterns</h1>
          <Link href='/guitar/moonlight-shadow'>Moonlight Shadow</Link>

          <h1>Other</h1>
          <Link href='/ai-opinion'>My Opinion on AI</Link>
          <br />
          <Link href='https://faculty.georgetown.edu/jod/texts/twain.german.html' target='_blank'>Mein geliebtes Deutsch</Link>
          <br />
          <Link href='/liguria'>Лигурия</Link>
        </div>
      </div>
    </>
  );
}
