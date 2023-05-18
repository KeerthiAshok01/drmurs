import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ForgotPassword() {
  const history = useHistory();

  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  function handleSubmit() {
    if (
      newPassword.password === "" ||
      newPassword.password !== newPassword.confirmPassword
    ) {
      setPasswordError("Password doesn't match");
    } else if (newPassword.password.length < 8) {
      setPasswordError("Password should be 8 characters long");
    } else {
      history.push("/news-feed");
    }
  }
  return (
    <>
      <div className="d-flex flex-column align-justify-center vh-100">
        <div className="bg-white p-5 rounded">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label purple">
              New password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(e) =>
                setNewPassword({ ...newPassword, password: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label purple">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={(e) =>
                setNewPassword({
                  ...newPassword,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          {passwordError !== "" && (
            <p className="text-danger">{passwordError}</p>
          )}
          <Button
            variant="contained"
            className="bg-purple white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
