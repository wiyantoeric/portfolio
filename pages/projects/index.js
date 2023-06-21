import Image from 'next/image';
import Container from '../../components/Container';

function projects() {
  return (
    <Container title={'projects'}>
      <div className="grid w-3/4 grid-flow-dense grid-cols-1 gap-x-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="border-2 border-black">
          <div className="relative h-[180px] w-full">
            <Image alt='image' objectFit='cover' layout="fill" src="/qubic-marker.jpg" />
          </div>
          <div className="flex flex-col p-4">
            <h2 className='text-2xl'></h2>
            <Tag onClick={() => console.log('click')} tag={'game'} />
          </div>
        </div>
        <div className="border-2 border-black p-4"></div>
        <div className="border-2 border-black p-4"></div>
      </div>
    </Container>
  );
}

function Tag({ onClick, tag }) {
  return (
    <span className="w-fit cursor-pointer rounded bg-slate-300 px-1" onClick={onClick}>
      <p>{`#${tag}`}</p>
    </span>
  );
}
export default projects;
