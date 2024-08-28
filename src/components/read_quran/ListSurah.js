function ListSurah({ listSurah }) {
    return (
      <div className="h-full w-full p-4 overflow-y-auto">
        {listSurah && Array.isArray(listSurah) && listSurah.length > 0 ? (
          listSurah.map((surah) => (
            <ItemSurah
              key={surah.nomor} // Key yang unik berdasarkan nomor surah
              nomor={surah.nomor}
              namaSurah={surah.nama_latin}
              artiSurah={surah.arti}
              tempatTurunSurah={surah.tempat_turun}
              jumlahAyat={surah.jumlah_ayat}
            />
          ))
        ) : (
          <p>No Surah available</p> // Pesan fallback jika tidak ada surah yang tersedia
        )}
      </div>
    );
  }
  
  export default ListSurah;
  
  function ItemSurah({ nomor, namaSurah, artiSurah, tempatTurunSurah, jumlahAyat }) {
    return (
      <div className="h-24 w-full border-b-2 border-teal-700 flex mb-4">
        <div className="basis-12 flex justify-end mr-4">
          <h3 className="text-2xl font-bold text-teal-700">{nomor}</h3>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-teal-700">{namaSurah}</h3>
          <h5 className="text-base font-bold text-gray-500">{artiSurah}</h5>
          <span className="text-base font-bold text-gray-500">
            {tempatTurunSurah}, {jumlahAyat} ayat
          </span>
        </div>
      </div>
    );
  }
  