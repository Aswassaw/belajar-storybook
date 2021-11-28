import React from "react";
import Button from "../../components/stories/Button/Button";

const SButton = () => {
  return (
    <div>
      <Button>Download</Button>
      <Button variant='secondary'>Download</Button>
      <Button variant='success'>Download</Button>
      <Button variant='danger'>Download</Button>
    </div>
  );
};

export default SButton;
