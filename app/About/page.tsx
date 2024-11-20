import Navbar from "../component/navbar"
function About(){
    return(
        <div className="p-5 h-screen">
            <Navbar/>
            <div className="grid grid-cols-4 p-5 text-center">
                <section className="p-2 font-bold col-span-4 bg-back2 rounded-3xl">
                    <h3>
                    Graduation from a Commerce stream is a significant milestone in both academic and personal growth. It marks the culmination of years of hard work, dedication, and the acquisition of essential knowledge that will guide the graduate into the next chapter of their life. Here's something that captures the essence of this achievement:
                    </h3>
                    </section>
                   <section className="col-span-1 bg-back2 font-bold p-2 rounded-3xl">
                     <p>
                    currently i m working in pharmaceutical company A career in the pharmaceutical industry is one of profound responsibility, scientific innovation, and meaningful impact. Working in a pharmaceutical company means being part of a team dedicated to improving lives, advancing medical science, and contributing to global health
                    </p>
                    </section>
                    <section className="col-span-3 bg-back2 font-bold p-2 rounded-3xl">
                        <p>
                        Artificial Intelligence (AI) is no longer a concept of the distant future; it is a transformative force that is reshaping industries, revolutionizing everyday life, and altering how we think about problem-solving and creativity. From self-driving cars to personalized medical treatments, AI is making its presence felt across virtually every sector, unlocking new possibilities and raising profound questions about the future of work, ethics, and human interaction with technology.
                        </p>
                    </section>
                    <section className="col-span-4 bg-back2 font-bold p-2 rounded-3xl">
                        i m always open to connect with like- minded professionals and exploring new opportunities for growth and collaboration.
                    </section>

            </div>
        </div>
        
    )
}
export default About