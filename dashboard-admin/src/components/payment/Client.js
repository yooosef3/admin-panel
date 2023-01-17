// import { MdEdit } from "react-icons/md";
// import React from "react";
// import { RiDeleteBinLine } from "react-icons/ri";
// import styled from "styled-components";

// const Clien = styled.div`
//     background-color: #ececec;
//     padding: 15px;
//     border-radius: 6px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     span{
//         color: gray;
//         font-weight: 500;
//         margin-left: 5px;
//     }
//     small{
//         color: black;
//         font-weight: 600;
//     }

//     .edit-delete{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         height: fit-content;
//         gap: 5px;
//         @media (min-width: 640px) {
//             flex-direction: row;
//             gap: 20px;
//         }
//         p{
//             margin: 0;
//             font-weight: 500;
//         }
//         .edit{
//             display: flex;
//             align-items: center;
//             gap: 5px;
//             cursor: pointer;
//             transition: all .2s linear;
//             color: gray;
//             &:hover{
//                 color: black;
//             }
//         }
//         .delete{
//             display: flex;
//             align-items: center;
//             gap: 5px;
//             cursor: pointer;
//             transition: all .2s linear;
//             color: red;
//             &:hover{
//                 color: #e30424;
//             }
//         }
//     }
    
// `;
// const Client = ({name, company, email, vat, deleteHandler}) => {
//   return (
//     <Clien>
//       <div className="client">
//         <h3>{name}</h3>
//         <div className="company">
//           <span>نام شرکت: </span>
//           <small>{company}</small>
//         </div>
//         <div className="email">
//           <span>ایمیل: </span>
//           <small>{email}</small>
//         </div>
//         <div className="vat">
//           <span>مالیات بر ارزش افزوده: </span>
//           <small>{vat}</small>
//         </div>
//       </div>
//       <div className="edit-delete">
//         <div className="delete" onClick={() => deleteHandler()}>
//             <RiDeleteBinLine />
//             <p>حـــذف</p>
//         </div>
//         <div className="edit">
//             <MdEdit />
//             <p>ویرایــش</p>
//         </div>
//       </div>
//     </Clien>
//   );
// };

// export default Client;
