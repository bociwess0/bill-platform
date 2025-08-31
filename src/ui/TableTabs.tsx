/**
 * TableTabs component provides tab-based navigation between
 * "All Bills" and "Favorites" views, along with a bill type filter.
 *
 * Features:
 * - Switches between "All Bills" and "Favorites" tabs.
 * - Displays favorite count dynamically in the tab label.
 * - Resets pagination when tab changes.
 * - Integrates BillTypeFilter to allow bill filtering by type.
 */

import { Box, Tab, Tabs } from "@mui/material";
import BillTypeFilter from "../components/BillTypeFilter";
import { tabStyle } from "../style/styles";
import { Bill } from "../interface/interfaces";
import React from "react";

interface Props {
  bills: Bill[]; //array of bills
  favoriteBills: Bill[]; //array of bills
  tab: string; //array of bills
  setTab: React.Dispatch<React.SetStateAction<string>>; // Setter for pagination
  setBills: React.Dispatch<React.SetStateAction<Bill[]>>; // Setter for new bills when the filter is applied
  setPage: React.Dispatch<React.SetStateAction<number>>; // Setter for pagination
}

export default function TableTabs({
  bills,
  favoriteBills,
  tab,
  setTab,
  setBills,
  setPage,
}: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Tabs
        value={tab}
        onChange={(e, newValue) => {
          setTab(newValue);
          setPage(0);
        }}
        slotProps={{ indicator: { style: { display: "none" } } }}
        sx={tabStyle}
      >
        <Tab label="All Bills" value="all" />
        <Tab label={`Favorites (${favoriteBills.length})`} value="favorites" />
      </Tabs>
      <BillTypeFilter bills={bills} setBills={setBills} setPage={setPage} />
    </Box>
  );
}
