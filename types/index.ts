import React from "react"
import { MouseEventHandler } from "react"


export interface CustomButtonProps {
    title: string,
    containerStyles? : string,
    handleClick? : MouseEventHandler<HTMLButtonElement>
}

export interface SearchLabelProps {
    label: string,
    setLabel: (title: string) => void,
    options: string[]

}

export interface SearchBarProps {
    options: string[]
}

export interface CustomSortProps {
    title: string,
    options: string[],
    setSelectedSort: (value: string) => void
}


export interface User {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}

export interface Label{
    id: number,
    node_id: string,
    url: string,
    name: string,
    color: string,
    default: boolean,
    description: string
}

export interface Reaction{
    url: string,
    total_count: number,
    "+1": number,
    "-1": number,
    laugh: number,
    hooray: number,
    confused: number,
    heart: number,
    rocket: number,
    eyes: number
}

export interface Issue {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string,
    number: number,
    title: string,
    user: User,
    labels: Label[],
    state: string,
    locked: boolean,
    assignee: User,
    assignees: User[],
    milestone: string,
    comments: number,
    created_at: string,
    updated_at: string,
    closed_at: string,
    author_association: string,
    active_lock_reason: string,
    body: string,
    reactions: Reaction,
    timeline_url: string,
    performed_via_github_app: string,
    state_reason: string
}

export interface IssueRowProps {
    issue: Issue
}

export interface DateForUser {
    time: number,
    timeTag: string
}

export interface IssueLabelsProps {
    name: string,
    color: string
}

export interface FilterProps {
    label: string;
    author : string;
    sort: string;

}