import 'react-toastify/dist/ReactToastify.css';

import * as Yup from "yup";

import { ToastContainer, toast } from 'react-toastify';

import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Pro = styled.div`
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
  .profile-form {
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
    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
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
        &:last-of-type {
          background: linear-gradient(
            310deg,
            rgb(206, 212, 218),
            rgb(235, 239, 244)
          );
          color: #292e3e;
          transition: all 0.2s linear;
          &:hover {
            opacity: 95%;
          }
        }
      }
    }
  }
`;

const ProfileForm = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("!اطلاعات شما با موفقیت ارسال شد", {
    position: "top-center"});
  return (
    <Pro>
    <h3>پروفایل</h3>
      <Formik
      initialValues={{
          email: ""
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("ایمیل موجود نمی باشد")
            .required("وارد کردن ایمیل ضروری است")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form className="profile-form" onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input">
                <label htmlFor="email">ایمیل عمومی:</label>

                <input
                  id="email"
                  type="email"
                  placeholder=" ایمیلی را وارد کنید که زیاد از آن استفاده نمی کنید"
                  {...formik.getFieldProps("email")}
                />
              </div>

              <div className="input">
                <label htmlFor="bio"> بیوگرافی:</label>

                <input
                  id="bio"
                  placeholder="کمی از خودتان بگویید"
                  type="text"
                  {...formik.getFieldProps("bio")}
                />
              </div>
            </div>
            <div className="buttons">
              <button type="submit" onClick={notify}>ارسال</button>
              <button type="button" onClick={() => navigate(-1)}>قبل</button>
            </div>
            <ToastContainer />
          </form>
        )}
      </Formik>
    </Pro>
  );
};

export default ProfileForm;
