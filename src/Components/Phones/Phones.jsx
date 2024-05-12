import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Audio, Grid } from 'react-loader-spinner';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
const Phones = () => {
    const [phone, setPhone] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhone(phonesWithFakeData);
                setLoading(false);
            });
    }, [])

    return (
        <div className='w-full h-[200px] md:h-[500px]'>
            <div>
            {loading && <div>
                <Audio 
                    height="150"
                    width="200"
                    radius="9"
                    color="tomato"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
                <Grid
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
            </div>}
            </div>
            <p className="text-2xl font-bold">Phones: {phone.length}</p>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;