import Image from "next/image";
import logos from "@/data/Home/LogoData.json";

export default function PartnerLogosSection() {
  return (
    <div className="w-full bg-[#fcf7ef] py-3">
      <div className="container-fluid">
        <div className="grid grid-cols-5 gap-x-8 items-center">
          {/* Logo 1: always visible */}
          <div className="flex items-center justify-center">
            <Image src={logos[0].image} alt="" width={160} height={160} />
          </div>
          {/* Logo 2: ≥sm */}
          <div className="hidden sm:flex items-center justify-center">
            <Image src={logos[1].image} alt="" width={160} height={160} />
          </div>
          {/* Logo 3: ≥md */}
          <div className="hidden md:flex items-center justify-center">
            <Image src={logos[2].image} alt="" width={160} height={160} />
          </div>
          {/* Logo 4: ≥lg */}
          <div className="hidden lg:flex items-center justify-center">
            <Image src={logos[3].image} alt="" width={160} height={160} />
          </div>
          {/* Logo 5: ≥xl */}
          <div className="hidden xl:flex items-center justify-center">
            <Image src={logos[4].image} alt="" width={160} height={160} />
          </div>
        </div>
      </div>
    </div>
  );
}
