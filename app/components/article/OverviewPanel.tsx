import Image from "next/image";
import overview1 from "@/public/images/overview-1.png";
import overview2 from "@/public/images/overview-2.png";
import overview3 from "@/public/images/overview-3.png";
import overview4 from "@/public/images/overview-4.png";
import overview5 from "@/public/images/overview-5.png";
import overview6 from "@/public/images/overview-6.png";
import PanelTitle from "../PanelTitle";

const OverviewPanel = () => {
  return (
    <div className="bg-white outline outline-[14px] outline-white w-full md:w-[260px] md:float-right mb-4 md:mb-2 md:ml-4 lg:mb-2 p-1.5 border flex flex-col">
      <h3 className="mx-auto mb-2">Cat</h3>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Image
            src={overview1}
            alt="Image A"
            className="grow w-[55%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview2}
            alt="Image B"
            className="grow w-[20%] object-cover hover:cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <Image
            src={overview3}
            alt="Image C"
            className="grow w-[40%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview4}
            alt="Image D"
            className="grow w-[45%] object-cover hover:cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <Image
            src={overview5}
            alt="Image E"
            className="grow w-[40%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview6}
            alt="Image F"
            className="grow w-[20%] object-cover hover:cursor-pointer"
          />
        </div>
      </div>
      <span className="text-sm mx-auto">Various types of cat</span>

      <PanelTitle>Temporal Range</PanelTitle>
      <p>9,500 years ago - present</p>

      <PanelTitle>Conservation Status</PanelTitle>
      <p>Domesticated</p>

      <PanelTitle>Scientific Classification</PanelTitle>
      <div className="flex justify-between">
        <p>Domain:</p>
        <a>Eukaryota</a>
      </div>
      <div className="flex justify-between">
        <p>Kingdom:</p>
        <a>Animalia</a>
      </div>
      <div className="flex justify-between">
        <p>Class:</p>
        <a>Mammalia</a>
      </div>
    </div>
  );
};

export default OverviewPanel;
