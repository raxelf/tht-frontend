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
  const [page, setPage] = useState(1);

  // search handle (always back to page 1)
  const handleSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };

  // search
  let filteredData = userData.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  filteredData = [...filteredData].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
    return 0;
  });

  // pagination (10 data/page)
  const pageSize = 10;
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const pageData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  // sort icon asc/desc
  const renderSortArrow = (key: SortKey) =>
    sortKey === key ? (sortAsc ? " ▲" : " ▼") : "";

  return (
    <div className="mt-8">
      <SearchBar search={search} setSearch={handleSearch} />

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
          {pageData.map((user: User) => (
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

      {/* Pagination UI */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-2 py-1 rounded border bg-gray-100 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          className="px-2 py-1 rounded border bg-gray-100 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableUserData;
