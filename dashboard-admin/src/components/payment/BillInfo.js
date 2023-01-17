import React, { useState } from "react";

import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

const BillInf = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 15px;
  .clients {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
`;
const Clien = styled.div`
  background-color: #ececec;
  padding: 15px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: gray;
    font-weight: 500;
    margin-left: 5px;
  }
  small {
    color: black;
    font-weight: 600;
  }

  .edit-delete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    gap: 5px;
    @media (min-width: 640px) {
      flex-direction: row;
      gap: 20px;
    }
    p {
      margin: 0;
      font-weight: 500;
    }
    .edit {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      transition: all 0.2s linear;
      color: gray;
      &:hover {
        color: black;
      }
    }
    .delete {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      transition: all 0.2s linear;
      color: red;
      &:hover {
        color: #e30424;
      }
    }
  }
`;
const BillInfo = () => {
  const [clients, setClients] = useState([
    {
      name: "یوسف خدری",
      company: "Viking Burrito",
      email: "Yooosef.khedri@gmail.com",
      vat: "FRB1235476",
      id: 1,
    },
    {
      name: "علی کریمی",
      company: "Stone Tech Zone",
      email: "ali.karimi@gmail.com",
      vat: "FRB1235476",
      id: 2,
    },
    {
      name: "آیدا قربانی",
      company: "Fiber Notion",
      email: "neda.gorbani@gmail.com",
      vat: "FRB1235476",
      id: 3,
    },
  ]);

  const deleteHandler = (item) => {
    setClients(clients.filter((client) => client !== item));
  };
  return (
    <BillInf>
      <h3>اطلاعات پرداخت</h3>
      <div className="clients">
        {clients.map((client) => (
          <Clien>
            <div className="client">
              <h3>{client.name}</h3>
              <div className="company">
                <span>نام شرکت: </span>
                <small>{client.company}</small>
              </div>
              <div className="email">
                <span>ایمیل: </span>
                <small>{client.email}</small>
              </div>
              <div className="vat">
                <span>مالیات بر ارزش افزوده: </span>
                <small>{client.vat}</small>
              </div>
            </div>
            <div className="edit-delete">
              <div className="delete" onClick={() => deleteHandler(client)}>
                <RiDeleteBinLine />
                <p>حـــذف</p>
              </div>
              <div className="edit">
                <MdEdit />
                <p>ویرایــش</p>
              </div>
            </div>
          </Clien>
        ))}
      </div>
    </BillInf>
  );
};

export default BillInfo;
