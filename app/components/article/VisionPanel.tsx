import Image from "next/image";
import vision1 from "@/public/images/vision-1.png";

const VisionPanel = () => {
  return (
    <div className="flex flex-col border bg-white outline outline-[14px] outline-white max-w-[260px] float-right mb-2 ml-4 p-1.5 gap-2 mt-16">
      <Image
        src={vision1}
        alt="Glowing cat eyes caused by camera flash"
        className="grow w-full object-cover hover:cursor-pointer"
      />
      <p>
        Reflection of camera flash from the <a>tapetum lucidum</a>
      </p>
    </div>
  );
};

export default VisionPanel;
