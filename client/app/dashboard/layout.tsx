import LogoutButton from "@/components/LogoutButton";
import SideBar from "@/components/SideBar";
import Image from "next/image";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <SideBar />

      <main className="col-span-9 w-full h-full">
        {/* header */}
        <section className="flex justify-end p-4 w-full gap-8">
          <div className="flex gap-2 items-center">
            <Image
              src={"/user-placeholder.png"}
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full"
            />

            <p className="">Admin</p>
          </div>

          <LogoutButton />
        </section>
        {/* main content */}
        <section className="mt-2 w-full h-full">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
