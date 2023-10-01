"use client";

import { IssueRowProps } from "@/types"
import { calculateDate } from "@/utils";
import Image from "next/image"
import { CustomButton, IssueLabel } from ".";
import Link from "next/link";



const IssueRow = ({issue}: IssueRowProps) => {

    const { number, user, state, title, assignee, labels, created_at, comments, html_url } = issue;
    const dateForUser = calculateDate(created_at)



    return(
        <div className="issue-row group">
            <Link href={html_url} passHref className="w-full">
            <div className="issue-row__content">
            <div className="flex items-center">
            <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
            </svg>
            <div className="flex items-center w-5/6 ml-3">
            

                    <h4 className="issue-row__content-title ">
                        {title}
                    </h4>
            </div>

            </div>

            <div className="issue-all-labels flex ">
                {labels.map((label) => {
                    return (
                        <IssueLabel name={label.name} color={label.color}/>
                    )
                })}

                {assignee && assignee.avatar_url.length !== 0 &&             
                <div className="relative  my-3 object-contain">
                    <Image loader={() => assignee.avatar_url } src={assignee.avatar_url} alt="avatar"  width={30} height={30} priority className="object-contain rounded-full"/>
                </div>
                }


                {comments !== 0 && 
                <div className="issue-comment ml-5 pt-3">
                <div className='flex'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                    </svg>
                    <div className="comments">
                    {comments} 
                    </div>
                </div>
                </div>

                }

            </div>
    
            </div>    

            <div className="issue-number-author text-xs mt-5">
                #{number} opened  {dateForUser.time}  {dateForUser.timeTag}  ago  by  {user.login}
            </div>
            

            </Link>
        </div>
    )  
}

export default IssueRow