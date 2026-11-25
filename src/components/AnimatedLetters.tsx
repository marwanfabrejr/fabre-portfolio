"use client";

interface AnimatedLettersProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

export default function AnimatedLetters({
  letterClass,
  strArray,
  idx,
}: AnimatedLettersProps) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}