import Link from 'next/link';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='window' style={{ width: '50em' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>DUI Smart Home</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <Link href='/'>
            <button aria-label='Close'></button>
          </Link>
        </div>
      </div>
      <div className='window-body'>
        {children}
      </div>
    </div>
  );
} 