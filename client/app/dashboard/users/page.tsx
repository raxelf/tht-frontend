import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = () => {
  return (
    <>
      {/* title */}
      <section className="w-full h-42 bg-primary rounded-bl-4xl flex items-center p-4">
        <h1 className="text-white text-2xl font-bold">Users</h1>
      </section>
    </>
  );
};

export default UsersPage;
