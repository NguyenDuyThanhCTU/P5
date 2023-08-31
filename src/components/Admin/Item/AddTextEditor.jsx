import React from "react";
import TextEditor from "../../Item/TextEditor";
import { AiFillCloseCircle } from "react-icons/ai";

const AddTextEditor = ({ setContent, Content, state, title }) => {
  return (
    <div className="p-2 h-full flex flex-col items-center gap-5">
      <h3 className="text-center pt-5  text-[22px] font-LexendDeca">{title}</h3>
      <div className=" bg-gray-300 h-[80%] overflow-y-auto w-full">
        <TextEditor setEditorData={setContent} editorData={Content} />
      </div>{" "}
      <div className="flex gap-5">
        <div
          className="bg border border-red-500  text-black hover:bg-red-600  hover:text-white py-3 px-10 duration-500 cursor-pointer  rounded-xl"
          onClick={() => state(false)}
        >
          Thoát
        </div>
        <div
          className="bg bg-red-500 text-white hover:bg-red-600  py-3 px-10 duration-500 cursor-pointer  rounded-xl"
          onClick={() => state(false)}
        >
          Thêm
        </div>
      </div>
    </div>
  );
};

export default AddTextEditor;
