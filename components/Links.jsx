function Links() {
  const links = [
    { title: 'about', url: '/' },
    { title: 'projects', url: '/projects' },
    // { title: 'reach me', url: '/contacts' },
  ];

  let activeLink = 'about';

  return (
    <div className="my-2 flex min-h-min flex-row gap-x-2">
      {links.map((l) => (
        <a href={l.url} key={l.title} className={`cursor-pointer border-2 border-black p-2 text-black transition-all duration-300 hover:bg-black hover:text-white ${activeLink === l.title ? '' : ''}`}>
          <p>{l.title}</p>
        </a>
      ))}
    </div>
  );
}

export default Links;
