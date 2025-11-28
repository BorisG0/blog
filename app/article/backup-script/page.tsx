'use client';

import Link from 'next/link';
import books from '../../data/books';
import { useContext, useEffect } from 'react';
import { ArticleContext } from '../article-context';
import './style.css';

function BackupScriptPage() {
  const { setDescription, setDate } = useContext(ArticleContext);
  useEffect(() => {
    setDescription('Backup your Laptop');
    setDate('03/23/2025')
  }, [setDescription, setDate]);
  return (
    <>
      <p>
        Reading{' '}
        <Link href={books[0].link || ''} target='_blank'>
          The Pragramtic Programmer
        </Link>{' '}
        I came across the exercise on backing up your laptop. Imagine your laptop is rendered useless in this very moment. How long would it
        take you to restore it to a state that allows you to continue working?
      </p>
      Some of the things I would need to restore are:
      <ul>
        <li>installed applications</li>
        <li>installed homebrew packages</li>
        <li>VS Code extensions (although also handled with &apos;Settings Sync&apos;)</li>
      </ul>
      The plan is to compile all of those configurations into a text format that can be stored in a version control system.
      <h1 style={{ fontSize: '16px' }}>Installed Applications</h1>
      <div className='window-body'>
        <pre>ls /Applications {'>'} installed_apps.txt</pre>
      </div>
      <br />
      <h1 style={{ fontSize: '16px' }}>Homebrew Packages</h1>
      <div className='window-body'>
        <pre>brew list {'>'} homebrew_packages.txt</pre>
      </div>
      <br />
      <h1 style={{ fontSize: '16px' }}>VS Code Extensions</h1>
      <div className='window-body'>
        <pre>code --list-extensions {'>'} vscode_extensions.txt</pre>
      </div>
      <br />
      <p>Put everything into a GitHub repo and you are good to go.</p>
      <p>To be more advanced, also write a script that does all of the above and pushes to your repo and let it run every day.</p>
    </>
  );
}

export default BackupScriptPage;
