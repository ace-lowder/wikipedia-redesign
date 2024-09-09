import ArticleHeading from "../ArticleHeading";
import { TbNotes } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";

const SeeAlso = () => {
  return (
    <div className="flex flex-col gap-8">
      <ArticleHeading>See Also</ArticleHeading>
      <div className="flex flex-wrap gap-2 -mt-6">
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-slate-100 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-slate-500" />
          <span className="text-slate-500">Animals Portal</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-slate-100 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-slate-500" />
          <span className="text-slate-500">Cats Portal</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-slate-100 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-slate-500" />
          <span className="text-slate-500">Mammals Portal</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cats in the United States</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cat-Dog Relationship</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cat Fancy</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cat Food</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cats and the Internet</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cat Lady</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-blue-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-blue-500" />
          <span className="text-blue-500">Cat Collar</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-green-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-green-700" />
          <span className="text-green-700">List of Cat Breeds</span>
        </button>
        <button className="grow w-full md:w-[40%] flex items-center rounded-md bg-green-50 gap-2 mt-1 py-1 px-2 hover:bg-slate-200">
          <TbNotes size={14} className="text-green-700" />
          <span className="text-green-700">List of Individual Cats</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 items-center bg-orange-50 rounded-md p-2 text-orange-500">
        <VscListSelection />
        <span className="text-black">Categories:</span>
        <a className="text-orange-500">Domesticated Animals</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Cats</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">English Words</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Mammals Described in 1758</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Animal Models</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Felis</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Taxa Named by Carl Linnaeus</a>
        <span className="select-none">•</span>
        <a className="text-orange-500">Cosmopolitan Mammals</a>
      </div>

      <span className="text-gray-500 -mt-4">
        Last edited on 9 September 2024, at 22:48 (UTC)
      </span>
    </div>
  );
};

export default SeeAlso;
