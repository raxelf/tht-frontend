"use client";

import React, { useState } from "react";
import userData from "@/data/user.json";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
};

const TableUserData = () => {
  const [search, setSearch] = useState("");

  // Filter user berdasarkan nama/email/role
  const filteredData = userData.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8">
      <div className="w-full flex gap-4 mb-4">
        <form
          className="flex gap-2 items-center bg-gray-100 px-4 py-2 rounded-xl w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <i className="ri-search-line text-primary"></i>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-1 rounded-lg focus:border-0 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Created At</th>
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
