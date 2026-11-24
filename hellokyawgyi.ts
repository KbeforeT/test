"use client";

export default function GreetButton() {
  const handleClick = (): void => {
    console.log("hello kyawgyi");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}