"use client";

import React,{ useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarApp = ( props ) => {

  const [date, setDate] = useState("");

  const onClickDay = value => {

    const reverseDate = String(value).substring(4, 15).split(' ').reverse().join(' ');
    const year = reverseDate.substring(0, 4)
    const day = reverseDate.substring(5, 7)
    const month = reverseDate.substring(8, 11).replaceAll("Apr", "04");
    const formatedDate = year + "-" + month + "-" + day;
    setDate(formatedDate)
    //prompt(formatedDate)
  }
  props.mealDate(date)
  

  return (< Calendar
    onClickDay={onClickDay} />
  )
}



export default CalendarApp