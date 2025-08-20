import Image from "next/image";

interface CounterCardProps {
  icon: string;
  count: string;
  label: string;
}

const CounterCard = ({ icon, count, label }: CounterCardProps) => (
  <div className="flex items-center justify-center gap-6 px-4 py-9 bg-white border border-gray-100">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#f46d6d]">
      <Image src={icon} alt={label} width={60} height={60} />
    </div>
    <div>
      <div className="text-2xl text-black mb-1">{count}</div>
      <div className="text-gray-400 text-base">{label}</div>
    </div>
  </div>
);

export default CounterCard;
