import Navbar from "@/components/Navbar";
import { supabase } from "@/supabase";
import * as marked from "marked";
import { useEffect, useState } from "react";
import {
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoTailwindCss,
    BiLogoFigma,
    BiLogoRedux,
    BiDownload
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const About = () => {
    const [about, setAbout] = useState();

    useEffect(() => {
        async function getProjects() {
            const { data, error } = await supabase
                .from('about')
                .select('*');
            if (error) {
                console.error(error);
            }
            else {
                setAbout(data[0].about);
            }
        }

        getProjects();
    }, []);
    console.log(about)


    return (
        <main>
            <Navbar />
            <section className="mt-28">
                <h1>About</h1>

                <section className="mt-10">
                    <div className="text-2xl font-bold text-center md:text-left">Technologies</div>
                    <section className="flex items-center justify-center mt-4 gap-4 md:justify-start">
                        <BiLogoHtml5 size="40" />
                        <BiLogoCss3 size="40" />
                        <BiLogoTailwindCss size="40" />
                        <BiLogoJavascript size="40" />
                        <BiLogoTypescript size="40" />
                        <BiLogoReact size="40" />
                        <TbBrandNextjs stroke-width="1" size="40" />
                        <BiLogoRedux size="40" />
                        <BiLogoFigma size="40" />
                    </section>
                </section>

                <div className="about mt-10 grid gap-4" dangerouslySetInnerHTML={{
                    __html: marked.parse(about ? about : "")
                }}></div>
            </section>

            <Button className='fixed right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-5 w-[180px] '>
                <a className='flex gap-2 items-center' href="/resume2023n.pdf" target='_blank'>
                    <BiDownload size="20" />
                    Download resume
                </a>
            </Button>
        </main>
    )
}

export default About;