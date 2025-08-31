/**
 * LoadingSpinner component shows a centered Material UI CircularProgress spinner.
 * Displayed while data is being loaded or an async request is in progress.
 */

import { CircularProgress } from "@mui/material";
import { spinnerStyle } from "../style/styles";
import React from "react";

export default function LoadingSpinner() {
  return <CircularProgress sx={spinnerStyle} />;
}
