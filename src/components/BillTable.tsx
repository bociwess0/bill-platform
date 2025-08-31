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
  Alert,
  Box,
  CircularProgress,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
} from "@mui/material";
import BillTypeFilter from "./BillTypeFilter";
import BillModal from "./BillModal";
import BillFavorite from "./BillFavorite";

export default function BillTable() {
  const [bills, setBills] = useState<Bill[]>([]); // State variable for storing all bills fetched from the database
  const [error, setError] = useState<string | null>(null); // State variable for storing the error message
  const [loading, setLoading] = useState<boolean>(true); // State variable for controlling the loading action

  // pagination states
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  // State that stores selected bill on the bill (row) click
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const [tab, setTab] = useState<string>("all");
  const favoriteBills = bills.filter((bill) => bill.favorite);

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
    return (
      <Alert severity="error" sx={{ mt: 3 }}>
        {error}
      </Alert>
    );
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

  const displayedBills = tab === "favorites" ? favoriteBills : bills;

  // Rendering the table of bills (bill number, type, status, sponsor and favorite action button)
  return (
    <Paper elevation={0}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
          <Tab label="All Bills" value="all" />
          <Tab
            label={`Favorites (${favoriteBills.length})`}
            value="favorites"
          />
        </Tabs>
        <BillTypeFilter bills={bills} setBills={setBills} setPage={setPage} />
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
            {displayedBills
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((bill: Bill) => (
                <TableRow
                  key={bill.billNo}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedBill(bill)}
                >
                  <TableCell>{bill.billNo}</TableCell>
                  <TableCell>{bill.billType}</TableCell>
                  <TableCell>{bill.status}</TableCell>
                  <TableCell>
                    {bill.sponsors?.[0].sponsor?.as?.showAs || "/"}
                  </TableCell>
                  <TableCell>
                    <BillFavorite selectedBill={bill} setBills={setBills} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={bills.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <BillModal
        selectedBill={selectedBill}
        setSelectedBill={setSelectedBill}
      />
    </Paper>
  );
}
