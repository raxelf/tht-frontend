"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

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

      <section className="bg-white w-full flex justify-end items-end p-6 mt-32">
        <p>{dateNow}</p>
      </section>

      {/* nav */}
      <section className="bg-stone-900 w-full h-full">
        <div className="flex flex-col gap-2 pl-8">
          <Link
            href="/dashboard"
            className={`group w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer mt-8 ${
              pathname === "/dashboard"
                ? "bg-primary text-white"
                : "bg-gray-300 text-primary hover:text-white hover:bg-primary"
            }`}
          >
            <i
              className={`ri-dashboard-line text-lg ${
                pathname === "/dashboard"
                  ? "text-white"
                  : "text-primary group-hover:text-white"
              }`}
            />
            <p
              className={`text-sm ${
                pathname === "/dashboard"
                  ? "text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Dashboard
            </p>
          </Link>

          <Link
            href="/dashboard/users"
            className={`group w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer ${
              pathname.startsWith("/dashboard/users")
                ? "bg-primary text-white"
                : "bg-gray-300 text-primary hover:text-white hover:bg-primary"
            }`}
          >
            <i
              className={`ri-group-line text-lg ${
                pathname.startsWith("/dashboard/users")
                  ? "text-white"
                  : "text-primary group-hover:text-white"
              }`}
            />
            <p
              className={`text-sm ${
                pathname.startsWith("/dashboard/users")
                  ? "text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Users
            </p>
          </Link>

          <Link
            href="/dashboard/reports"
            className={`group w-full px-6 py-2 rounded-l-lg flex gap-2 items-center cursor-pointer ${
              pathname.startsWith("/dashboard/reports")
                ? "bg-primary text-white"
                : "bg-gray-300 text-primary hover:text-white hover:bg-primary"
            }`}
          >
            <i
              className={`ri-folder-chart-line text-lg ${
                pathname.startsWith("/dashboard/reports")
                  ? "text-white"
                  : "text-primary group-hover:text-white"
              }`}
            />
            <p
              className={`text-sm ${
                pathname.startsWith("/dashboard/reports")
                  ? "text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              Reports
            </p>
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
