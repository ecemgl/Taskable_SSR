"use client";

import Image from "next/image"
import { CustomButton } from "."

const Taskable = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }
    return (
        <div className="taskable">
            <div className="flex-1 pt-22 padding-x">
                <div className="taskable__title">
                    Organize, filter and sort your Github tasks easily !
                </div>

                <p className="taskable__subtitle">
                    We have listed your github tasks in a table for you. Now you can filter them by the Author and Labels. 
                    Also you can sort the issues by creation date, number of comments, and modified date. 
                </p>

                <CustomButton
                  title="See the issues"
                  containerStyles="bg-primary-pink text-white rounded-full mt-10"
                  handleClick={handleScroll}
                />

                <div className="taskable__image-container">
                    <div className="taskable__image">
                        <Image src="/taskable.png" alt="taskable" width={600} height={600} className="relative h-auto w-auto mx-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taskable