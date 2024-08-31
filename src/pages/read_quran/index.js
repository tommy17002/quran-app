import { useEffect, useState } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";

function ReadQuran() {
    const [listSurah, setListSurah] = useState([]);
    const [detailSurah, setDetailSurah] = useState({});

    useEffect(() => {
        getSurah();
    }, []);

    async function getSurah() {
        const surah = await QuranApi.getSurah();
        console.log("Data surah yang diterima:", surah); // Tambahkan log
        setListSurah(surah);
    }

    async function getDetailSurah(nomor) {
        console.log(typeof getDetailSurah); // Harusnya "function"
        const detailSurah = await QuranApi.getDetailSurah(nomor);
        setDetailSurah(detailSurah);
        console.log(detailSurah);
    }       

    return (
        <div className="bg-slate-500 flex w-full h-screen">
            {/* Bagian kiri */}
            <LeftSection listSurah={listSurah} getDetailSurah={getDetailSurah} />

            {/* BAGIAN KANAN */}
            <RightSection />
        </div>
    );
}

export default ReadQuran;
