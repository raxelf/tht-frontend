import SummaryCard from "@/components/ui/SummaryCard";
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
        <div className="grid grid-cols-3 w-full gap-8">
          <SummaryCard
            title="Users"
            icon="ri-account-circle-2-line"
            qty={"30"}
          />
          <SummaryCard title="Transactions" icon="ri-swap-line" qty={"67"} />
          <SummaryCard
            title="Income"
            icon="ri-money-dollar-circle-line"
            qty={"IDR 1,000,000"}
          />
        </div>

        {/* data */}
        <TableUserData />
      </div>
    </>
  );
};

export default DashboardPage;
