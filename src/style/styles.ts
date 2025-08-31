/**
 * This file defines reusable style objects for various UI components in the application.
 * The styles are written using Material UI's `sx` prop conventions and include
 * responsive breakpoints for smaller screen sizes.
 *
 * By centralizing these styles, we ensure consistent theming, responsiveness,
 * and easier maintenance across the app.
 */

export const tabStyle = {
  "& .MuiTab-root": {
    textTransform: "none",
    borderRadius: "5px",
    minHeight: "40px",
    minWidth: "120px",
    marginRight: "8px",
    fontWeight: 500,
    transition: "all 0.3s ease",
    border: "1px solid #305bbf",
    "@media (max-width:600px)": {
      fontSize: "13px",
      minWidth: "70px",
      height: "35px",
      minHeight: "35px",
    },
  },
  "& .Mui-selected": {
    backgroundColor: "#305bbf",
    color: "#fff !important",
  },
  "& .MuiTab-root:not(.Mui-selected)": {
    backgroundColor: "#fff",
    color: "#305bbf",
  },
};

export const modalBoxStyle = {
  position: "absolute",
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
};

export const tableRowStyle = {
  "& td": { borderBottom: "1px solid #e0e0e0" },
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": { background: "#f7f7f7ff" },
  ":hover .MuiTableCell-root": { color: "#305bbf" },
};

export const spinnerStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  color: "#305bbf",
};

export const billFilterStyle = {
  minWidth: 150,
  textAlign: "left",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#305bbf",
    },
    "&:hover fieldset": {
      borderColor: "#305bbf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#305bbf",
    },
    "@media (max-width:600px)": {
      fontSize: "13px",
      height: "35px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#305bbf",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#305bbf",
  },
  "@media (max-width:600px)": {
    minWidth: 120,
  },
};

export const paginationStyle = {
  "& .MuiTablePaginationActions-root": {
    "@media (max-width:600px)": {
      marginLeft: "0 !important",
    },
  },
  "& .MuiInputBase-root": {
    "@media (max-width:600px)": {
      marginRight: "10px",
      maxWidth: "45px",
    },
  },
};

export const headingStyle = {
  mt: { xs: 3, md: 5 },
  mb: { xs: 3, md: 5 },
  textAlign: "left",
  fontSize: { xs: "25px", md: "35px" },
};
