import React from "react";
import OpportunityCard from "../components/OpportunityCard";
import Link from "next/link";
import opportunities from "../lib/opportunitiesData";

const OpportunitiesList = () => {
  return (
    <div className="mx-24 my-24">
      <div className="text-xl font-bold mx-8">Opportunities</div>
      <div className="flex justify-between items-center mx-8">
        <p className="text-xs">Showing 72 results</p>
        <div className="dropdown dropdown-bottom dropdown-end flex items-center">
          <p className="text-xs">Sort by:</p>
          <div tabIndex={0} role="button" className="btn m-1 ">
            <p className="font-bold text-xs">Most Relevant</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Most Relevant</a>
            </li>
            <li>
              <a>Recently Posted </a>
            </li>
          </ul>
        </div>
      </div>

       { 
       opportunities.map((opportunity, index) =>
             (
                <Link href={`opportunities/${index}`} key={index}>
                    <OpportunityCard
                        companyName={opportunity.companyName}
                        detail={opportunity.detail} 
                        title={opportunity.title}
                        labels={opportunity.labels}
                        location={opportunity.location}
                        logoLink={opportunity.logoLink}
                    />
                </Link>
            ))
        
        }
    
      




    </div>
  );
};

export default OpportunitiesList;