function Footer({ content }) {
    return (
      <div className="w-full px-12 py-12 flex flex-row justify-between">
        <p>{content.web}</p>
        <p>{content.email}</p>
        <p>{content.contactNumber}</p>
      </div>
    );
  }
  
  export default Footer;
  