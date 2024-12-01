import React from 'react';

const WorkItem = ({ image, title, year, category, description }) => {
  return (
    <article className="mt-7 w-full max-w-[820px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={image} alt={title} className="object-contain grow w-full rounded-md aspect-[1.37] max-md:mt-5" />
        </div>
        <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-slate-800 max-md:mt-5 max-md:max-w-full">
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="flex gap-7 items-start mt-3 text-xl whitespace-nowrap text-slate-400">
              <span className="flex shrink-0 mt-1 rounded-2xl bg-blue-950 h-[25px] w-[62px]">{year}</span>
              <span>{category}</span>
            </div>
            <p className="self-stretch mt-6 text-base max-md:max-w-full">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkItem;