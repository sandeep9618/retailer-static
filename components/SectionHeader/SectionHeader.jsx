import React from "react";

const SectionHeader = (props) => {
  const { title, className } = props;
  return (
    <div
      className={`text-[#FF8A00] font-bold text-[clamp(18px,_2vw,_40px)]
        border-l-8 border-l-[#111F61] border-l-dashed pl-2 ${className}`}
    >
      {title}
    </div>
  );
};

export default SectionHeader;
