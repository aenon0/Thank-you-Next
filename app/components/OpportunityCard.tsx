import React from "react";
import opportunities from "../lib/opportunitiesData";

interface Props {
  companyName: string;
  detail: string;
  title: string;
  labels: Array<string>;
  location: string;
  logoLink: string;
  // https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg
}

const OpportunityCard = ({
  companyName,
  detail,
  title,
  labels,
  location,
  logoLink,
}: Props) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 px-8 m-6">
      <div className="flex">
        <div className="avatar mx-4">
          <div className="w-42 h-24 my-3">
            <img className="rounded-full" src={logoLink} />
          </div>
        </div>
        <div className="p-2">
          <div className="font-bold">{title}</div>
          <div className="text-xs py-2 flex">
            <p>{"School under the trees" + " ~  "}</p>
            <p>{location}</p>
          </div>
          <div>{detail}</div>
          <div className="flex text-xs py-2">
            {labels.map((label, index) => (
              <p className="text-center min-w-16 m-2 text-blue-400 rounded-full border-2 border-blue-400 px-2 py-3">
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;
