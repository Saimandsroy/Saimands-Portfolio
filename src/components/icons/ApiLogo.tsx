function ApiLogo(svgProps: React.ComponentProps<"svg">) {
  return (
    <svg
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
    >
      <rect width="256" height="256" rx="48" fill="#111827" />
      <path
        fill="#F9FAFB"
        d="M57 170.5 95.4 85h18.1l38.3 85.5h-20.4l-7.6-18.4H84.7l-7.5 18.4H57Zm34.5-34.1h25.6l-12.8-31.1-12.8 31.1ZM167.8 170.5V85h20.1v85.5h-20.1ZM196 98.5V85h6.5c4.3 0 7.5.8 9.8 2.5 2.3 1.7 3.4 4.2 3.4 7.7 0 3.4-1.1 6-3.4 7.8-2.3 1.7-5.5 2.6-9.8 2.6H196v-7.1h5.1c1.6 0 2.7-.3 3.4-.8.7-.5 1-1.3 1-2.5s-.3-1.9-1-2.4c-.7-.5-1.8-.8-3.4-.8Z"
      />
    </svg>
  );
}

export default ApiLogo;
