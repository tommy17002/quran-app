export const  QuranApi = {
    getSurah: async function ()
    {
        try {
            const response = await fetch('https://equran.id/api/surat');
            const data = await response.json();
            // console.log("ghjgjhgj");
            
            // console.log(data);
            return data;
        } catch (err) 
        {
            console.log(err)    
        }
        
    }
}