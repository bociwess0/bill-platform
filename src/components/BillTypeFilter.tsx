/**
 * BillTypeFilter component allows users to filter bills by their type.
 * It renders a dropdown (TextField) with all available bill types.
 * When a filter is selected, it updates the bills state and resets pagination.
 */

import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { Bill } from "../Interfaces/Interface";
import { billFilterStyle } from "../style/styles";

interface Props {
  bills: Bill[]; //array of bills
  setBills: React.Dispatch<React.SetStateAction<Bill[]>>; // Setter for new bills when the filter is applied
  setPage: React.Dispatch<React.SetStateAction<number>>; // Setter for pagination
}

export default function BillTypeFilter({ bills, setBills, setPage }: Props) {
  // Local state to keep track of the currently selected bill type filter
  const [billTypeFilter, setBillTypeFilter] = useState<string>("All");

  // Extract unique bill types from the bills array and add "All" as the default option
  const billTypes = [
    "All",
    ...Array.from(new Set(bills.map((b) => b.billType))),
  ];

  // Compute the filtered bills based on the currently selected bill type
  const filteredBills =
    billTypeFilter === "All"
      ? bills
      : bills.filter((b) => b.billType === billTypeFilter);

  /**
   * Handles when the user selects a new bill type from the dropdown.
   * Updates the local filter state, updates the filtered bills in parent,
   * and resets pagination to the first page.
   */
  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBillTypeFilter(e.target.value);
    setBills(filteredBills);
    setPage(0); // reset to first page when filter changes
  }

  return (
    <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
      <TextField
        select
        label="Filter by Bill Type"
        value={billTypeFilter}
        onChange={handleFilterChange}
        size="small"
        sx={billFilterStyle}
      >
        {billTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
