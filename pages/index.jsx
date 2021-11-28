import React from "react";
import Button from "../components/stories/Button/Button";

export default function Home() {
  return (
    <div className='container'>
      <h1 style={{ textAlign: "center" }}>Belajar Storybook</h1>
      <Button>Download</Button>
      <Button variant='secondary'>Download</Button>
      <Button variant='success'>Download</Button>
      <Button variant='danger'>Download</Button>
    </div>
  );
}
