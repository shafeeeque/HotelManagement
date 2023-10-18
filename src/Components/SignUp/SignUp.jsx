import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
    const navigate =useNavigate();
  const [values, setValues] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill All Fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        setSubmitButtonDisabled(false)
        const user = res.user;
          await updateProfile(user,{
            displayName:values.name,
        })
        // console.log(user);
        navigate("/Login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message)});
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>

        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>SignUP</button>
          <p>
            Already have Account ?{" "}
            <span>
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
