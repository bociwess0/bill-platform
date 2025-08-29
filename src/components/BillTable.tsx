import { useEffect, useState } from "react";
import { fetchBills } from "../api/DatabaseRequests/Requests";
import { Bill } from "../Interfaces/Interface";
import {
    Container,
    IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

export default function BillTable() {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    async function getBills() {
      const fetchedBills: Bill[] = await fetchBills();
      setBills(fetchedBills);
      console.log(fetchedBills);
    }

    getBills();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="bill table">
          <TableHead>
            <TableRow>
              <TableCell>Bill Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Sponsor</TableCell>
              <TableCell>Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill: Bill) => (
              <TableRow
                key={bill.billNo}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell>{bill.billNo}</TableCell>
                <TableCell>{bill.billType}</TableCell>
                <TableCell>{bill.status}</TableCell>
                <TableCell>{bill.sponsors?.[0].sponsor?.by?.showAs || "/"}</TableCell>
                <TableCell>
                    <IconButton><FavoriteBorder /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
