import * as React from "react";
import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function BasicFormControl() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const onBtnPress = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex w-72 flex-col gap-6 justify-center">
      <Input
        color="blue"
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={name} // Controlled value
        onChange={handleNameChange} // Handle value changes
      />
      <Input
        color="blue"
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        value={description} // Controlled value
        onChange={handleDescriptionChange} // Handle value changes
      />
      <Button
        variant="contained"
        onClick={onBtnPress}
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
  );
}
