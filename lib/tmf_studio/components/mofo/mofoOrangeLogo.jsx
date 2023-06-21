import Link from "next/link";

function MofoOrangeLogo() {
  return (
    <div className="cursor-pointer">
      <Link href="/">
        <svg width="62" height="72" viewBox="0 0 62 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_394_130)">
            <path d="M37.7658 29.7905L35.9343 26.8526L18.8144 0.807129L14.5997 3.57286L27.591 23.3355L1.77747 13.5925L-0.00488281 18.3157L25.4368 27.9205L3.09581 34.0389L4.42797 38.9035L34.4884 30.6693L37.7658 29.7905Z" fill="#EA4E1B" />
            <path
              d="M61.9998 57.7196L41.5011 34.2416L39.161 31.6895L37.437 34.6088L21.4419 61.3596L25.7703 63.9486L37.6583 44.0676L40.086 71.1518L45.1104 70.7016L42.652 43.2241L58.2061 61.0477L61.9998 57.7196ZM39.96 35.5937L39.602 35.901L39.96 35.5937Z"
              fill="#EA4E1B"
            />
          </g>
          <defs>
            <clipPath id="clip0_394_130">
              <rect width="62" height="70.3418" fill="white" transform="translate(0 0.807129)" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
}

export default MofoOrangeLogo;
