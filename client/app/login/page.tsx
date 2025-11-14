import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full lg:p-16 p-4 gap-4">
      <div className="hidden md:flex justify-center items-center bg-primary rounded-2xl">
        <Image
          src={"/factory.png"}
          alt="Factory Illustration"
          width={360}
          height={360}
        />
      </div>

      <div className="flex justify-center lg:p-32 p-16 items-center">
        <div className="w-full">
          <h1 className="text-center text-2xl font-bold">Login</h1>

          <form action="" className="mt-8 flex flex-col gap-4">
            {/* input email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="border border-gray-400 rounded-xl py-2 px-4"
              />
            </div>

            {/* input password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="border border-gray-400 rounded-xl py-2 px-4"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-primary rounded-xl text-white cursor-pointer hover:bg-secondary delay-75 transition mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
