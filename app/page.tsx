import Navbar from "./component/navbar"
import Image from "next/image"
function Home(){
  return(
<div>
  <Navbar/>
  <div className="bg-slate-700 mt-5 text-white p-12 text-left ">
    <h1 className="text-lg font-semibold">Hi,it's Me</h1>
    <h1 className="text-5xl font-bold mt-2 ">I'm <p className="text-orange-600 shadow-black">Azeem Aziz</p></h1>
    <p className="font-bold justify-center mt-2 ">I'm a professional web developer & medical sales officer in SAMI pharmaceutical company<br />i m currently student of Governer initiative for Artificial intelligence, web 3.0 mataverse.<br /> solutions</p>
    <section>
    <Image src={"/image.png"} width={600} height={600} alt="image" className=" rounded-full drop-shadow-2xl   "/>
  </section>
  </div>

</div>

  )
}
export default Home