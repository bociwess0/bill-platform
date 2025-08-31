export const tabStyle = {
  "& .MuiTab-root": {
    textTransform: "none",
    borderRadius: "5px",
    minHeight: "40px",
    minWidth: "120px",
    marginRight: "8px",
    fontWeight: 500,
    transition: "all 0.3s ease",
    border: "1px solid #d13046",
  },
  "& .Mui-selected": {
    backgroundColor: "#d13046",
    color: "#fff !important",
  },
  "& .MuiTab-root:not(.Mui-selected)": {
    backgroundColor: "#fff",
    color: "#d13046",
  },
};

export const modalBoxStyle = {
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
};

export const tableRowStyle = {
  "& td": { borderBottom: "1px solid #e0e0e0" },
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": { background: "#f7f7f7ff" },
  ":hover .MuiTableCell-root": { color: "#c93549ff" },
};

export const spinnerStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  color: "#d13046",
};

export const billFilterStyle = {
  minWidth: 150,
  textAlign: "left",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d13046",
    },
    "&:hover fieldset": {
      borderColor: "#d13046",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d13046",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#d13046",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#d13046",
  },
};
