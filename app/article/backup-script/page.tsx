import Link from 'next/link';
import books from '../../data/books';

function BackupScriptPage() {
  return (
    <>
      Reading{' '}
      <Link href={books[0].link || ''} target='_blank'>
        The Pragramtic Programmer
      </Link>{' '}
      I came across on the exercise that describes how you would backup your laptop if suddenly completely unusable.
    </>
  );
}

export default BackupScriptPage;
