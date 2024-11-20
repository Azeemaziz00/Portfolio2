import Link from "next/link"
function Navbar(){
    return(
        <div>
  <ul className="flex justify-end gap-5 text-white bg-slate-700 p-3 font-bold  ">
  
    <li className="hover: text-slate-400 text-xl"><Link href="\">Home</Link></li>
    <li className="hover: text-slate-400 text-xl"><Link href="\About">About</Link></li>
    <li className="hover: text-slate-400 text-xl"><Link href="\Skills">Skills</Link></li>
    <li className="hover: text-slate-400 text-xl"><Link href="\Portfolio">Portfolio</Link></li>
    <li className="hover: text-slate-400 text-xl"><Link href="\Contact">Contact</Link></li>
    </ul>
    
    </div>
    )
}
export default Navbar