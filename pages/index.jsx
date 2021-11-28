import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className='container'>
      <h1 style={{ textAlign: "center" }}>Belajar Storybook</h1>
      <Link href='/example/s-button'>Button</Link>
      <Link href='/example/s-input'>Input</Link>
    </div>
  );
}
