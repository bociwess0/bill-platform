import { Container, Typography } from "@mui/material";
import BillTable from "../components/BillTable";
import { headingStyle } from "../style/styles";

export default function BillPlatform() {
  return (
    <Container>
      <Typography variant="h4" sx={headingStyle}>
        Bill platform
      </Typography>
      <BillTable />
    </Container>
  );
}
