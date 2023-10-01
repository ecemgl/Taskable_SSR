"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomSort, SearchLabel } from ".";
import { SearchBarProps } from "@/types";
import Image from "next/image";
import { Router } from "next/router";

const SearchButton = () => (
  <button type="submit" className={`ml-3 z-10 `}>
      <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>  
    </button>
)

const sortOptions = [
  "Newest",
  "Oldest",
  "Most commented",
  "Least commented",
  "Recently updated",
  "Least recently updated"
]


const SearchBar = ({
  options
}: SearchBarProps) => {
    const [label, setLabel] = useState('');
    const [author, setAuthor] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const router  = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      updateSearchParams(author.toLowerCase(),label.toLowerCase(), selectedSort.toLowerCase())
    }

    const updateSearchParams = (author: string, label: string, sort: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if(author) {
          searchParams.set("author", author)
        }
        else{
          searchParams.delete("author")
        }

        if(label) {
          searchParams.set("label", label)
        }
        else{
          searchParams.delete("label")
        }

        if(sort) {

          if(sort === "newest"){
            searchParams.set("sort", "created-desc" )
          }
          if(sort === "oldest"){            
            searchParams.set("sort", "created-asc" )
          }
          if(sort === "most commented"){            
            searchParams.set("sort", "comments-desc" )
          }
          if(sort === "least commented"){            
            searchParams.set("sort", "comments-asc" )
          }
          if(sort === "recently updated"){            
            searchParams.set("sort", "updated-desc" )
          }
          if(sort === "least Recently update"){            
            searchParams.set("sort", "updated-asc" )
          }

        }
        else{
          searchParams.delete("sort")
        }


        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathName)

    }
    return(
      <form className="searchbar" onSubmit={handleSearch}> 
        <div className="searchbar__item">
            Label: 
            <SearchLabel label={label} setLabel={setLabel} options={options}/>
        </div>
        <div className="searchbar__item">
          Author: 
          <input 
          type="text" 
          name="author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Author" 
          className="searchbar__input"/>

          <CustomSort title="sort" options={sortOptions} setSelectedSort={setSelectedSort} />
        </div>
        <SearchButton/>
      </form>
    )
    
}

export default SearchBar