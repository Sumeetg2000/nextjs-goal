export default function UserAvatar() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
      fill='currentColor'
      style={{ cursor: "pointer" }}
    >
      <circle cx='12' cy='8' r='4' /> {/* Head */}
      <path d='M12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z' />{" "}
      {/* Body */}
    </svg>
  );
}
