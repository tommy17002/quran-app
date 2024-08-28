export const QuranApi = {
    getSurah: async function () {
        try {
            const response = await fetch('https://equran.id/api/surat');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Pastikan data adalah array seperti yang diharapkan
            if (Array.isArray(data)) {
                return data;
            } else {
                console.error("Unexpected data format:", data);
                return [];
            }
        } catch (err) {
            console.error("Failed to fetch surah:", err);
            return []; // Kembalikan array kosong jika terjadi kesalahan
        }
    }
}
