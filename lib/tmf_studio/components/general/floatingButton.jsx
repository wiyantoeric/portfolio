export default function FloatingButton({ floatingLink }) {
  return (
    <div className="fixed bottom-2 right-10 m-6 mx-auto flex border-2 border-black bg-white z-40 gap-x-1">
      {floatingLink.map(function (link) {
        return <FloatingLink key={link.alt} link={link} />;
      })}
    </div>
  );
}

function FloatingLink({ link }) {
  return (
    <div>
      <div className="px-3 py-2 transition-colors duration-300 hover:cursor-pointer hover:bg-slate-200">
        <img className="w-5" src={link.imageUrl} alt={link.alt} />
      </div>
    </div>
  );
}
