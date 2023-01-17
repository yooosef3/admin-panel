import React, { useRef, useState } from "react";

import { FaPencilAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { SiPaypal } from "react-icons/si";
import master from "../../assets/images/Card.png";
import masterCard from "../../assets/images/mastercard.webp";
import styled from "styled-components";
import visaCard from "../../assets/images/visa.webp";

const Mast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  .master-salary {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 992px) {
      flex-direction: row;
    }
    img {
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      border-radius: 10px;
      width: 100%;
    }

    .salaries {
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      .salary,
      .paypal {
        background-color: #ffff;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        padding: 15px;
        display: flex;
        gap: 15px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        hr {
          width: 130px;
        }

        h2,
        h3 {
          margin: 0;
        }
        small {
          color: gray;
          font-weight: 500;
        }
        svg {
          background-image: linear-gradient(310deg, #7928ca, #ff0080);
          color: #ffff;
          padding: 10px;
          border-radius: 10px;
          font-size: 34px;
        }
      }
    }
  }

  .payment-method {
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    border-radius: 6px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    .add-new {
      display: flex;
      justify-content: space-between;
      .custom-file-input::-webkit-file-upload-button {
        visibility: hidden;
      }
      .custom-file-input::before {
        content: "+ اضافه کردن کارت جدید";
        display: inline-block;
        background-image: linear-gradient(310deg, #141727, #3a416f);
        border: 1px solid #999;
        border-radius: 6px;
        color: #ffff;
        margin-top: 15px;
        padding: 5px 8px;
        outline: none;
        -webkit-user-select: none;
        width: 145px;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
      }
      .custom-file-input:hover::before {
        background-image: linear-gradient(310deg, #0e101b, #2d3255);
        border: 1px solid #999;
      }
    }
    .edit-card {
      display: flex;
      flex-direction: column;
      gap: 30px;
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }
      @media (min-width: 992px) {
        height: 113px;
      }
      
      .edit-master,
      .edit-visa {
        position: relative;
        height: 65px;
        border: 1px solid grey;
        border-radius: 10px;
        padding-right: 80px;
        overflow: hidden;
        flex-grow: 1;
        input {
          width: 98%;
          height: 60px;
          border: none;
          outline: none;
          font-size: 18px;
          background-color: #ffff;
          @media (min-width: 460px) {
            font-size: 24px;
          }
        }
        svg {
          position: absolute;
          left: 15px;
          top: 23px;
          color: gray;
          cursor: pointer;
          transition: all 0.2s linear;
          &:hover {
            color: black;
          }
        }
        img {
          position: absolute;
          right: 15px;
          top: 18px;
          width: 40px;
        }
      }
    }
  }

  @media (min-width: 992px) {
    width: 70%;
    height: 355px !important;
  }
`;

const Master = () => {
  const masterInput = useRef();
  const visaInput = useRef();

  const [bank, setBank] = useState({
    masterno: "0851  ****  ****  ****",
    visa: "9299  ****  ****  ****",
  });

  const masterHandler = (e) => {
    setBank({
      ...bank,
      masterno: e.target.value,
    });
  };

  const masterEd = () => {
    masterInput.current.disabled = false;
    masterInput.current.focus();
  };

  const blurMaster = () => {
    masterInput.current.disabled = true;
    if (bank.masterno.length < 22) {
      return setBank({
        ...bank,
        masterno: "0851  ****  ****  ****",
      });
    }
  };

  const visaHandler = (e) => {
    setBank({
      ...bank,
      visa: e.target.value,
    });
  };

  const visaEd = () => {
    visaInput.current.disabled = false;
    visaInput.current.focus();
  };

  const blurVisa = () => {
    visaInput.current.disabled = true;
    if (bank.visa.length < 22) {
      return setBank({
        ...bank,
        visa: "9299  ****  ****  ****",
      });
    }
  };

  return (
    <Mast>
      <div className="master-salary">
        <img alt="master-card" src={master} />
        <div className="salaries">
          <div className="salary">
            <MdAttachMoney />
            <h3>درآمد</h3>
            <small>براساس تراکنش</small>
            <hr />
            <h2>$2000+</h2>
          </div>
          <div className="paypal">
            <SiPaypal />
            <h3>paypal</h3>
            <small> پرداخت دورکاری</small>
            <hr />
            <h2>$455.00</h2>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <div className="add-new">
          <h3>روش پرداخت</h3>
          <input type="file" className="custom-file-input" />
        </div>
        <div className="edit-card">
          <div className="edit-master">
            <input
              ref={masterInput}
              type="text"
              value={bank.masterno}
              onChange={masterHandler}
              disabled
              onBlur={blurMaster}
            />
            <FaPencilAlt onClick={masterEd} />
            <img alt="master" src={masterCard} />
          </div>
          <div className="edit-visa">
            <input
              ref={visaInput}
              type="text"
              value={bank.visa}
              onChange={visaHandler}
              disabled
              onBlur={blurVisa}
            />
            <FaPencilAlt onClick={visaEd} />
            <img alt="visa" src={visaCard} />
          </div>
        </div>
      </div>
    </Mast>
  );
};

export default Master;
