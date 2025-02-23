import Link from 'next/link';

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
          <Link href='/books'>Books</Link>
          <section className='tabs' style={{ maxWidth: '500px' }}>
            <menu role='tablist' aria-label='Sample Tabs'>
              <button role='tab' aria-selected='true' aria-controls='tab-A'>
                About me
              </button>
              <button role='tab' aria-controls='tab-B'>
                Portrait
              </button>
            </menu>
            <article role='tabpanel' id='tab-A'>
              <h3>Tab Content</h3>
              <p>
                I like to do some coding from time to time
                <br />
                my favourite languages:
                <br/>
                <code>Java</code>
                <br/>
                <code>Python</code>
              </p>
              <p>
                Read more at{' '}
                <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role' target='_blank'>
                  MDN Web docs - ARIA: tab role
                </a>
              </p>
            </article>
            <article role='tabpanel' hidden id='tab-B'>
              <h3>More...</h3>
              <p>This tab contains a GroupBox</p>
            </article>
            <article role='tabpanel' hidden id='tab-C'>
              <h3>Tab 3</h3>
              <p>Lorem Ipsum Dolor Sit</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
