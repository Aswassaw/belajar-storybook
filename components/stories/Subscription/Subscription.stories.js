import React from "react";
import { Primary } from "../Button/Button.stories";
import { Medium } from "../Input/Input.stories";

export default {
  title: "Form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <h1>Subscribe</h1>
    <Medium />
    <Primary />
  </>
);
