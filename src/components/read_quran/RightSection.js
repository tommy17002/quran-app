function RightSection()
{
    return (
        <div className="bg-white basis-3/4 flex flex-col">
            <HeaderSection />

            {/* List ayat */}
            <div className="h-full w-full">
                <ItemAyat/>
            </div>
        </div>
    )
}

export default RightSection

function HeaderSection()
{
    return (
        <div className="h-[95px] w-full flex justify-between items-center px-8 border-b border-gray-200">
                <h3 className="text-3xl font-bold text-teal-700">Nama Surah</h3>
                <img src="volume.png" alt="volume.png" height={30} width={30} />
            </div>
    )
} 

function ItemAyat()
{
    return (
        <div className="w-full px-6 py-4 border-b border-gray-200">
            <div className="w-full h-full flex justify-end mb-4">
                <h3 className="text-xl font-bold ">Ayat</h3>
            </div>
            <span className="text-sm font-light">Arti Ayat</span>
        </div>
    )
}