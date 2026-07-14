
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear , faCircleInfo  } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";  
export default function Header()
{
    return(
        <header className = {styles.header}>
            <div className="flex flex-row justify-around items-center bg-black/50 px-4 py-6 text-white">
                <h1 className={`text-3xl font-bold ml-4 tracking-wide ${styles.logo}`}>HUNTERDLE</h1>
                <div className="icons ml-4">
                    <FontAwesomeIcon icon={faGear} className="text-xl ml-8" />
                    <FontAwesomeIcon icon={faCircleInfo} className="text-xl ml-8" />
                </div>
            </div>
        </header>
    );
}