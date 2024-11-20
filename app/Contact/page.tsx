import Navbar from "../component/navbar"
function Contact(){
    return(
        <div className="p-5">
            <Navbar/>
            <div className="flex">
                <h1 className="flex flex-col justify-center text-4xl font-bold text-center p-5 text-orange-600">
                    Get in Touch
                </h1>
                <div className="flex flex-col gap-10 p-9">
                    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-regular fa-envelope text-5xl text-red-600">
                    </i><a href="mailto:azeemaziz75@gmail.com">azeemaziz75@gmail.com</a>

                    </section>
                    <section className="flex gap-5 justify-start items-center font-bold"><i className="fas-fa-map-marker-alt text-5xl text-red-600"></i>House#B-507 Sector 10-L Hanifabad Orangi Town No # 10 Karachi,

                    </section>
                    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-solid fa-phone text-5xl text-blue-700"></i>0344-2820633</section>

                    <section className="flex gap-5 justify-start items-center font-bold"></section><i className="fa-brands fa-linkedin text-5xl text-blue-800"></i><a href="http://www.likedin.com/in/azeem-aziz-7215b1315" target="-blank">Azeem Aziz</a>
                </div>
            </div>

        </div>
    )
}
export default Contact