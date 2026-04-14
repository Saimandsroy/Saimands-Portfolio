function PostgreSqlLogo(svgProps: React.ComponentProps<"svg">) {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        fill="#336791"
        d="M128 18c-43.1 0-78 34.9-78 78v61.5c0 28.4 23.1 51.5 51.5 51.5 11.8 0 21.4-9.6 21.4-21.4v-18.7h11.7c39.6 0 71.7-32.1 71.7-71.7V96c0-43.1-34.9-78-78.3-78Z"
      />
      <path
        fill="#fff"
        d="M96.6 88.5c0-17.8 14.4-32.2 32.2-32.2S161 70.7 161 88.5s-14.4 32.2-32.2 32.2S96.6 106.3 96.6 88.5Zm17.8 0c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5S136.8 74 128.8 74s-14.4 6.5-14.4 14.5Z"
      />
      <path
        fill="#fff"
        d="M96 133.4h65.7v17.7H96zM96 165.6h43.1v17.7H96z"
      />
    </svg>
  );
}

export default PostgreSqlLogo;
