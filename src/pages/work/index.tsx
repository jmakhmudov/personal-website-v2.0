import Navbar from "@/components/Navbar";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";

const renderSkeleton = () => {


    return (
        <>
            <Skeleton className="w-full h-40"/>
        </>
    )
}

const Work = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function getProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*');

            if (error) {
                console.error(error);
            }
            else {
                setProjects(data.reverse());
            }
        }

        getProjects();
    }, [])

    return (
        <main>
            <Navbar />
            <section className="mt-28">
                <h1>Work</h1>

                <section className="grid gap-14 mt-20">
                    {
                        projects.length ?
                            projects.map((project) =>
                                <ProjectCard key={project.id} project={project} />
                            )
                            : Array.from({ length: 3 }).map((el, i) => <div key={i}>{renderSkeleton()}</div>)
                    }
                </section>
            </section>
        </main>
    );
}

export default Work;