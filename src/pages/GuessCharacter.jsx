import Header from "../components/shared/Header";
import  GuessedCharacterAvatar from "../components/GuessedCharchterAvatar";
import SearchGuessedCharchter from "../components/SearchGuessedCharchter";
export default function GuessCharacter()
{
    return(
        <div className="guess-character">
            <Header/>
            <GuessedCharacterAvatar/>
            <SearchGuessedCharchter />
        </div>
    )
}