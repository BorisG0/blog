'use client';

import { useContext, useEffect } from 'react';
import { ArticleContext } from '../article-context';

export default function WritingPage() {
  const { setDescription, setDate } = useContext(ArticleContext);
  useEffect(() => {
    setDescription('Thinking and Juggling');
    setDate('11/27/2025');
  }, [setDescription, setDate]);
  return (
    <>
      <p>
        The most important skill of today is writing. It has always been and always will be the most important skill. It has changed the world
        and minds of people. The hardest thing to do as a human is sorting your thoughts and ideas and bringing them to words. It is what makes
        us human - having ideas and expressing them. God knows where thoughts come from but it is our task to build on them, express them, write
        them out. The most important thinkers have been writers. Books everyone reads shape our minds. Programs -expressions of ideas- are the
        center of our economy. Only someone who can bring the thoughts out of his mind in the form words can prompt an AI. We have all the tools
        but no one to put his ideas into them.
      </p>
      <p>
        Consciousness and the human mind are the biggest mysteries to us. Writing helps with understanding them. We now have a machine that
        turns your wishes into reality. Describe what you want and you get it. You can code anywhere now. On a remote island without internet or
        a computer. Take a piece of paper and write exactly what you want. You can give that to the AI later. The important thing is your
        writing. And that is the hard part, the real skill - bringing your thoughts onto paper, knowing what you want. It is unintuitive to
        think that you don&apos;t know what you want. We naturally center our lives around what we want. But if you get asked the question you will
        have to think about what your want. You will need to sort your feelings, experiences and environment. Coming up with an idea and writing
        it down.
      </p>
      <p>
        Thinking without writing is just juggling your thoughts. You have to keep them constantly in suspense, can&apos;t add as much as you like and
        no matter how good you are at juggling the the end all balls fall down. That&apos;s why it&apos;s hard to go to sleep with active thoughts. You&apos;re
        constatnly juggling your thoughts. Writing them down relieves you.
      </p>
      <p>
        I think even from a biological view you&apos;re just keeping thoughts as electric signals in your brain, running them through a circle. It is not
        part of the neurological structure. Once the signal is out it&apos;s gone. You can&apos;t even remember all the physical things you did in the
        past. Your past thoughts are forgotten forever. Write down what you like, forget what you don&apos;t. That will shape who you are.
      </p>
    </>
  );
}
