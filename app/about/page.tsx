'use client';
import { useRouter } from 'next/navigation';

function About() {
  const router = useRouter();
  return (
    <div className='window' style={{ width: '30em' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>About this website</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close' onClick={() => router.push('/')}></button>
        </div>
      </div>
      <div className='window-body'>
        <p>&lsquo;An idiot admires complexity, a genius admires simplicity&rsquo;</p>
        <p>
          Using the{' '}
          <a href='https://github.com/botoxparty/XP.css' target='_blank'>
            XP.css
          </a>{' '}
          library for the look of this website
        </p>
      </div>
    </div>
  );
}

export default About;
