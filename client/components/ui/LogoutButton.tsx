import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const doLogout = async () => {
    "use server";

    const cookieStorage = await cookies();

    const token = cookieStorage.get("token");
    if (token) cookieStorage.delete("token");

    redirect("/login");
  };

  return (
    <form action={doLogout}>
      <button
        type="submit"
        className="flex gap-2 items-center bg-primary text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-secondary delay-75 transition"
      >
        <i className="ri-logout-box-r-line text-lg" />

        <p>Logout</p>
      </button>
    </form>
  );
};

export default LogoutButton;
