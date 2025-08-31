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

export const modalBox = {
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
