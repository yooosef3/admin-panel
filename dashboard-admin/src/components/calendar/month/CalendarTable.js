import "./MonthStyles.css";
import "./icons/style.css";

import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";
import React, { Component } from "react";

import styled from "styled-components";

const CalT = styled.div`
.container{
  width: 800px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}
  overflow-x: auto;
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

class CalendarTable extends Component {
  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();

    this.state = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 25,
      onBeforeEventRender: (args) => {
        args.data.borderColor = "darker";
        if (args.data.backColor) {
          args.data.barColor = DayPilot.ColorUtil.darker(
            args.data.backColor,
            -1
          );
        }
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: (args) => {
              const e = args.source;
              this.calendar.events.remove(e);
            },
          },
          {
            text: "-",
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#21d4fd",
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#17ad37",
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#ecb823",
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
          {
            text: "Pink",
            icon: "icon icon-pink",
            color: "#ff0080",
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#ea0606",
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
          {
            text: "Auto",
            color: null,
            onClick: (args) => this.updateColor(args.source, args.item.color),
          },
        ],
      }),
      onTimeRangeSelected: async (args) => {
        const modal = await DayPilot.Modal.prompt(
          "Create a new event:",
          "کنفرانس React"
        );

        this.calendar.clearSelection();
        if (!modal.result) {
          return;
        }
        this.calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result,
        });
      },
    };
  }

  componentDidMount() {
    // load event data
    this.setState({
      startDate: "2022-11-01",
      events: [
        {
          id: 1,
          text: "تحویل پروژه",
          start: "2022-11-08",
          end: "2022-11-10",
          backColor: "#ecb823",
        },
        {
          id: 2,
          text: "ملاقات با اکبر",
          start: "2022-11-06",
          end: "2022-11-08",
          backColor: "#ff0080",
        },
        {
          id: 3,
          text: "هفته سایبری",
          start: "2022-11-02",
          end: "2022-11-04",
          backColor: "#21d4fd",
        },
        {
          id: 4,
          text: "تالار امانات",
          start: "2022-11-10",
          end: "2022-11-12",
          backColor: "#17ad37",
        },
        {
          id: 5,
          text: "امضای قرارداد",
          start: "2022-11-16",
          end: "2022-11-18",
          backColor: "#ff0080",
        },
        {
          id: 6,
          text: "کنفرانس IT",
          start: "2022-11-18",
          end: "2022-11-20",
          backColor: "#ecb823",
        },
        {
          id: 7,
          text: "معایب کنفرانس ",
          start: "2022-11-22",
          end: "2022-11-24",
          backColor: "#ea0606",
        },
        {
          id: 8,
          text: " آغاز پروژه ",
          start: "2022-11-25",
          end: "2022-11-27",
          backColor: "#21d4fd",
        },
        {
          id: 9,
          text: "دورهمی ",
          start: "2022-11-27",
          end: "2022-11-28",
          backColor: "#17ad37",
        },
      ],
    });
  }

  updateColor(e, color) {
    e.data.backColor = color;
    this.calendar.events.update(e);
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    return (
      <CalT>
        <div className="container">
          <DayPilotMonth {...this.state} ref={this.calendarRef} />
        </div>
      </CalT>
    );
  }
}

export default CalendarTable;
