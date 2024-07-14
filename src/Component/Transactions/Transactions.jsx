import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Transactions() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    axios
      .get("http://localhost:3500/transactions")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container w-1/2">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search By Amount"
            className="mb-3 w-full border-2 border-slate-400 p-1 rounded-lg outline-none"
          />
        </form>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  customer_id
                </th>
                <th scope="col" className="px-6 py-3">
                  date
                </th>
                <th scope="col" className="px-6 py-3">
                  amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((data) => {
                  return search === ""
                    ? data
                    : data.amount.toString().includes(search.toString());
                })
                .map((data, id) => {
                  return (
                    <tr
                      key={id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.id}
                      </th>
                      {/* <td className="px-6 py-4">{data.customer_id}</td> */}
                      <td className="px-6 py-4">{data.date}</td>
                      <td className="px-6 py-4">{data.amount}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
