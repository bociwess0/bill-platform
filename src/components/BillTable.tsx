/**
 * BillTable.tsx
 *
 * This component displays a table of bills retrieved from the database.
 * It fetches the bill data when the component mounts, stores it in state,
 * and renders it in a Material-UI table format.
 */

import { ChangeEvent, useEffect, useState } from "react";
import { fetchBills } from "../api/DatabaseRequests/Requests";
import { Bill } from "../Interfaces/Interface";
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

export default function BillTable() {
  const [bills, setBills] = useState<Bill[]>([]); // State variable for storing all bills fetched from the database
  const [error, setError] = useState<string | null>(null); // State variable for storing the error message
  const [loading, setLoading] = useState<boolean>(true); // State variable for controlling the loading action

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const [billTypeFilter, setBillTypeFilter] = useState<string>("All");

  // Getting all the bills from database when the component mounts
  useEffect(() => {
    async function getBills() {
      try {
        const fetchedBills: Bill[] = await fetchBills(); // Calling the fetch method
        setBills(fetchedBills); // Storing the bills into state
      } catch (err) {
        setError("Failed to fetch bills. Please try again later."); // Storing the error message into state
        console.log(err);
      } finally {
        setLoading(false); // Stopping the loader
      }
    }

    getBills();
  }, []);

  // Showing the spinner icon until the bills are fetched
  if (loading) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "40%", left: "50%" }}
      />
    );
  }

  // If there was an error which occured while fetching the data, the error message will be shown
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  const billTypes = [
    "All",
    ...Array.from(new Set(bills.map((b) => b.billType))),
  ];

  const filteredBills =
    billTypeFilter === "All"
      ? bills
      : bills.filter((b) => b.billType === billTypeFilter);

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBillTypeFilter(e.target.value);
    setPage(0); // reset to first page when filter changes
  }

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); //reset to first page
  };

  // Rendering the table of bills (bill number, type, status, sponsor and favorite action button)
  return (
    <Paper elevation={0}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          select
          label="Filter by Bill Type"
          value={billTypeFilter}
          onChange={handleFilterChange}
          size="small"
          sx={{ minWidth: 200, textAlign: "left" }}
        >
          {billTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Box>
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
            {filteredBills
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((bill: Bill) => (
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredBills.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
}
