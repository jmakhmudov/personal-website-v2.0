import { UUID } from "crypto";

export interface Project {
    id: UUID,
    created_at: string,
    title: string,
    description: string,
    image_url: string,
    github_url: string,
    website_url: string,
    status: boolean,
    badges: string
}