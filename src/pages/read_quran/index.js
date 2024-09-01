import { useEffect, useState } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";

function ReadQuran() {
    const [listSurah, setListSurah] = useState([]);
    const [detailSurah, setDetailSurah] = useState({});
    const [randomAyat, setRandomAyat] = useState(null); // State untuk menyimpan ayat acak

    useEffect(() => {
        getSurah();
    }, []);

    async function getSurah() {
        const surah = await QuranApi.getSurah();
        setListSurah(surah);
    }

    async function getDetailSurah(nomor) {
        const detailSurah = await QuranApi.getDetailSurah(nomor);
        setDetailSurah(detailSurah);
    }

    async function getRandomAyat() {
        console.log("Randomize Ayat button clicked"); // Tambahkan log ini
        const randomSurahIndex = Math.floor(Math.random() * listSurah.length);
        const randomSurah = listSurah[randomSurahIndex];
        const detailSurah = await QuranApi.getDetailSurah(randomSurah.nomor);
    
        if (detailSurah && detailSurah.ayat) {
            const randomAyatIndex = Math.floor(Math.random() * detailSurah.ayat.length);
            const ayat = detailSurah.ayat[randomAyatIndex];
            setRandomAyat({ ...ayat, namaSurah: detailSurah.nama_latin });
        }
    }
    

    return (
        <div className="bg-slate-500 flex w-full h-screen">
<LeftSection listSurah={listSurah} getDetailSurah={getDetailSurah} getRandomAyat={getRandomAyat} />
<RightSection detailSurah={detailSurah} randomAyat={randomAyat} />
        </div>
    );
}

export default ReadQuran;
