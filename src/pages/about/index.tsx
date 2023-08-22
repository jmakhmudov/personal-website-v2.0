import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <main>  
            <Navbar />
            <section className="mt-28">
                <Button variant="outline">aboout</Button>
            </section>
        </main>
    )
}

export default About;