"use client";

import { IssueLabelsProps } from "@/types";
import Image from "next/image"

const IssueLabel = ({
    name,
    color
} : IssueLabelsProps) => {

    return (
       <div className={`custom-btn bg-[#${color}] text-white rounded-full text-xs ml-1`} style={{backgroundColor:`#${color}`}}>
        {name}
       </div> 
    )
}

export default IssueLabel