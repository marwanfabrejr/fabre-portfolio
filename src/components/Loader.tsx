"use client";

export default function Loader() {
  return (
    <span className="loader-active">
      <span className="pacman"></span>
      <span className="pacmans">
        <div></div>
        <div></div>
        <div></div>
      </span>
    </span>
  );
}