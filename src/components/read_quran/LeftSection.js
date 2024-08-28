import ListSurah from "./ListSurah";

function LeftSection()
{
    return <div className="bg-slate-300 basis-1/4 flex flex-col">
        {/* text field surah */}
        <InputSearch />

        {/* List nama surah */}
        <ListSurah />
    </div>
}

export default LeftSection

function InputSearch()
{
    return (
    <div className="bg-gray-500 w-full h-24 flex justify-center items-center"> 
        <div className="bg-white w-full mx-4 rounded-xl px-4 py-2 relative"> 
        <img src="search.png" alt="search icon" width={20} height={20} className="absolute top-3 left-2" />
        <input className="w-full h-full py-2 ml-3" placeholder="search surah"/>
        </div>
    </div>
    );
}