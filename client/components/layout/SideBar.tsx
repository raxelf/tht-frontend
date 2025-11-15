"use client";

import Link from "next/link";

const SideBar = () => {
  const dateNow = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <aside className="col-span-3 w-full h-full">
      <section className="bg-gray-200 w-full flex justify-center items-center p-4">
        <p className="text-2xl">Dashboard</p>
      </section>

      <section className="bg-stone-900 w-full flex justify-end items-end text-white pt-42 pb-8 px-8">
        <p>{dateNow}</p>
      </section>

      {/* nav */}
      <section className="bg-stone-900 w-full h-full">
        <div className="flex flex-col gap-2 pl-8">
          <Link
            href="/dashboard"
            className="w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer text-white bg-primary"
          >
            <i className="ri-dashboard-line text-lg text-white" />
            <p className="text-sm text-white">Dashboard</p>
          </Link>

          <div className="group w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer bg-gray-300 text-primary hover:text-white hover:bg-primary">
            <i className="ri-group-line text-lg text-primary group-hover:text-white" />
            <p className="text-sm text-black group-hover:text-white">Users</p>
          </div>

          <div className="group w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer bg-gray-300 text-primary hover:text-white hover:bg-primary">
            <i className="ri-folder-chart-line text-lg text-primary group-hover:text-white" />
            <p className="text-sm text-black group-hover:text-white">Reports</p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
