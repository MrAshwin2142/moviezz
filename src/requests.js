const APIKEY = "248f247f07d47677417f514199793337";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&lanuage=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&lanuage=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}
export default requests;