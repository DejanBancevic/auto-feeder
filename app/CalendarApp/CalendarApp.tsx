"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import React from 'react'

const CalendarApp = () => {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default CalendarApp