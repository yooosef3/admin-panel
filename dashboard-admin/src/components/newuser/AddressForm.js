import * as Yup from "yup";

import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Address = styled.div`
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
  .address-form {
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

    .city-state-zip {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media (min-width: 700px) {
        flex-direction: row;
      }
      .state-zip {
        display: flex;
        gap: 10px;
        input {
          width: 88%;
        }
      }
    }
  }
`;

const AddressForm = () => {
  const navigate = useNavigate();

  return (
    <Address>
      <h3>آدرس</h3>
      <Formik
        initialValues={{
          address1: "",
          city: "",
          zip: "",
        }}
        validationSchema={Yup.object({
          address1: Yup.string().required(" وارد کردن آدرس  ضروری است"),
          city: Yup.string().required("وارد کردن شهر ضروری است"),
          zip: Yup.string().required("وارد کردن کدپستی ضروری است"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          navigate("../socialform");
        }}
      >
        {(formik) => (
          <form className="address-form" onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input">
                <label htmlFor="address1">آدرس 1:</label>

                <input
                  id="address1"
                  type="text"
                  placeholder="مثل خیابان میثم"
                  {...formik.getFieldProps("address1")}
                />
                {formik.touched.address1 && formik.errors.address1 ? (
                  <div className="error">{formik.errors.address1}</div>
                ) : null}
              </div>

              <div className="input">
                <label htmlFor="lastName">آدرس 2:</label>

                <input
                  id="address2"
                  placeholder="مثل خیابان البرز"
                  type="text"
                  {...formik.getFieldProps("address2")}
                />
              </div>

              <div className="city-state-zip">
                <div className="input">
                  <label htmlFor="city">شهر:</label>

                  <input
                    placeholder="مثل ارومیه"
                    id="city"
                    type="text"
                    {...formik.getFieldProps("city")}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div className="error">{formik.errors.city}</div>
                  ) : null}
                </div>

                <div className="state-zip">
                  <div className="input">
                    <label htmlFor="state">استان:</label>

                    <input
                      id="state"
                      placeholder="مثل تهران"
                      type="text"
                      {...formik.getFieldProps("state")}
                    />
                  </div>

                  <div className="input">
                    <label htmlFor="zip">کدپستی:</label>

                    <input
                      id="zip"
                      type="text"
                      placeholder="مثل 1245-4578"
                      {...formik.getFieldProps("zip")}
                    />
                    {formik.touched.zip && formik.errors.zip ? (
                      <div className="error">{formik.errors.zip}</div>
                    ) : null}
                  </div>
                </div>
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
    </Address>
  );
};

export default AddressForm;
