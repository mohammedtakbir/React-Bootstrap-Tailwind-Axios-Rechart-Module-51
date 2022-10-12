import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=samsung')
        .then(data => {
            const loadPhones = data.data.data;
            const phoneData = loadPhones.map(phone => {
                const parts = phone.slug.split('-');
                const imei = parts[1];
                const phoneDetail = {
                    name: phone.phone_name,
                    IMEI: imei
                };
                return phoneDetail;
            });
            setPhones(phoneData);
        })
    }, [])
    return (
        <div className='mt-44 ml-10 mb-10'>
            <BarChart width={700} height={300} data={phones}>
                <Bar dataKey="IMEI" fill="#8884d8"></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;