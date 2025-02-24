import Link from 'next/link';
import Image from 'next/image'
import shellyPlugImage from '../images/shelly_plug.jpg'

function Products() {
  return (
    <div className='window' style={{ width: '50em' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>DUI Smart Heater</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <Link href='/'>
            <button aria-label='Close'></button>
          </Link>
        </div>
      </div>
      <div className='window-body'>
        <p>My apartments gas heater is located in the living room leaving the bedroom cold, especially in the mornings.</p>
        <fieldset>
          <legend>Objective</legend>
          <p>Spend as little money as possible to heat up my bedroom so I can wake up not freezing my balls off</p>
        </fieldset>
        <p>
          To be able to control when the heater turns on, I had the option of either buying a heater with some smart functionality built in or
          to control its power input programmatically.
          <br />
          Looking at my I options, I knew that every electric heater has the same efficiency of converting electric energy into heat, so any
          cheap heater should be fine. Anything with smart functionality was always a big step up in price and I was sure any interface on those
          things would be horrible.
          <br />
          As a programmer, my heating system should be using simple technology, which I can manipulate myself. The Shelly Plug, described itself
          as being to be accessible via HTTP calls.
        </p>
        <fieldset>
          <legend>Shelly Plug US</legend>
          <Image src={shellyPlugImage} width={300} height={300} alt='Shelly Plug US' />
        </fieldset>
        <p></p>
      </div>
    </div>
  );
}

export default Products;
