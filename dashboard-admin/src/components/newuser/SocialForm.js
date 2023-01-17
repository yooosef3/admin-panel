import * as Yup from "yup";

import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Social = styled.div`
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
  .social-form {
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
      }
    }
  }
`;

const SocialForm = () => {
  const navigate = useNavigate();

  return (
    <Social>
    <h3>شبکه های اجتماعی</h3>
      <Formik
        initialValues={{
          twitter: "",
        }}
        validationSchema={Yup.object({
          twitter: Yup.string().required(" وارد کردن اکانت twitter ضروری است"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          navigate("../profileform");
        }}
      >
        {(formik) => (
          <form className="social-form" onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input">
                <label htmlFor="firstName">twitter:</label>

                <input
                  id="twitter"
                  type="text"
                  placeholder="مثل @jozeph3"
                  {...formik.getFieldProps("twitter")}
                />
                {formik.touched.twitter && formik.errors.twitter ? (
                  <div className="error">{formik.errors.twitter}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="lastName"> facebook:</label>

                <input
                  id="facebook"
                  placeholder="مثل https://..."
                  type="text"
                  {...formik.getFieldProps("facebook")}
                />
              </div>

              <div className="input">
                <label htmlFor="instagram">instagram:</label>

                <input
                  placeholder="مثل https://..."
                  id="instagram"
                  type="text"
                  {...formik.getFieldProps("instagram")}
                />
              </div>
            </div>
            <div className="buttons">
              <button type="submit">بعدی</button>
              <button onClick={() => navigate(-1)} type="button">
                قبل
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Social>
  );
};

export default SocialForm;
