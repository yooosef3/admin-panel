import React, { useState } from "react";

import { BsFillHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import ali from "../../assets/images/team-17-370x334.jpg";
import asal from "../../assets/images/team-5.bba518ed.jpg";
import mari from "../../assets/images/marie.1c682842.jpg";
import narges from "../../assets/images/marie.1c682842.jpg";
import naz from "../../assets/images/ivana-square.b04026bd.jpg";
import post from "../../assets/images/work-space.aef49011.jpeg";
import styled from "styled-components";
import yusef from "../../assets/images/bruce-mars.45f64779.jpg";

const Pos = styled.div`
  background-color: #ffff;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  border-radius: 6px;
  .post-header {
    display: flex;
    border-bottom: 1px solid #8d8d8d;
    padding-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    .user-avatar {
      display: flex;
      gap: 15px;
      img {
        width: 50px;
        height: 50px;
        border: 4px solid #ff4d00;
        border-radius: 50%;
        cursor: pointer;
      }
      .user-name {
        h3 {
          margin: 0;
          cursor: pointer;
        }
        span {
          color: gray;
        }
      }
    }
    .follow {
      border-radius: 6px;
      color: ${(props) => (props.follow ? "#344767" : "#ffff")};
      border: 1px solid gray;
      cursor: pointer;
      background: ${(props) =>
        props.follow
          ? "linear-gradient(310deg, rgb(255, 255, 255), rgb(255, 255, 255))"
          : "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))"};
      padding: 4px 10px 0 10px;
      height: 25px;
      transition: all 0.2s linear;
      &:hover {
        opacity: 80%;
      }
    }
  }

  .post {
    p {
      color: gray;
    }
    img {
      width: 100%;
      border-radius: 8px;
    }
    .actions-like {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;

      .actions {
        display: flex;
        gap: 20px;
        .action {
          display: flex;
          gap: 7px;
          svg {
            color: black;
            font-size: 22px;
            color: gray;
            cursor: pointer;
            transition: all 0.2s linear;
            :hover {
              color: black;
            }
          }
          span {
            font-size: 18px;
            color: gray;
          }
        }
      }
      .like {
        display: flex;
        align-items: center;
        gap: 15px;
        .likes {
          display: flex;
          align-items: center;
          img {
            width: 16px;
            border-radius: 50%;
            margin: 0 -3px;
            border: 2px solid rgb(21, 130, 154);
            cursor: pointer;
            &:hover {
              z-index: 5;
            }
            @media (min-width: 460px) {
            width: 20px;
          }
          }
        }
        .likes-count {
          color: gray;
          font-size: 14px;
          @media (min-width: 460px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  .comments {
    padding-top: 40px;
    border-top: 1px solid gray;
    .comment {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .content {
        h3 {
          margin: 0;
        }
        .like-share {
          display: flex;
          justify-content: start;
          gap: 20px;
          .action {
            svg {
              color: #8d8d8d;
              margin-left: 8px;
            }
            span {
              font-weight: 500;
              color: #8d8d8d;
            }
          }
        }
      }
    }
    .write-comment {
      display: flex;
      gap: 25px;
      img {
        width: 50px;
        border-radius: 50%;
      }
      input{
        width: 100%;
        border-radius: 8px;
        border: 1px solid gray;
        padding-right: 10px;
        outline: 0;
        &:focus{
          border: 1px solid rgb(23,193,232);
        }
        &::placeholder{
          font-size: 16px;
        }
      }
    }
  }

   @media (min-width: 992px) {
        width: 70%;
    }
`;

const Post = () => {
  const [likes, setLikes] = useState(32);
  const [follow, setFollow] = useState(false);
  const likeHandler = () => {
    setLikes(33);
  };

  return (
    <Pos follow={follow}>
      <div className="post-header">
        <div className="user-avatar">
          <img alt="user" src={asal} />
          <div className="user-name">
            <h3>عسل صادقی</h3>
            <span>3 روز پیش</span>
          </div>
        </div>
        <h3 onClick={() => setFollow(!follow)} className="follow">
          {" "}
          {follow ? "Following" : "Follow"}
        </h3>
      </div>
      <div className="post">
        <p>
          نمایه های شخصی بهترین راه برای شماست تا توجه آنها را جلب کنید و
          استخدام کنندگان را متقاعد کنید که به خواندن رزومه شما ادامه دهند، زیرا
          شما دقیقاً به آنها می گویید که چرا باید شما را استخدام کنند.
        </p>
        <img alt="post" src={post} />
        <div className="actions-like">
          <div className="actions">
            <div className="action">
              <BsFillHeartFill
                style={{ color: `${likes === 33 && "red"}` }}
                onClick={likeHandler}
              />
              <span>{likes + 3}</span>
            </div>
            <div className="action">
              <FaRegComment />
              <span>36</span>
            </div>
            <div className="action">
              <FiSend />
            </div>
          </div>
          <div className="like">
            <div className="likes">
              <img alt="like" src={naz} />
              <img alt="like" src={ali} />
              <img alt="like" src={mari} />
            </div>
            <span className="likes-count">و {likes} نفر دیگر</span>
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <img alt="comment" src={yusef} />
            <div className="content">
              <h3>یوسف خدری</h3>
              <p>
                همیشه احساس می کردم هر کاری می توانم انجام دهم. این اصلی ترین
                چیزی است که مردم توسط آن کنترل می شوند! افکار - درک آنها از
                خودشان!
              </p>
              <div className="like-share">
                <div className="action">
                  <BsFillHeartFill />
                  <span>6 لایک</span>
                </div>
                <div className="action">
                  <FiSend />
                  <span>3 اشتراک</span>
                </div>
              </div>
            </div>
          </div>
          <div className="comment">
            <img alt="comment" src={narges} />
            <div className="content">
              <h3>نرگس علیدوست</h3>
              <p>
                جامعه آنقدر مرزها و محدودیت‌های زیادی در مورد درست و نادرست
                ایجاد کرده است که تقریباً غیرممکن است که یک فکر خالص به آن
                بپردازیم. مثل یک بچه کوچک است، یک پسر کوچک.{" "}
              </p>
              <div className="like-share">
                <div className="action">
                  <BsFillHeartFill />
                  <span>10 لایک</span>
                </div>
                <div className="action">
                  <FiSend />
                  <span>13 اشتراک</span>
                </div>
              </div>
            </div>
          </div>
          <div className="write-comment">
            <img alt="comment" src={asal} />
            <input type="text" placeholder="نظر خود را بنویسید" />
          </div>
        </div>
      </div>
    </Pos>
  );
};

export default Post;
