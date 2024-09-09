import Image from "next/image";
import hearing1 from "@/public/images/hearing-1.png";

const HearingPanel = () => {
  return (
    <div className="flex flex-col border bg-white outline outline-[14px] outline-white max-w-[260px] float-right mb-2 ml-4 p-1.5 gap-2 mt-16">
      <Image
        src={hearing1}
        alt="Cat nicitating membrane blinking"
        className="grow w-full object-cover hover:cursor-pointer"
      />
      <p>A cat&apos;s nicitating membrane shown as it blinks</p>
    </div>
  );
};

export default HearingPanel;
