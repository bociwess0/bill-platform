/**
 * BillTable.tsx
 *
 * This component displays a table of bills retrieved from the database.
 * It fetches the bill data when the component mounts, stores it in state,
 * and renders it in a Material-UI table format.
 */

import { useEffect, useState } from "react";
import { fetchBills } from "../api/DatabaseRequests/Requests";
import { Bill } from "../Interfaces/Interface";
import {
    CircularProgress,
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
  
  const [bills, setBills] = useState<Bill[]>([]); // State variable for storing all bills fetched from the database
  const [error, setError] = useState<string | null>(null); // State variable for storing the error message
  const [loading, setLoading] = useState<boolean>(true); // State variable for controling the loading action

  //getting all the bills from database when the component mounts
  useEffect(() => {
    async function getBills() {
      try {
        const fetchedBills: Bill[] = await fetchBills(); //calling the fetch method
        setBills(fetchedBills); // storting the bills into state
      } catch (err) {
        setError("Failed to fetch bills. Please try again later.") //storing the error message into state 
        console.log(err);
      } finally {
        setLoading(false) //stopping the loader
      }
    }

    getBills();
  }, []);

  //showing the spinner icon until the bills are fetched
  if(loading) {
    return <Container><CircularProgress/></Container>
  }

  //if there was an error which occured while fetching the data, the error message will be shown
  if(error) {
    return <Container>{error}</Container>
  }

  //rendering the table of bills (bill number, type, status, sponsor and favorite action button)
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
                <TableCell>
                  {bill.sponsors?.[0].sponsor?.as?.showAs || "/"}
                </TableCell>
                <TableCell>
                  <IconButton>
                    <FavoriteBorder />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
