import Link from "next/link";

type FilpCardProps = {
  image?: string;
  text?: string;
  frontSide?: string;
};

const CarosalFilpCard = ({ image, text, frontSide }: FilpCardProps) => {
  return (
    <div className="group h-60 w-[455px] [perspective:1000px] mx-auto">
      <div className="relative h-full w-full transition-transform duration-200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] text-white">
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-gray-200 shadow-lg rounded-xl [backface-visibility:hidden] flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <h2 className="mt-4 text-lg font-bold">{frontSide}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-[#4a4a4a] text-white shadow-lg rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
          <h2 className="text-sm text-center tracking-wide leading-6 px-3 py-2">
            {text}
          </h2>
          <Link href={"#"} className="leading-5 tracking-wide underline py-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarosalFilpCard;
