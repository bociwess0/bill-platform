/**
 * BillPlatform component serves as the main layout for the application.
 * It wraps the entire bill listing feature inside a Material UI Container.
 *
 */

import React from "react";
import { Container, Typography } from "@mui/material";
import BillTable from "../components/BillTable";
import { headingStyle } from "../style/styles";

export default function BillPlatform() {
  return (
    <Container>
      {/* Main heading ("Bill platform") using MUI Typography. */}
      <Typography variant="h4" sx={headingStyle}>
        Bill platform
      </Typography>
      {/* Bill Table */}
      <BillTable />
    </Container>
  );
}
