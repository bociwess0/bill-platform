import { Container, Typography } from "@mui/material";
import BillTable from "../components/BillTable";

export default function BillPlatform() {
  return (
    <Container>
      <Typography variant="h4" sx={{mt: 5}}>Bill platform</Typography>
      <BillTable />
    </Container>
  );
}
