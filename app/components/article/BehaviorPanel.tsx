import Image from "next/image";
import behavior1 from "@/public/images/behavior-1.png";

const BehaviorPanel = () => {
  return (
    <div className="flex flex-col border bg-white outline outline-[14px] outline-white max-w-[260px] float-right mb-2 ml-4 p-1.5 gap-2">
      <Image
        src={behavior1}
        alt="Cat paw"
        className="grow w-full object-cover hover:cursor-pointer"
      />
      <p>Paws of a cat</p>
    </div>
  );
};

export default BehaviorPanel;
