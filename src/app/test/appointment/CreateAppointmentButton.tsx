"use client";

import { createAppointment } from "@/lib/api/appointments";
import { Button } from "antd";
import React from "react";

export default function CreateAppointmentButton() {
    const [data, setData] = React.useState({});

    return (
        <>
            <Button
                onClick={() => {
                    const appointment = {
                        start: new Date("2023-08-22T11:30:00+1000"),
                        end: new Date('2023-08-22T12:00:00+1000'),
                        treatment: 1,
                        doctor: 2,
                        location: 3,
                        patient: 1,

                    };
                    createAppointment({
                        appointment: appointment
                    }).then(setData);
                }}
            >
                Create Appointment
            </Button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
