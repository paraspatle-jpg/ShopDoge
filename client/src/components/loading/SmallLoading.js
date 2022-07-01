import React from "react";
import {Audio} from "react-loader-spinner";

export const SmallLoading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"black",
      }}
    >
      <Audio color="orange" height="20" width="20" />{" "}
    </div>
  );
};
