import React, {/* useState */} from 'react';
import profile1 from "../../images/Ellipse.png";
import { AiOutlineClose } from "react-icons/ai";

const DonorInfo = () => {
    // const [show, setShow] = useState(false);

    return (
        <div className="modal fixed h-screen w-screen bg-modal top-0 bottom-0 left-0 right-0">
            <div className="bg-thickred p-5 md:w-3/5 h-screen overflow-y-scroll font-poppins mx-auto">
                <div className="flex justify-end">
                    <button
                        className="close-modal-bttn">
                            <AiOutlineClose className="text-xl text-white"/>
                    </button>
                </div>
                <div className="bg-white my-8 w-4/5 md:w-3/5 rounded-2xl p-5 mx-auto">
                    <p className="underline my-4 text-pryclr text-center text-base">
                        Donor Information 
                    </p>
                    <div className="">
                        <img 
                            className="mx-auto w-1/2 md:max-w-full" 
                            src={profile1} 
                            alt="donor holder" 
                        />
                    </div>
                    <div className="my-5 grid mx-5 grid-cols-2">
                        <p className="">First name:</p>
                        <p className="">Dare</p>
                        <p className="">Last name:</p>
                        <p className="">Fatosho</p>
                        <p className="">Gender:</p>
                        <p className="">Male</p>
                        <p className="">Phone number:</p>
                        <p className="">0901234567789</p>
                        <p className="">Blood Type:</p>
                        <p className="">A+</p>
                        <p className="">Country:</p>
                        <p className="">Nigeria</p>
                        <p className="">State:</p>
                        <p className="">Lagos</p>
                        <p className="">City/Town:</p>
                        <p className="">Ikeja</p>
                    </div>
                    <div className="border border-opacity-50"></div>
                    <div className="my-3 text-center">
                        <button type="reset" className="bg-thickred py-1 px-6 text-white rounded-2xl text-center text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DonorInfo;