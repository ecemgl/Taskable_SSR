"use client";

import { CustomSortProps } from "@/types"
import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { CustomButton } from ".";
import { Listbox, Transition } from "@headlessui/react";


const CustomSort = ({
    title,
    options,
    setSelectedSort
}: CustomSortProps) => {
    const[selected, setSelected] = useState("");

    useEffect(() => {
        setSelectedSort(selected);
    }, [selected])
    
    return(
        <div className="w-fit bg-primary-pink ml-10 mr-2 mt-2 mb-2">
           <Listbox
           value={selected}
           onChange={(e) => setSelected(e)}>
            <div className="relative w-[250px] z-10 bg-white">
                <Listbox.Button className='custom-btn flex w-[250px]'>
                    <span className="block truncate">{selected.length === 0 ? title : selected}</span>
                    <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 14 8">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                    </svg>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options className="absolute bg-white mt-4 w-[100%]">
                    {options.map((option) => 
                        <Listbox.Option
                        key={option}
                        value={option}
                        className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-pink' : 'text-gray-900'}`}>
        
                            {({selected}) => 
                                <span>
                                    {option}
                                </span>
                            }
                        </Listbox.Option>
                    )}
                </Listbox.Options>
                </Transition>
            </div>
           </Listbox>
        </div>

    )
    
}

export default CustomSort