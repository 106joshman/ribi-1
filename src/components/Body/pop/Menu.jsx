// import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Signup from "../Modal/Signup";

const Menu = (props) => {
//   const [isLogged, setIsLogged] = useState(true);

    if(!props.show) {
        return null
    }
    return (
        <div className="fixed bg-white max-h-screen max-w-full overscroll-none top-0 transition-all bottom-0 left-0 right-0" onClick={props.onClose}>
            <div className="font-poppins w-screen p-6 h-screen" onClick={e => e.stopPropagation()}>
                <div className="flex justify-end">
                    <button
                        className="close-modal-bttn"
                        onClick={props.onClose}
                    >
                        <AiOutlineClose className="text-4xl text-black"/>
                    </button>
                </div>
                <nav className="flex flex-col mx-auto my-ero items-center text-sm">
                    <Link to="/need-blood" 
                        className="rounded-full text-white uppercase bg-thickred text-center py-2.5 w-40 px-5 mx-1 my-10 cursor-pointer" 
                        onClick={props.onClose}>
                        need blood
                    </Link>
                    {/* {isLogged ? ( */}
                    <Link to="/bio" 
                        className="rounded-full text-white uppercase bg-thickred py-2.5 w-40 text-center px-5 mx-1 my-10 cursor-pointer" 
                        onClick={props.onClose}>
                        donate blood
                    </Link>
                    {/* ) : (
                    <Signup />
                    )} */}
                </nav>
            </div>
        </div>
    );
}
 
export default Menu;