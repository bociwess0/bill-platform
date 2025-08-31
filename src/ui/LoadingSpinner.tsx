import { CircularProgress } from "@mui/material";
import { spinnerStyle } from "../style/styles";

export default function LoadingSpinner() {
  return (
    <CircularProgress sx={spinnerStyle} />
  );
}
