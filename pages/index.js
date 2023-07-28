import { useEffect, useRef } from 'react';
import Container from '../components/Container';
import Links from '../components/Links';

export default function Home() {
  const homeRef = useRef(null);
  const projects = useRef(null);

  return (
    <>
      <Container>
        <div ref={homeRef} className="flex min-h-[400px] w-[400px] flex-col bg-white py-8 px-12 sm:border-2 sm:border-black">
          <h1 className="text-2xl">Eric Wiyanto</h1>
          <div className="spacer h-4"></div>
          <p className="italic">Hello there! I&apos;m a Computer Science undergraduate at Jakarta, Indonesia</p>
          <div className="spacer h-4"></div>
          <p>I create frontend website and mobile apps, mainly with Flutter and React</p>
          <div className="spacer h-16"></div>
          <div className="flex flex-col items-end gap-y-2 self-end">
            <a
              href="https://github.com/wiyantoeric"
              rel="noreferrer"
              target="_blank"
              className="min-w-[96px] cursor-pointer border-2 border-[#2D333B] bg-[#2D333B] px-2 py-1 text-center text-white transition-colors duration-150 hover:bg-white hover:text-black"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/ericwiyanto"
              rel="noreferrer"
              target="_blank"
              className="min-w-[96px] cursor-pointer border-2 border-[#0A66C2] bg-[#0A66C2] px-2 py-1 text-center text-white transition-colors duration-150 hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/wiyantoeric"
              rel="noreferrer"
              target="_blank"
              className="min-w-[96px] cursor-pointer border-2 border-[#EA4C89] bg-[#EA4C89] px-2 py-1 text-center text-white transition-colors duration-150 hover:bg-white hover:text-black"
            >
              Dribbble
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
