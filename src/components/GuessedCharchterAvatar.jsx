import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import styles from "./GuessedCharchterAvatar.module.css";
export default function GuessedCharacterAvatar()
{
    return(
        <main className="flex flex-col items-center justify-center "> 
<div className="avatar flex items-center justify-center mt-12">
    <div className="icon bg-[#1e2023]/90 w-[15rem] h-[15rem] rounded-full relative flex items-center justify-center border border-[#424844]">
        <FontAwesomeIcon icon={faBullseye} className="text-[#adcebd] text-6xl  " />
    </div>
</div>
    <div className={`${styles.iconText} text-[#adcebd] opacity-90 text-lg font-semibold mt-4 `}>
        Target Unknown: Identify Character
    </div>

        </main>

    )
}