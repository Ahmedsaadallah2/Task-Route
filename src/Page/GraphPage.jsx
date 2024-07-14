import React from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function GraphPage() {
  const data = [
    { name: "Ahmed Ali", value: 1000 },
    { name: "Aya Elsayed", value: 1500 },
    { name: "Mina Adel", value: 500 },
    { name: "Sarah Reda", value: 452 },
    { name: "Mohamed Sayed", value: 300 },
    { name: "Ahmed Saadallah", value: 600 },
    { name: "Usama Ali", value: 400 },
    { name: "Bassam Saadallah", value: 350 },
    { name: "Mohamed Ramadan", value: 736 },
    { name: "Ahmed Soliman", value: 285 },
  ];
  return (
    <>
      <div className="flex flex-col container">
        <h2 className="text-2xl text-green-600 font-bold ms-[70px]">
          Transactions Amount
        </h2>
        <BarChart
          width={1700}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" stackId="a" fill="#8884d8" />
          <Bar dataKey="name" stackId="a" fill="#82ca9d" />
        </BarChart>

        <Link
          to={"/"}
          className="mt-5 block w-fit bg-lime-500 py-2 px-3 rounded-md text-white text-xl ms-[70px]"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
}
