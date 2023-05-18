import React from "react";
import { useSelector } from "react-redux";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Settings() {
  const { loggedIn, user, username, password, avatar, gender, email } =
    useSelector((state) => state.user);

  const options = [
    // ["General milieu"],
    ["Change password"],
    // ["QR code"],
    // ["Account Milieu"],
    ["Security & Privacy"],
    [" Drmurs Centre"],
  ];

  const values = [
    ["Name", "username", username],
    ["User mail", "username@gmail.com", email],
    ["Contact", "123456789", "123456789"],
    ["Language", "English-US", "English-US"],
    ["Customize", "Smiley Reactor", "Smiley Reactor"],
  ];

  const pass_form = [
    ["Old Password", "Old password", "old_pass"],
    ["New Password", "New password", "new_pass"],
    ["Confirm Password", "Confirm password", "confirm_pass"],
  ];

  return (
    <div className=" ps-2  ps-md-4 pe-2 pe-sm-2 pe-md-3 pe-lg-5 py-4 col-12">
      <div className="text-dark fw-bold h5 ">Settings</div>
      <div className="col-12 p-0 grey-border">
        {options.map((option, index) => (
          <div key={index}>
            <div className="d-flex col-12 me-lg-5 p-0">
              <div
                className="col-3 py-3 ps-1 ps-sm-2 ps-md-3 ps-xl-4 "
                style={{ borderRight: "1px solid #c7c7c7" }}
              >
                <div
                  className="col-10  grey fw-bold mb-3"
                  style={{ paddingBottom: 0 }}
                >
                  {option}
                </div>
                {/* {index == options.length - 1 && (
                  <div className="col-12 purple fw-bold mt-5 pt-3 mb-2">
                    Logout
                    <PowerSettingsNewIcon className="mb-1 fw-bold" />
                  </div>
                )} */}
              </div>
              <div
                className="col-9 py-2 ps-2 ps-sm-2 ps-lg-4 pe-0 pe-sm-2 "
                style={{ borderLeft: "1px solid #c7c7c7" }}
              >
                {/* {index == 0 && (
                  <div className="mb-4">
                    {values.map((value) => (
                      <div className=" row d-flex align-items-center col-12 ms-0 ps-0">
                        <div className="col-6 col-sm-4 col-md-3 light-grey fw-bold my-1  ps-0">
                          {value[0]}
                        </div>
                        <div className=" col-7 col-sm-6 col-lg-6 col-xl-8 ms-3 ms-lg-1 fw-bold my-1">
                          {loggedIn && value[2] != null ? value[2] : value[1]}
                        </div>
                      </div>
                    ))}
                  </div>
                )} */}
                {index == 0 && (
                  <div className="pt-2 mb-4">
                    <form>
                      {pass_form.map((pass) => (
                        <div className="row mb-2">
                          <div className="col-12 col-md-5 col-lg-4 col-xxl-3 light-grey fw-bold my-2">
                            {pass[0]}
                          </div>
                          <input
                            type="text"
                            className="col-8 col-sm-6 col-xl-4 px-4 ms-3 ms-lg-1 input-style"
                            placeHolder={pass[1]}
                            name={pass[2]}
                          />
                        </div>
                      ))}
                      <div className="col-12 col-lg-10 col-xl-8 d-flex align-items-center justify-content-evenly">
                        <div
                          type="submit"
                          className="py-1 px-3 mt-3 mb-2 btn text-white fw-bold"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#9c18f5",
                          }}
                        >
                          Change password
                        </div>
                        <div
                          type="submit"
                          className="py-1 px-3 mt-3 mb-2 btn text-white fw-bold"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#9c18f5",
                          }}
                        >
                          Forget Password
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {/* {index == 2 && (
                  <div className="pt-2 mb-3 col-12">
                    <div className="light-grey fw-bold ">
                      For purchase or pay through scan method
                    </div>
                    <img
                      className="mx-4"
                      width="130px"
                      src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                    />
                  </div>
                )} */}
                {/* {index == 3 && (
                  <div className=" pt-2 mb-4 col-12">
                    <div className="light-grey fw-bold ">
                      Add new account or link existing account
                    </div>
                  </div>
                )} */}
                {index == 1 && (
                  <div className="light-grey col-12 col-6 fw-bold mb-3 ">
                    Your Account Privacy
                    <div>
                      <RadioGroup
                        aria-label="Accont Type"
                        defaultValue="public "
                        name="radio-buttons-group"
                        Button-color="secondary"
                      >
                        <FormControlLabel
                          value="private"
                          control={<Radio />}
                          style={{}}
                          label="private "
                        />
                        <FormControlLabel
                          value="public"
                          control={<Radio />}
                          label="Public"
                        />
                      </RadioGroup>
                    </div>
                  </div>
                )}
                {index == 2 && (
                  <div className=" pt-2 mb-4 col-12">
                    <div className="light-grey fw-bold mb-2">
                      Manage Your Account
                    </div>
                    <Link
                      to="/create"
                      style={{ color: "#a11cf9", fontSize: "15px" }}
                    >
                      Creating an User Account
                    </Link>
                  </div>
                )}
                {index == 2 && (
                  <div className=" pt-2 mb-4 col-12">
                    <div className="light-grey fw-bold mb-2">
                      Navigation Map of ZD
                    </div>
                    <Link to="/navigationmap" style={{ color: "#a11cf9" }}>
                      ZD Feature
                    </Link>
                  </div>
                )}
                {index == 2 && (
                  <div className=" pt-2 mb-4 col-12">
                    <div className="light-grey fw-bold mb-2">
                      Privacy Policy & Security
                    </div>
                    <Link to="/tips" style={{ color: "#a11cf9" }}>
                      Tip For Parents
                    </Link>
                    <div className="pt-4 mb-4 col-12">
                      <Link to="/datapolicy" style={{ color: "#a11cf9" }}>
                        ZD Data Policy
                      </Link>
                    </div>
                    <div className=" mb-4 col-12">
                      <Link to="/Help" style={{ color: "#a11cf9" }}>
                        ZD Community Guideliness
                      </Link>
                    </div>
                    <div className=" mb-4 col-12">
                      <Link to="/Help" style={{ color: "#a11cf9" }}>
                        Team Of Use
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
