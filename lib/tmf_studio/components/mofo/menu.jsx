import { useEffect, useState } from "react";

function Menu() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  function showSideMenu() {
    console.log("show");
  }

  function hideSideMenu() {
    console.log("hide");
  }

  useEffect(() => {
    show ? showSideMenu() : hideSideMenu();
  }, [show]);

  return (
    <div onClick={clickHandler} className="cursor-pointer w-fit p-1">
      <MenuIcon />
    </div>
  );
}

export default Menu;

function MenuIcon() {
  return (
    <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.11106" cy="4.88889" r="4.88889" fill="black" />
      <circle cx="5.11106" cy="17.1111" r="4.88889" fill="black" />
    </svg>
  );
}
