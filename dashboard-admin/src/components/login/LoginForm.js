import "react-toastify/dist/ReactToastify.css";

import React,{ useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notify } from "../shared/toast";
import styled from "styled-components";
import { validate } from "../shared/validate";

const Log = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  align-items: center;
  .formContainer {
  border: 1px solid silver;
  width: fit-content;
  padding: 50px;
  margin: 50px;
  border-radius: 10px;
  height: fit-content;
  background-color: #fff;
}

.header {
  text-align: left;
  margin-bottom: 40px;
  font-size: 1.8rem;
  color: #1a73e8;
}

.formField {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 75px;
}

.formField label {
  text-align: left;
  margin-bottom: 5px;
  color: rgb(85, 85, 85);
  font-size: 0.9rem;
}

.formInput {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 10px;
  border: 1px solid silver;
  transition: all 0.2s ease-in;
}

.uncompleted {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 10px;
  border: 1px solid red;
  transition: all 0.2s ease-in;
}

.formInput:focus,
.uncompleted:focus {
  outline: none;
  line-height: 30px;
  height: 30px;
  border: 1px solid #1a73e8;
}

.formField span {
  height: 10px;
  text-align: left;
  margin-top: 5px;
  width: fit-content;
  font-size: 0.7rem;
  color: red;
  line-height: 10px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: rgba(255, 0, 0, 0.175);
}

.checkBoxContainer {
  display: flex;
  font-size: 0.85rem;
  flex-direction: row !important;
  align-items: center;
  height: 20px !important;
  text-align: center;
}

.formField:nth-child(6) label {
  color: #1a73e8;
}

input[type="checkbox"] {
  margin-left: 20px;
  width: 18px;
  height: 18px;
  border: 1px solid #1a73e8;
  appearance: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}

input[type="checkbox"]:checked {
  width: 18px;
  height: 18px;
  background-color: #1a73e8;
  border-radius: 50%;
}

input[type="checkbox"]:focus {
  height: 18px;
  width: 18px;
  outline: none;
  border: 2px solid #004aaa;
}

.formButtons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.formButtons button {
  background-color: #1a73e8;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.1s ease-in;
  cursor: pointer;
}

.formButtons button:hover {
  background-color: #004aaa;
}

.formButtons a {
  color: #1a73e8;
  text-decoration: none;
  transition: all 0.1s ease-in;
  font-weight: 700;
}

.formButtons a:hover {
  color: #004aaa;
}
@media (max-width: 440px) {
  .formContainer {
    padding: 20px;
    margin: 50px 20px;
  }

  .formContainer {
    width: 90%;
  }

  .formInput {
    width: 90%;
  }

  .uncompleted {
    width: 90%;
  }
}

`;

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("شما با موفقیت وارد شدید!", "success");
    } else {
      notify(" !اطلاعات موجود نیست", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };


  return (
    <Log>
      <form dir="rtl" onSubmit={submitHandler} className='formContainer'>
                <h2 className='header'>ورود</h2>
                <div  className='formField'>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? 'uncompleted' : 'formInput'}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className='formField'>
                    <label>password</label>
                    <input
                        className={(errors.password && touched.password) ? 'uncompleted' : 'formInput'}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className='formButtons'>
                    <Link to="/homepage/signup">ثبت نام</Link>
                    <button type="submit">ورود</button>
                </div>
                <ToastContainer />
            </form>
    </Log>
  );
};

export default Login;
