import Container from '../components/Container';

function links() {
  return (
    <Container title={'contacts'}>
      <div className="flex min-h-[400px] w-[400px] flex-col border-[1px] border-black py-8 px-12">
        <h1 className="text-2xl">Reach me on</h1>
        <div className="spacer h-8"></div>
        <a
          href="https://linkedin.com/in/eric-wiyanto-aa640022a"
          rel="noreferrer"
          target="_blank"
          className="w-full cursor-pointer border-2 border-[#0A66C2] bg-[#0A66C2] py-2 text-center text-white transition-colors duration-150 hover:bg-white hover:text-black"
        >
          linkedin
        </a>
        <div className="spacer h-4"></div>
        <a
          href="https://github.com/wiyantoeric"
          rel="noreferrer"
          target="_blank"
          className="w-full cursor-pointer border-2 border-[#2D333B] bg-[#2D333B] py-2 text-center text-white transition-colors duration-150 hover:bg-white hover:text-black"
        >
          github
        </a>
      </div>
    </Container>
  );
}

export default links;
