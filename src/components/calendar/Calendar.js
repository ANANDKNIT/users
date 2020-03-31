import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/core/main.css";

const Calendar = props => {
  return <FullCalendar plugins={[dayGridPlugin]} events={props.eventsList} />;
};

export default Calendar;
