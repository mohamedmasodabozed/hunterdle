
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear , faCircleInfo  } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";  
export default function Header()
{
    return(
        <header className = {styles.header}>
            <div className="flex flex-row justify-around items-center bg-[#111316]/90 px-4 py-6 text-[#e2e2e6] border-b-2 border-[#424844]">
                <h1 className={`text-3xl font-bold ml-4 tracking-wide ${styles.logo} text-[#adcebd]`}>HUNTERDLE</h1>
                <div className="icons ml-4">
                    <FontAwesomeIcon icon={faGear} className="text-xl ml-8 text-[#c1c8c3]" />
                    <FontAwesomeIcon icon={faCircleInfo} className="text-xl ml-8 text-[#c1c8c3]" />
                </div>
            </div>
        </header>
    );
}