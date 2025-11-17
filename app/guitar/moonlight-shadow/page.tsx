import Link from 'next/link';

export default function MoonlightShadow() {
    return (
        <div className='window' style={{ width: '50em' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>Moonlight Shadow - Mike Oldfield</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <Link href='/'>
              <button aria-label='Close'></button>
            </Link>
          </div>
        </div>
        <div className='window-body'>
            <h1>Intro</h1>
        </div>
      </div>
    );
}