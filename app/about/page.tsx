import Link from 'next/link';

function About() {
  return (
    <div className='window' style={{ width: '40em' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>About this website</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <Link href='/'>
            <button aria-label='Close'></button>
          </Link>
        </div>
      </div>
      <div className='window-body'>
        <p>&quot;An idiot admires complexity, a genius admires simplicity&quot;</p>
        <p>
          Using the{' '}
          <a href='https://github.com/botoxparty/XP.css' target='_blank'>
            XP.css
          </a>{' '}
          library for the look of this website
        </p>
        <fieldset>
          <legend>About the creator</legend>
          <div className="field-row">Living in the best country on earth and working as a developer</div>
          <div className="field-row">Contrary to this website&apos;s design, I prefer using Mac over Windows</div>
        </fieldset>
      </div>
    </div>
  );
}

export default About;
