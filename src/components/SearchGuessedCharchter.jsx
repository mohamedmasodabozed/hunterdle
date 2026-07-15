import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchGuessedCharacter() {
    return(
        <div className="search  flex  items-center justify-center mt-12">
            <div className="search-container flex items-center justify-center gap-4 w-[35%] bg-[#1e2023]/90 p-6 rounded-lg shadow-md">
                <input type="text" placeholder="Search Character" className="search-input w-full border-none outline-none text-[#adcebd]/90 text-xl "/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#adcebd] opacity-90 text-lg" />
            </div>
        </div>
    )
}