import { Container, Typography } from "@mui/material";
import BillTable from "../components/BillTable";

export default function BillPlatform() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5, mb: 5, textAlign: "left" , fontSize:{ xs: "25px", md: "35px" } }}>
        Bill platform
      </Typography>
      <BillTable />
    </Container>
  );
}
