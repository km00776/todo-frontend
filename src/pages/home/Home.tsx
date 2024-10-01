import React from "react";
import "../../assets/fonts/fonts.css";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import BasicFormControl from './components/formInput/FormInput';
import styles from "./Home.module.css";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to your todo list! 🎉</h1>
      <div className="row">
        {/* <BasicFormControl /> */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#bf360c",
            color: "#ffffff",
            fontFamily: "SUSE",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Home;
