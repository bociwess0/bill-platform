/**
 * BillFavorite.tsx
 *
 * This component renders a favorite (heart) button for a given bill.
 * Clicking the button toggles the bill's "favorite" state.
 * Updates are persisted to the parent bills state via `setBills`.
 * A console log is dispatched to simulate a backend request.
 */

import { IconButton } from "@mui/material";
import React from "react";
import { Bill } from "../Interfaces/Interface";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface Props {
  selectedBill: Bill; // Single bill object to render the favorite button for
  setBills: React.Dispatch<React.SetStateAction<Bill[]>>; // Setter function to update the list of bills in parent state
  setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>; // Setter function to show/hide snackbar
  setMessage: React.Dispatch<React.SetStateAction<string>>; // Setter function for snackbar message
}

export default function BillFavorite({
  selectedBill,
  setBills,
  setSnackbarOpen,
  setMessage,
}: Props) {
  // Handles toggling of favorite state for a given bill
  function handleToggleFavorite(
    e: React.MouseEvent<HTMLButtonElement>,
    billNumber: string,
    isFavorite: boolean,
  ) {
    e.stopPropagation(); // Prevent the click from bubbling up (so it won’t trigger row selection)

    // Update the bills array: toggle favorite on the matching bill
    setBills((oldBills) =>
      oldBills.map((bill: Bill) =>
        bill.billNo === billNumber
          ? { ...bill, favorite: !bill.favorite }
          : bill,
      ),
    );

    // Mockick server call with console log (instead of real API call) and showing the snackbar message
    if (!isFavorite) {
      setSnackbarOpen(false);
      setTimeout(() => {
        setMessage(
          `Bill with number: ${billNumber} successfully added to favorites!`,
        );
        setSnackbarOpen(true);
      }, 50);
      console.log(
        `Request to add bill with number: ${billNumber} into favorites is sent`,
      );
    } else {
      setSnackbarOpen(false);
      setTimeout(() => {
        setMessage(
          `Bill with number: ${billNumber} successfully removed from favorites!`,
        );
        setSnackbarOpen(true);
      }, 50);
      console.log(
        `Request to remove bill with number: ${billNumber} from favorites is sent`,
      );
    }
  }

  return (
    <IconButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        handleToggleFavorite(
          e,
          selectedBill.billNo,
          selectedBill.favorite ? true : false,
        )
      }
    >
      {/* Render a filled or outlined heart depending on favorite state */}
      {selectedBill.favorite ? <Favorite sx={{color: "#305bbf"}}/> : <FavoriteBorder sx={{color: "#305bbf"}} />}
    </IconButton>
  );
}
