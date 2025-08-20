import Link from "next/link";

type BookPromoSmallProps = {
  backgroundImage: string;
  heading: string;
  buttonText: string;
  href?: string; // optional link
};

export default function BookCarSmall({
  backgroundImage,
  heading,
  buttonText,
  href,
}: BookPromoSmallProps) {
  return (
    <div className="pb-[30px]">
      <div className="relative w-full overflow-hidden min-h-[355px]">
        {/* Background image */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start z-10">
          <h1>
            <span className="text-white text-[35px] tracking-wide">
              {heading}
            </span>
          </h1>

          {href ? (
            <Link
              href={href}
              className="bg-white text-black text-[16px] mt-[15px] px-[28px] py-[8px] hover:text-red-500 max-w-[170px] inline-block"
            >
              {buttonText}
            </Link>
          ) : (
            <button className="bg-white text-black text-[16px] mt-[15px] px-[28px] py-[8px] hover:text-red-500 max-w-[170px]">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
