function RightSection({ detailSurah, randomAyat }) {
    function isNotEmpty() {
        return Object.keys(detailSurah).length > 0;
    }

    return (
        <div className="bg-white basis-3/4 flex flex-col">
            {randomAyat ? (
                <div className="p-6">
                    <h3 className="text-3xl font-bold text-teal-700">
                        {randomAyat.namaSurah} Ayat {randomAyat.nomor}
                    </h3>
                    <p className="text-xl my-4">{randomAyat.ar}</p>
                    <p className="text-base text-gray-600">{randomAyat.idn}</p>
                </div>
            ) : isNotEmpty() ? (
                <>
                    <HeaderSection namaSurah={detailSurah.nama_latin} />
                    <div className="h-full w-full overflow-y-auto">
                        {detailSurah.ayat.map((data, index) => (
                            <ItemAyat key={index} ayat={data.ar} nomorAyat={data.nomor} artiAyat={data.idn} />
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default RightSection;

function HeaderSection({ namaSurah }) {
    return (
        <div className="h-[95px] w-full flex justify-between items-center px-8 border-b border-gray-200">
            <h3 className="text-3xl font-bold text-teal-700">{namaSurah}</h3>
            <img src="volume.png" alt="volume.png" height={30} width={30} />
        </div>
    );
}

function ItemAyat({ ayat, nomorAyat, artiAyat }) {
    return (
        <div className="w-full px-6 py-4 border-b border-gray-200">
            <div className="w-full h-full flex justify-end mb-4">
                <h3 className="text-xl font-bold ">{ayat}</h3>
            </div>
            <span className="text-sm font-light">{nomorAyat}. {artiAyat}</span>
        </div>
    );
}
