import "@asseinfo/react-kanban/dist/styles.css";

import Board from "@asseinfo/react-kanban";
import DragCard from "./DragCard";
import DragChange from "./DragChange";
import DragProgress from "./DragProgress";
import React from "react";
import done from "../../assets/images/home-decor-1.05e218fd.jpg";
import progress from "../../assets/images/office-dark.1a5b950b.jpg";
import update from "../../assets/images/meeting.ec9a7c23.jpg";

const text1 = "طراحی وب سایت: کارت های جدید برای بخش وبلاگ و جزئیات پروفایل";
const text2 = " به روز رسانی ReactJS ورژن 18";
const text3 = " طراحی مجدد  صفحه اصلی";

const board = {
  columns: [
    {
      id: 1,
      title: " در حال پیشرفت",
      cards: [
        {
          id: 1,
          description: (
            <DragCard
              key={1}
              progress = {true}
              img={progress}
              text={text1}
              status=" در حال انتظار"
            />
          ),
        },
        {
          id: 2,
          description: <DragChange status={' انجام شده'} step={3} count={2} type={' برنامه ریزی کمپین زمستانی'}/>
        },
      ],
    },
    {
      id: 2,
      title: "ناتمام",
      cards: [
        {
          id: 7,
          description: <DragChange status={'به روز رسانی'} count={3} step={4} type={'Argon Dashboard PRO - React'}/>
        },
        {
          id: 8,
          description: <DragProgress status={'در حال بررسی'} text={'تغییر ابعاد تصاویر'} percent={'85%'}/>
        },
        {
          id: 9,
          description: <DragProgress status={'در حال بررسی'} text={' به روزرسانی لینک ها'} percent={'60%'}/>
        }
      ],
    },
    {
      id: 3,
      title: "در حال بررسی",
      cards: [
        {
          id: 3,
          description: <DragChange status={'در حال تست'} step={1} count={12} type={'تفییرات ریسپانسیو'}/>
        },
        {
            id: 4,
            description: (
              <DragCard
                key={4}
                progress={false}
                img={update}
                text={text2}
                status="به روزرسانی"
              />
            )
          },
      ],
    },
    {
      id: 4,
      title: "انجام شده",
      cards: [
        {
        id: 5,
        description: (
            <DragCard
              key={5}
              img={done}
              text={text3}
              status="تکمیل شده"
            />
          )
        },
        {
          id: 6,
          description: <DragChange status={'خطاها'} step={2} count={9} type={'تعمیر خطاهای فایرفاکس'}/>
        },
      ],
    },
  ],
};

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  );
}

const DragableSections = () => {
  return (
    <>
      <UncontrolledBoard />
    </>
  );
};

export default DragableSections;
