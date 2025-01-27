 
import { CiSearch } from "react-icons/ci";
 import Image from "next/image";
 import profile from '/public/assets/profile.png'
const Navbar = () => {
    return(
        <div className="max-w-screen-2xl mx-auto py-5">
             <div className="flex justify-between items-center font-inter">
                <h1 className="text-2xl font-bold ">Dua Page</h1>
               
                <div className="flex items-center justify-between -mr-[340px] border w-96 px-2 py-1 bg-white rounded-lg">
                    <input className="outline-none border-none font-light placeholder:text-sm" type="text" placeholder="Search by Dua Name"/>
                    <CiSearch className="bg-gray-100 text-gray-600 rounded-lg p-2 w-12 h-10"/>
                </div>
                <div className="flex justify-center items-center gap-2">
                <Image src={profile}/>
                    <select className="bg-transparent w-5 outline-none  border-none">
                        <option value="support us"></option>
                        <option value="support us">Support Us</option>
                        <option value="download dua">Download Dua</option>
                        <option value="support us">Support Us</option>
                        <option value="support us">Support Us</option>
                        <option value="support us">Support Us</option>
                        <option value="support us">Support Us</option>
                    </select>
                   
                </div>
             </div>
        </div>
    )}
export default Navbar;