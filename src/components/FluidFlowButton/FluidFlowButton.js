import React from "react";
import useFluidFlow from "./use-fluid-flow.hook";

import { Button } from "react-bootstrap";

const FluidFlowButton = ({ children, intervalDelay = 1000, ...delegated }) => {
  const transitionDelay = intervalDelay * 1.25;
  const colors = useFluidFlow({ intervalDelay });
  const colorKeys = Object.keys(colors);
  return (
    <Button
      {...delegated}
      style={{
        ...colors,
        transition: `
            ${colorKeys[0]} ${transitionDelay}ms linear,
            ${colorKeys[1]} ${transitionDelay}ms linear,
            ${colorKeys[2]} ${transitionDelay}ms linear
            `,
        background: `
            radial-gradient(
                circle at top left,
                var(${colorKeys[2]}),
                var(${colorKeys[1]}),
                var(${colorKeys[0]})
            )
            `,
      }}
    >
      {children}
    </Button>
  );
};

export default FluidFlowButton;
