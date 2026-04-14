function NodeJsLogo(svgProps: React.ComponentProps<"svg">) {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 282"
      fill="none"
    >
      <path
        fill="#83CD29"
        d="M128 0 23.2 60.6v160.8L128 282l104.8-60.6V60.6z"
      />
      <path
        fill="#fff"
        d="M128.6 72.1c-31.3 0-56.7 25-56.7 55.8 0 22.3 13.2 41.6 32.3 50.5v-71.1h23v79.2l1.4.1c31.3 0 56.7-25 56.7-55.8s-25.4-55.7-56.7-55.7Zm0 23.2c18.3 0 33.2 14.6 33.2 32.5 0 12.4-7.2 23.1-17.8 28.6v-49h-23v49c-10.6-5.5-17.8-16.2-17.8-28.6 0-17.9 14.8-32.5 33.4-32.5Z"
      />
    </svg>
  );
}

export default NodeJsLogo;
