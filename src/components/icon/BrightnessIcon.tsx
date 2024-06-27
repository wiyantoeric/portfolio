function BrightnessIcon({ light }: { light: boolean }) {
  console.log(light);
  
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      // filter={light ? "invert(1)" : "invert(0)"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={light ? "#FFFFFF" : "#000000"}
    >
      <path
        d="M12 7L13.5307 8.30448L15.5355 8.46447L15.6955 10.4693L17 12L15.6955 13.5307L15.5355 15.5355L13.5307 15.6955L12 17L10.4693 15.6955L8.46447 15.5355L8.30448 13.5307L7 12L8.30448 10.4693L8.46447 8.46447L10.4693 8.30448L12 7Z"
        stroke={light ? "#FFFFFF" : "#000000"}
        strokeWidth="1.5"
      ></path>
      <path
        d="M10.4693 15.6955L12 17V7L10.4693 8.30448L8.46447 8.46447L8.30448 10.4693L7 12L8.30448 13.5307L8.46447 15.5355L10.4693 15.6955Z"
        fill={light ? "#FFFFFF" : "#000000"}
      ></path>
      <path
        d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
        stroke={light ? "#FFFFFF" : "#000000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default BrightnessIcon;
