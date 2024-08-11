export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45382616-eef454aa9f55e96f1e1457a58";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
