import { Project } from "@/types/project";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (
        <section>
            <img className="rounded-lg border-white border-2" src={project.image_url} alt={project.title} />

            <section className="mt-4">
                <section className="mb-4">
                    <Badge
                        variant={"outline"}
                        className={`${project.status ? "bg-green-500" : "bg-red-500"} bg-opacity-50 mb-4`}
                    >
                        {project.status ? "Active" : "Inactive"}
                    </Badge>
                    <div className="font-syne text-xl font-extrabold">{project.title}</div>
                </section>

                <div>
                    <Button variant={"outline"} disabled={!project.status}>
                        <a href={project.website_url} target="_blank">
                            Visit
                        </a>
                    </Button>
                    <Button variant={"link"} asChild>
                        <a href={project.github_url} target="_blank">
                            Go to repository
                        </a>
                    </Button>
                </div>
            </section>

        </section>
    )
}

export default ProjectCard;