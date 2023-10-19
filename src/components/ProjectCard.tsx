import { Project } from "@/types/project";
import { Button } from "./ui/button";

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {


    return (
        <section className="">
            <img className="" src={project.image_url} alt={project.title} />

            <section className="mt-4">
                <section className="mb-4">
                    <div className="text-xl font-bold">{project.title}</div>
                    <p className="opacity-50 truncate text-ellipsis w-[250px]">{project.description} sdfsfdsfdsfdsfsdfsdfd asdfadfasdfasdfasdf sdfsdfsdfsdfd</p>
                </section>
                <Button variant={"outline"}>More</Button>
            </section>

        </section>
    )
}

export default ProjectCard;