function RedisLogo(svgProps: React.ComponentProps<"svg">) {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        fill="#D82C20"
        d="m43 76 77.8-30.2c4.7-1.8 9.9-1.8 14.5 0L213 76l-77.7 30.2c-4.7 1.8-9.9 1.8-14.5 0z"
      />
      <path
        fill="#A41E11"
        d="m43 76 77.8 30.2c4.7 1.8 9.9 1.8 14.5 0L213 76v35.7l-77.7 30.2c-4.7 1.8-9.9 1.8-14.5 0L43 111.7z"
      />
      <path
        fill="#D82C20"
        d="m43 111.7 77.8 30.2c4.7 1.8 9.9 1.8 14.5 0L213 111.7v35.8l-77.7 30.2c-4.7 1.8-9.9 1.8-14.5 0L43 147.5z"
      />
      <circle cx="86" cy="75.5" r="10" fill="#fff" />
      <circle cx="128" cy="91" r="8" fill="#fff" />
      <circle cx="167" cy="76" r="8" fill="#fff" />
    </svg>
  );
}

export default RedisLogo;
