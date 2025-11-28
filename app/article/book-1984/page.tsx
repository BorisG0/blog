'use client';

import Image from 'next/image';
import coverPage from '@/public/cover1984.jpeg';
import datePage from '@/public/date1984.jpeg';
import { useContext, useEffect } from 'react';
import { ArticleContext } from '../article-context';

export default function Book1984Page() {
  const { setDescription, setDate } = useContext(ArticleContext);
  useEffect(() => {
    setDescription('1984 Book');
    setDate('10/26/2025');
  }, [setDescription, setDate]);
  return (
    <>
      <p>
        On a walk around Mountain View I found maybe the coolest artifact of my life. I like walking through the suburbs with the family housing
        and now and then taking a peak into the different little free libraries. They are, for the most part, filled with modern, not
        interesting, partly childrens, partly cooking or just woke books.
      </p>
      <p>
        One day, going through a neighbourhood I never walked through before, I found a little free library. That&apos;s where I saw it. An old
        beat up side of a book saying &quot;Nineteen Eighty-four&quot;. I knew I found gold. Taking it our revealed the beautiful old school
        pulp style cover artwork. &quot;Big Brother&quot;, &quot;Anti-Sex League&quot;, &quot;War is Peace&quot;. Carrying it home, I took an
        extra long route through a park holding back my excitement. It&apos;s my favourite book. I read it back in Germany but didn&apos;t take
        it with me to the US. Reading it again was always on my mind. I thought about how I would bring my copy here once I&apos;m visiting
        Germany again. That was not necessary now. I had the coolest version I could imagine right in my hands. Back home I admired its cover,
        flipped through the old crusty pages and put it in my shelf. The collection in my new home is starting to take shape.
      </p>
      <p>
        It is only when I was packing for my first trip back to Germany when I thought about this book again. It would make a great gift to my
        friend in Germany. He likes collecting old vintage items with rich histories. We were just talking about his collection of old text
        books and how he has a modern copy of 1984 but has never got around to reading it. No sooner thought upon than done I examined my
        recently acquired copy a little closer. Wanting to know its printing date I flipped through the front pages. The cover and spine being
        held together by tape it made an impression of rich history. That&apos;s when I saw it: &quot;Fourth Printing, February, 1952&quot;,
        &quot;Printed in the United States of America&quot;. I had to look up when the novel was initially released: 1949. This copy was printed
        only two years after the books publishing! At the height of the cold war. The first American mass market paper back edition. Marketed to
        readers who never heard of it before. I was astonished by the releveal of what I was holding in my hands. My excitement reignited.
      </p>
      <p>
        I was thinking about my upcoming trip. Should I really give this book, this copy, this part of English literature away? I created a pros
        and cons list in my mind. My friend would really deeply appreciate the gift. He is the only one who would find it at least as cool as
        me. On the other side I have my nice story of finding it in a little free library. Definetely something I could proudly show of to
        guests. Would the story of this copy end with me? Sitting in the IKEA shelf of my apartment surrounded by other books not nearly as old
        or rich and relevant as this?
      </p>
      <p>
        A realization came to my mind. Giving it away and bringing it to Germany to my friend would leave me without the coolest version of my
        favourite book - something to display in the home I&apos;m still thinking of how to decorate. But bringing it to my friend. Having it in
        his bookshelf would make me part of its history. It frees me not only from my selfishness but also of the chains of physical possession.
        I will continue the books story and cherish human connection and friendship.
      </p>
      <Image src={coverPage} alt='cover' style={{ width: '50%', height: 'auto', objectFit: 'contain' }} />
      <Image src={datePage} alt='date' style={{ width: '50%', height: 'auto', objectFit: 'contain' }} />
    </>
  );
}
