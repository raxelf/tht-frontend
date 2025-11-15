const SummaryCard = ({
  title,
  icon,
  qty,
}: {
  title: string;
  icon: string;
  qty: string;
}) => {
  return (
    <div className="w-full bg-gray-100 rounded-xl p-6 flex flex-col gap-4 border border-gray-200">
      <div className="flex items-center gap-3">
        <i className={`${icon} text-3xl text-primary`} />
        <span className="font-semibold text-primary text-lg">{title}</span>
      </div>
      <p className="text-4xl font-bold text-gray-900">{qty}</p>
    </div>
  );
};

export default SummaryCard;
