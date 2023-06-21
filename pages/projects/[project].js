import { useRouter } from 'next/router';
import Landing from '../../lib/tmf_studio/pages/br_home/landing';
import Link from 'next/link';
import NotFound from '../404';

export default function Projects() {
  const router = useRouter();

  switch (router.query.project) {
    case 'br-home':
      return <Landing/>;
    default:
      return <NotFound/>;
  }
}
