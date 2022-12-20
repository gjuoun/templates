import React from "react";

import { css } from "@emotion/react";

const color = "white";

export const Component = () => {
  return (
    <div
      sx={{
        background: "pink",
        "&:hover": {
          background: "blue",
        },
      }}
    >
      Hover to change color.
    </div>
  );
};
