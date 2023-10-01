'use client'

import { SearchLabelProps } from "@/types"
import Image from "next/image"
import { Combobox, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"

const SearchLabel = ({
    label,
    setLabel,
    options
}: SearchLabelProps) => {
    const [query, setQuery] = useState('');

    const filteredLabels = query === '' ?
    options : options.filter((item: string) => (
      item.toLowerCase()
      .replace(/\s+/g,"")
      .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

    return(
      <div className="search-label">
        <Combobox value={label} onChange={setLabel}>
          <div className="relative w-full z-10 bg-white">
            <Combobox.Button className="top-[14px] w-[100%]">
              <Combobox.Input 
              className="search-label__input"
              placeholder="label"
              displayValue={(label : string) => label}
              onChange={(e) => setQuery(e.target.value)}/>

              <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
              >

              <Combobox.Options  className="absolute bg-white mt-4 w-[100%]">
                {filteredLabels.length === 0 && query !=='' ? (
                  <Combobox.Option
                  value={query}
                  className="search-label__option"
                  >
                    Can't find the label!
                  </Combobox.Option>
                ):
                filteredLabels.map((item) =>(
                  <Combobox.Option
                  key={item}
                  className={({active}) => `relative search-label__option ${active ? 'bg-primary-pink text-white' : 'text-gray-900'}`}
                  value={item}>
                    {({selected,active}) => (
                      <>
                      <span className={`block truncate ${selected ? 'font-medium ': 'font-normal'}`}>
                      {item}
                      </span>
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>

                        </span>
                      ) : null}
                      </>
                    )}

                  </Combobox.Option>
                ) )
              
              }
              </Combobox.Options>

              </Transition>
            </Combobox.Button>
          </div>
        </Combobox>
      </div>
    )
    
}

export default SearchLabel