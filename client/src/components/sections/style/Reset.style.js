const styles = {
  ContainerStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000"
  },
  
  PaperStyle: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "white",
  },

  FormStyle: {
    width: "100%",
    marginTop: "3px",
  },

  button: {
    width: "max-content",
    margin: "30px 0px",
    backgroundColor: "#2B4A79",
    cursor: "pointer",
  },

  ErrorStyle: {
    padding: "20px",
    width: "max-content",
    backgroundColor: "#f44336",
    borderRadius: "4px",
    margin: "20px auto",
    fontSize: "x-small",
  },

  hidden: {
    display: "none",
  },
};

export default styles;
