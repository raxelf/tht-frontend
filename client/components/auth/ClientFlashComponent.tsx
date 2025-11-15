"use client";

import { useSearchParams } from "next/navigation";

const ClientFlashComponent = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return (
    <>
      {errorMessage && (
        <p className="rounded-xl py-2 px-4 bg-red-200 text-red-700">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default ClientFlashComponent;
