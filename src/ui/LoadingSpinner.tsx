import { CircularProgress } from "@mui/material";
import { spinnerStyle } from "../style/styles";
import React from "react";


export default function LoadingSpinner() {
  return (
    <CircularProgress sx={spinnerStyle} />
  );
}
