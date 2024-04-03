
async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:8080/myData');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("出错了，" + error);
        throw error;
    }
}
export default fetchMovies;