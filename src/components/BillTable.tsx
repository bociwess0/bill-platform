/**
 * BillTable.tsx
 *
 * This component displays a table of bills retrieved from the database.
 * It fetches the bill data when the component mounts, stores it in state,
 * and renders it in a Material-UI table format.
 */

import { useEffect, useState } from "react";
import { fetchBills } from "../api/Requests";
import { Bill } from "../Interfaces/Interface";
import {
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import BillModal from "./BillModal";
import BillFavorite from "./BillFavorite";
import { tableRowStyle } from "../style/styles";
import ErrorAlert from "../ui/ErrorAlert";
import TableTabs from "../ui/TableTabs";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function BillTable() {
  const [bills, setBills] = useState<Bill[]>([]); // State variable for storing all bills fetched from the database
  const [error, setError] = useState<string | null>(null); // State variable for storing the error message
  const [loading, setLoading] = useState<boolean>(true); // State variable for controlling the loading action

  // pagination states
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  // State that stores selected bill on the bill (row) click
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const [tab, setTab] = useState<string>("all"); // Controlling tabs via state
  const favoriteBills = bills.filter((bill) => bill.favorite); // Filling the array with favorite bills

  const [open, setOpen] = useState<boolean>(false); // State that shows/hides snackbar
  const [message, setMessage] = useState<string>(""); // State that set the snackbar message

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

    getBills(); // Calling the function to fetch the bills
  }, []);

  // Showing the spinner icon until the bills are fetched
  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  // If there was an error which occured while fetching the data, the error message will be shown
  if (error) {
    return <ErrorAlert errorMessage={error} />;
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
    <Paper elevation={0} sx={{ background: "#fcfcfc" }}>
      <TableTabs
        bills={bills}
        favoriteBills={favoriteBills}
        tab={tab}
        setTab={setTab}
        setBills={setBills}
        setPage={setPage}
      />
      {displayedBills && displayedBills.length > 0 ? (
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="bill table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Bill Number</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Sponsor</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Favorite
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedBills
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((bill: Bill) => (
                  <TableRow
                    key={bill.billNo}
                    sx={tableRowStyle}
                    onClick={() => setSelectedBill(bill)}
                  >
                    <TableCell>{bill.billNo}</TableCell>
                    <TableCell>{bill.billType}</TableCell>
                    <TableCell>{bill.status}</TableCell>
                    <TableCell>
                      {bill.sponsors?.[0].sponsor?.as?.showAs || "/"}
                    </TableCell>
                    <TableCell align="center">
                      <BillFavorite
                        selectedBill={bill}
                        setBills={setBills}
                        setSnackbarOpen={setOpen}
                        setMessage={setMessage}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={displayedBills.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <BillModal
            selectedBill={selectedBill}
            setSelectedBill={setSelectedBill}
          />
          <Snackbar
            open={open}
            autoHideDuration={800}
            message={message}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          />
        </TableContainer>
      ) : (
        <ErrorAlert errorMessage="There are currently no bills to show." />
      )}
    </Paper>
  );
}
