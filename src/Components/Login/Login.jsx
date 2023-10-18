import React,{useState} from "react";
import styles from "./Login.module.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    const navigate =useNavigate();
    const [values, setValues] = useState({
      email: " ",
      password: " ",
    });
  
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.password) {
        setErrorMsg("Fill All Fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
          setSubmitButtonDisabled(false)
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message)});
    };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl label="Email"
         onChange={event=>
         setValues((prev)=>({...prev,email: event.target.value}))
        } 
         placeholder="Enter Email Address" />

        <InputControl label="Password"
        onChange={event=>
            setValues((prev)=>({...prev,password: event.target.value}))
           }
        placeholder="Enter Password" />
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
            <p>
                Already have Account ? {" "}
                <span>
                    <Link to="/Signup">Sign Up</Link>
                </span>
            </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
