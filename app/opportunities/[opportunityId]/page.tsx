import React from "react";
import opportunities from "@/app/lib/opportunitiesData";
import { useParams, useRouter } from "next/navigation";



const OpportunityDetail = ({params} : {params : {opportunityId : string};}) => {
  return (
    
    <div className="m-16">
      <div className="flex items-center justify-between border rounded-xl border-gray-400 p-4">
        <div className="flex align-center">
          <div className="avatar mx-4">
            <div className="w-20 h-20">
              <img
                className="rounded-full"
                src={opportunities[parseInt(params.opportunityId)].logoLink}
              />
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl font-bold">{opportunities[parseInt(params.opportunityId)].title}</p>
              <p className="text-xs">{opportunities[parseInt(params.opportunityId)].companyName} ~ {opportunities[parseInt(params.opportunityId)].location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="m-2">Bluetooth</div>
          <button className="btn btn-active btn-neutral rounded-full min-w-24 m-2">
            Apply
          </button>
        </div>
      </div>

      <div className="flex items-align justify-between m-2">
        <div>
          <div className="font-bold my-16">Description</div>
          <div className="font-bold my-16">Responsibilities</div>
          <div className="font-bold my-16">Ideal Candidate we want</div>
        </div>
        <div>
          <div className="font-bold my-16">About</div>
          <div className="font-bold my-16">Categories</div>
          <div className="font-bold my-16">Required Skills</div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;
