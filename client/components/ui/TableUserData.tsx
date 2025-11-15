"use client";

import { useState } from "react";
import userData from "@/data/user.json";
import SearchBar from "./SearchBar";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
};

type SortKey = keyof User;

const TableUserData = () => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortAsc, setSortAsc] = useState(true);

  // search user berdasarkan nama/email
  let filteredData = userData.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort asc/desc
  filteredData = [...filteredData].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
    return 0;
  });

  // icon
  const renderSortArrow = (key: SortKey) =>
    sortKey === key ? (sortAsc ? " ▲" : " ▼") : "";

  return (
    <div className="mt-8">
      <SearchBar search={search} setSearch={setSearch} />

      <table className="w-full">
        <thead>
          <tr>
            <th
              className="px-4 py-2 border cursor-pointer"
              onClick={() => {
                setSortKey("id");
                setSortAsc(sortKey === "id" ? !sortAsc : true);
              }}
            >
              ID{renderSortArrow("id")}
            </th>
            <th
              className="px-4 py-2 border cursor-pointer"
              onClick={() => {
                setSortKey("name");
                setSortAsc(sortKey === "name" ? !sortAsc : true);
              }}
            >
              Name{renderSortArrow("name")}
            </th>
            <th
              className="px-4 py-2 border cursor-pointer"
              onClick={() => {
                setSortKey("email");
                setSortAsc(sortKey === "email" ? !sortAsc : true);
              }}
            >
              Email{renderSortArrow("email")}
            </th>
            <th
              className="px-4 py-2 border cursor-pointer"
              onClick={() => {
                setSortKey("role");
                setSortAsc(sortKey === "role" ? !sortAsc : true);
              }}
            >
              Role{renderSortArrow("role")}
            </th>
            <th
              className="px-4 py-2 border cursor-pointer"
              onClick={() => {
                setSortKey("created_at");
                setSortAsc(sortKey === "created_at" ? !sortAsc : true);
              }}
            >
              Created At{renderSortArrow("created_at")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user: User) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUserData;
