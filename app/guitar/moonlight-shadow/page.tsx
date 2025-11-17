import Link from 'next/link';
import Image from "next/image";
import introTab from "@/public/guitar/ms_intro.png";
import solo1_1 from "@/public/guitar/ms_solo1_1.png";
import solo1_2 from "@/public/guitar/ms_solo1_2.png";
import solo1_3 from "@/public/guitar/ms_solo1_3.png";
import solo1_4 from "@/public/guitar/ms_solo1_4.png";
import solo1_5 from "@/public/guitar/ms_solo1_5.png";

export default function MoonlightShadow() {
    return (
        <div className='window' style={{ width: '150em' }}>
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
            <Image src={introTab} alt='Moonlight Shadow Intro Tab' />
            <h1>Solo 1</h1>
            <Image src={solo1_1} alt='Moonlight Shadow Solo Part 1 Tab' />
            <Image src={solo1_2} alt='Moonlight Shadow Solo Part 2 Tab' />
            <Image src={solo1_3} alt='Moonlight Shadow Solo Part 3 Tab' />
            <Image src={solo1_4} alt='Moonlight Shadow Solo Part 4 Tab' />
            <Image src={solo1_5} alt='Moonlight Shadow Solo Part 5 Tab' />
        </div>
      </div>
    );
}