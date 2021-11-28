import React from "react";
import Input from "../../components/stories/Input/Input";

const SInput = () => {
  return (
    <div>
      <Input size='small' placeholder='Small Button' />
      <Input placeholder='Medium Button' />
      <Input size='large' placeholder='Large Button' />
    </div>
  );
};

export default SInput;
