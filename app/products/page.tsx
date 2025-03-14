import Link from 'next/link';
import Image from 'next/image'
import shellyPlugImage from '../images/shelly_plug.jpg'

function Products() {
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
        <h2>Articles</h2>
        <ul>
          <li>
            <Link href="/article/smart-heater">Smart Heater Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
