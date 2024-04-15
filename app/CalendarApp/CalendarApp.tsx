"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import React from 'react'

const CalendarApp = () => {
    const [value, setValue] = useState(new Date());

    const onClick = ({value, event}) => {
        return (
          <div className="bg-green-500">
            
          </div>
        );
    }

    return (
      <div>
        <Calendar  />
      </div>
    );
}

export default CalendarApp