'use client'

import Link from 'next/link';
import { useState } from 'react';
import { ArticleContext } from './article-context';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  const [description, setDescription] = useState('');
  return (
    <ArticleContext.Provider value={{ description, setDescription }}>
      <div className='window' style={{ width: '50em' }}>
        <div className='title-bar'>
          <div className='title-bar-text'>{description}</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Maximize'></button>
            <Link href='/'>
              <button aria-label='Close'></button>
            </Link>
          </div>
        </div>
        <div className='window-body'>{children}</div>
      </div>
    </ArticleContext.Provider>
  );
}
