function PhonePeLogo(svgProps: React.ComponentProps<"svg">) {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
    >
      <rect width="256" height="256" rx="52" fill="#5F259F" />
      <path
        fill="#fff"
        d="M111.7 55h31.4l-12.7 33.8h27.8c17 0 30.8 13.6 30.8 30.4 0 17-13.8 30.7-30.8 30.7h-35.5l-13.3 34.1H78.5l13.4-34.1H74l11.4-28.9h17.8l12.1-30.8H89.8L111.7 55Zm18.5 63.9-6.5 16.6h30.8c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.2-8.4-8.2Z"
      />
    </svg>
  );
}

export default PhonePeLogo;
