/**
 * BillModal component displays details of a selected bill in a modal window.
 * It shows the bill's titles in English and Gaeilge using a tabbed interface.
 * The modal opens when a user clicks on a bill in the table and closes when dismissed.
 */

import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { Bill } from "../Interfaces/Interface";

interface Props {
  selectedBill: Bill | null;
  setSelectedBill: React.Dispatch<React.SetStateAction<Bill | null>>; // Setter for new bills when the filter is applied
}

export default function BillModal({ selectedBill, setSelectedBill }: Props) {

  // Local state to track which tab is active. 0 = English, 1 = Gaeilge
  const [activeTab, setActiveTab] = useState<number>(0);

  // Handler that changes the tabs inside modal
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Clearing the tags <> inside of the text
  const cleanText = (text: string) => text.replace(/<[^>]*>/g, "");

  return (
    <Modal
      open={!!selectedBill}
      onClose={() => {
        setSelectedBill(null);
        setActiveTab(0);
      }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth - 60,
          maxWidth: 400,
          bgcolor: "#ffffff",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          outline: "none",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Bill {selectedBill?.billNo} Titles
        </Typography>
        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
          <Tab label="English" />
          <Tab label="Gaeilge" />
        </Tabs>
        {activeTab === 0 && (
          <Typography sx={{ overflow: "auto", maxHeight: 400 }}>
            {selectedBill?.longTitleEn
              ? cleanText(selectedBill.longTitleEn)
              : "No English title available"}
          </Typography>
        )}
        {activeTab === 1 && (
          <Typography sx={{ overflow: "auto", maxHeight: 400 }}>
            {selectedBill?.longTitleGa
              ? cleanText(selectedBill.longTitleGa)
              : "No English title available"}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}
