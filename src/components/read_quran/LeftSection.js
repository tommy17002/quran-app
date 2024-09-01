import { useState } from "react";
import ListSurah from "./ListSurah";

function LeftSection({ listSurah, getDetailSurah, getRandomAyat }) {
    const [search, setSearch] = useState('');
    const [listSurahBaru, setListSurahBaru] = useState([]);

    function onchangeHandler(e) {
        setSearch(e.target.value);

        if (search.length > 1) {
            const listSurahTemp = listSurah.filter((surah) => surah.nama_latin.toLowerCase().includes(search.toLowerCase()));
            setListSurahBaru(listSurahTemp);
        }
    }

    return (
        <div className="bg-white basis-1/4 flex flex-col">
            <div className="flex w-full h-24">
                <div className="bg-gray-500 w-2/3 h-full flex justify-center items-center">
                    <InputSearch value={search} onChange={onchangeHandler} />
                </div>
                <div className="bg-gray-500 w-1/3 h-full flex justify-center items-center">
                    <button 
                        className="bg-teal-700 text-white px-4 py-2 rounded-xl" 
                        onClick={() => {
                            console.log("Randomize Ayat Button Clicked");  
                            getRandomAyat();  
                        }}>
                        Randomize Ayat
                    </button>
                </div>
            </div>
            <ListSurah listSurah={search.length > 1 ? listSurahBaru : listSurah} getDetailSurah={getDetailSurah} />
        </div>
    );
}

export default LeftSection;

function InputSearch({ value, onChange }) {
    return (
        <div className="bg-white w-full h-2/4 mx-4 rounded-xl px-4 py-2 relative">
            <img src="search.png" alt="search icon" width={20} height={20} className="absolute top-3 left-2" />
            <input className="w-full h-full py-2 ml-3" placeholder="search surah" value={value} onChange={(e) => onChange(e)} />
        </div>
    );
}
