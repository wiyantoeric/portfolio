/* eslint-disable @next/next/no-img-element */
import Head from 'next/dist/shared/lib/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Links from '../components/Links';
import Container from '../components/Container';

export default function Home() {
  const homeRef = useRef(null);
  const projects = useRef(null);

  return (
    <>
      <Container title="about - eric wiyanto">
        <div ref={homeRef} className="flex aspect-square w-[400px] flex-col border-[1px] border-black py-8 px-12">
          <h1 className="text-2xl">eric wiyanto</h1>
          <p>hello there!</p>
          <p>I am a Computer Science</p>
        </div>
      </Container>
    </>
  );
}
