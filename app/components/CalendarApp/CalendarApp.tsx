"use client";

import React,{ useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarApp = ( props ) => {

  const [date, setDate] = useState("");

  function getMonthNumber(monthName) {
    const months = {
      "Jan": "01",
      "Feb": "02",
      "Mar": "03",
      "Apr": "04",
      "May": "05",
      "Jun": "06",
      "Jul": "07",
      "Aug": "08",
      "Sep": "09",
      "Oct": "10",
      "Nov": "11",
      "Dec": "12"
    };
    return months[monthName];
  }

  const onClickDay = value => {

    const reverseDate = String(value).substring(4, 15).split(' ').reverse().join(' ');
    const year = reverseDate.substring(0, 4)
    const day = reverseDate.substring(5, 7)
    const monthName = reverseDate.substring(8, 11)
    const monthNumber = getMonthNumber(monthName);
    const formatedDate = year + "-" + monthNumber + "-" + day;
    setDate(formatedDate)
    //prompt(formatedDate)
  }
  props.mealDate(date)
  

  return (< Calendar
    onClickDay={onClickDay} />
  )
}



export default CalendarApp