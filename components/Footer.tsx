import Image from "next/image";
import mediawiki from "@/public/images/mediawiki.png";
import wikimedia from "@/public/images/wikimedia.png";

const Footer = () => {
  return (
    <footer className="mt-16 border border-t pt-8 pb-12 px-4">
      <div className="flex flex-wrap max-w-[1400px] mx-auto gap-8 md:gap-12 lg:gap-24">
        <p className="grow w-full md:w-[20%]">
          Text is available under the{" "}
          <a className="text-black">
            Creative Commons Attribution-ShareAlike License 4.0
          </a>
          ; additional terms may apply. By using this site, you agree to the{" "}
          <a>Terms of Use</a> and <a>Privacy Policy</a>. Wikipedia® is a
          registered trademark of the{" "}
          <a className="text-black">Wikimedia Foundation, Inc.</a>, a non-profit
          organization.
        </p>

        <div className="flex flex-col max-h-20 md:max-h-32 flex-wrap w-full md:grow md:w-[30%] overflow-clip">
          <a className="grow w-[35%]">About Wikipedia</a>
          <a className="grow w-[35%]">Contact Wikipedia</a>
          <a className="grow w-[35%]">Privacy Policy</a>
          <a className="grow w-[35%]">Disclaimers</a>
          <a className="grow w-[35%]">Code of Conduct</a>
          <a className="grow w-[35%]">Developers</a>
          <a className="grow w-[35%]">Statistics</a>
          <a className="grow w-[35%] overflow-clip text-ellipsis">
            Mobile View
          </a>
          <a className="grow w-[40%] overflow-hidden text-ellipsis">
            Cookie Statement
          </a>
        </div>

        <div className="flex flex-wrap w-full lg:grow lg:w-[10%] items-start justify-center lg:justify-end gap-2 mt-4 md:mt-0">
          <Image
            src={mediawiki}
            alt="MediaWiki logo"
            width={120}
            height={42}
            className="w-28 object-contain hover:cursor-pointer"
          />
          <Image
            src={wikimedia}
            alt="Wikimedia logo"
            width={120}
            height={42}
            className="w-28 object-contain hover:cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
