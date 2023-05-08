import Image from 'next/image';
import Container from '../components/Container';

function DownloadPage() {
  return (
    <Container title="download">
      <div className="flex w-[400px] flex-col items-center border-[1px] border-black py-8 px-12">
        <a href="/qubic-marker.jpg" download="qubic-marker.jpg" className="w-fit cursor-pointer border-2 border-[#2D333B] bg-[#2D333B] px-2 py-1 text-white transition-colors duration-150 hover:bg-white hover:text-black">
          download scan image
        </a>
        <div className="spacer h-8"></div>
        <div className="border-2 border-black">
          <Image width={300} height={300} src="/qubic-marker.jpg" alt="qubic marker" />
        </div>
      </div>
    </Container>
  );
}

export default DownloadPage;
