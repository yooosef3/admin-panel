import * as Yup from "yup";

import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const About = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  @media (min-width: 1000px) {
    width: 75%;
  }
  h3 {
    margin: 0;
  }
  span {
    color: gray;
  }
  .about-form {
    margin-top: 25px;
    .inputs {
      display: flex;
      gap: 25px;
      flex-direction: column;
      align-items: center;
      .input {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        @media (min-width: 700px) {
          width: 33%;
        }
      }
      @media (min-width: 700px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
      .error {
        color: red;
      }
      label {
        color: gray;
        font-weight: 500;
      }
      input {
        border: 1px solid #aeaeae;
        border-radius: 6px;
        outline: 0;
        padding: 10px;

        &:focus {
          border: 2px solid rgb(23, 193, 232);
        }
        &:invalid {
          border: 2px solid red;
        }
      }
    }
    button {
      background: linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111));
      color: #ffff;
      font-size: 24px;
      border: 0;
      padding: 2px 10px;
      border-radius: 6px;
      margin-top: 15px;
      transition: all 0.2s linear;
      cursor: pointer;
      &:hover {
        opacity: 95%;
      }
    }
  }
`;

const AboutForm = () => {
  const navigate = useNavigate();
  return (
    <About>
      <h3>درباره من</h3>
      <span>اطلاعات اجباری</span>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, " نام شما باید کمتر از 15 کاراکتر باشد")
            .required(" وارد کردن نام ضروری است"),
          lastName: Yup.string()
            .max(20, "نام شما باید کمتر از 20 کاراکتر باشد")
            .required("وارد کردن نام خانوادگی ضروری است"),
          email: Yup.string()
            .email("ایمیل موجود نمی باشد")
            .required("وارد کردن ایمیل ضروری است"),
          password: Yup.string()
            .min(6, "رمز شما باید بیشتر از 6 کاراکتر باشد")
            .required("وارد کردن رمز ضروری است"),
          repeatPassword: Yup.string().required(" تکرار رمز ضروری است"),
        })}
        
        onSubmit={(values,  { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          navigate("addressform");
        }}
        
      >
        {(formik) => (
          <form className="about-form" onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input">
                <label htmlFor="firstName">نام:</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="مثل یوسف"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="lastName">نام خانوادگی:</label>

                <input
                  id="lastName"
                  placeholder="مثل خدری"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error">{formik.errors.lastName}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="email">ایمیل:</label>

                <input
                  placeholder="مثل yooosef.khedri@gmail.com"
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="company">شرکت:</label>

                <input
                  id="company"
                  placeholder="مثل دیجیکالا"
                  type="text"
                  {...formik.getFieldProps("company")}
                />
              </div>

              <div className="input">
                <label htmlFor="password">رمز:</label>

                <input
                  id="password"
                  type="text"
                  placeholder="******"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="repeatPassword">تایید رمز:</label>

                <input
                  id="repeatPassword"
                  placeholder="******"
                  type="text"
                  {...formik.getFieldProps("repeatPassword")}
                />
                {formik.touched.repeatPassword &&
                formik.errors.repeatPassword ? (
                  <div className="error">{formik.errors.repeatPassword}</div>
                ) : null}
              </div>
            </div>
            <button type="submit">بعدی</button>
          </form>
        )}
      </Formik>
    </About>
  );
};

export default AboutForm;
