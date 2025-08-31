import { Alert } from "@mui/material";
import React from "react";

interface Props {
    errorMessage: string
}

export default function ErrorAlert({errorMessage}: Props) {
  return (
    <Alert
      severity="error"
      sx={{ mt: 3, border: "1px solid #d13046", background: "#fffafa" }}
    >
      {errorMessage}
    </Alert>
  );
}
