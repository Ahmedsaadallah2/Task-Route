import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Customers() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ahmedsaadallah2.github.io/api/db.json")
      .then((res) => {
        console.log(res.data); // Check the structure of the response
        setData(res.data.customers || []); // Adjust based on actual structure
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container w-1/2">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search By Name"
            className="mb-3 w-full border-2 border-slate-400 p-1 rounded-lg outline-none"
          />
        </form>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? true
                    : item.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((item) => (
                  <tr
                    key={item.id} // Use a unique key
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Link
          to={"graph"}
          className="mt-5 block w-fit bg-lime-500 py-2 px-3 rounded-md text-white text-xl"
        >
          Show Statistics
        </Link>
      </div>
    </>
  );
}
