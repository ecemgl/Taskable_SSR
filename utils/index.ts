import { DateForUser, FilterProps } from "@/types";

export async function fetchIssues(filters : FilterProps) {
    const {label, author, sort} = filters;

    const response = await fetch(`https://api.github.com/repos/facebook/react/issues?labels=${label}&user=${author}&sort=${sort}`);
    const result = response.json();
    return result;
}

export async function fetchLabels() {
    const response = await fetch(`https://api.github.com/repos/facebook/react/labels`);
    const result = response.json();
    return result;
}

export const calculateDate = (date: string) : DateForUser => {

    var hour,day,week,mounth,year = 0;
    var date1 = new Date(date);
    var date2 = new Date();

    var diff = date2.getTime() - date1.getTime();

    var msec = diff;

    hour = Math.floor(msec / 1000 / 60 / 60);

    if(hour >= 24) day = hour / 24;
    else return {time: Math.trunc(hour)  , timeTag:"hours"};

    if(day >= 7) week = day / 7;
    else return {time: Math.trunc(day) , timeTag:"days"};

    if(week >= 4) mounth = week / 4;
    else return {time: Math.trunc(week) , timeTag:"weeks"};

    if(mounth >= 12) year = mounth / 12;
    else return {time: Math.trunc(mounth), timeTag:"mounths"};
    
    return {time: Math.trunc(year) , timeTag:"years"}

}

export const updateSearchParams = (type: string , value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}