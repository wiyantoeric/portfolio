import Link from 'next/link';
import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    return () => (document.body.style.backgroundColor = '#FFFFFF');
  }, []);
  return (
    <Link href={'/'}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none border-2 border-white p-4 text-white transition-colors duration-150 hover:bg-white hover:text-black">Page not found</div>
    </Link>
  );
}

export default NotFound;
