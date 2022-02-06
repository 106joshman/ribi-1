import { Link } from 'react-router-dom';
import error from '../images/error.png';

const ErrorPage = () => {
    return (
        <div className=" py-5 flex flex-row font-poppins justify-between w-3/4 md:w-4/5 mx-auto">
            <div className="hidden md:flex">
                <img src={error} alt="" srcset="" />
            </div>
            <div className="error text-center md:text-left md:px-5 w-3/4 md:w-ero md:m-auto">
                <h3 className="error text-4xl my-10 font-bold">
                    OOPS! PAGE NOT FOUND.
                </h3>
                <p className="error-msg text-base my-5">
                    You must have picked the wrong page because I haven't been able to connect to the page which you have requested for.
                </p>
                <div className="bttn my-8">
                    <Link to="/home" className="rounded-2xl cursor-pointer text-white bg-thickred py-2 px-6 border-2">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default ErrorPage;