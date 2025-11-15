import TableUserData from "@/components/ui/TableUserData";

const DashboardPage = () => {
  return (
    <>
      {/* title */}
      <div className="w-full h-42 bg-primary rounded-bl-4xl flex items-center p-4">
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="w-full h-full p-8">
        {/* summary */}
        <div className="grid grid-cols-3 w-full">
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* data */}
        <TableUserData />
      </div>
    </>
  );
};

export default DashboardPage;
