
import { Link } from 'react-router-dom';
import error from '../../images/error.png';
import style from './style.module.css'

const ErrorPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.errImage}>
                <img src={error} alt="Error Doctor" srcset="" />
            </div>
            <div className={style.errText}>
                <h3 className={style.errHead}>
                    OOPS! PAGE NOT FOUND.
                </h3>
                <p className={style.errSmall}>
                    You must have picked the wrong page because I haven't been able to connect to the page which you have requested for.
                </p>
                <div className={style.homeBttn}>
                    <Link to="/home" className={style.bttnLink}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;