import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error text-center font-poppins max-h-screen my-5 px-10">
            <h3 className="error text-pryclr text-8xl my-8 font-bold">
                Oops!
            </h3>
            <p className="404 uppercase font-semibold text-base">
                404 -page not found
            </p>
            <p className="error-msg text-sm my-3">
                The page you are looking for was removed, renamed or might never existed
            </p>
            <Link to="/home" className="rounded-full cursor-pointer text-white uppercase bg-thickred py-2 px-6 border-2">
                go to home
          </Link>
        </div>
    );
}
 
export default ErrorPage;