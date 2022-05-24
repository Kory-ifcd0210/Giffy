const apiKey= 'iKAWsPav1HKNawJ6b2gp4vSxiGR6oND6'

export default function getGifs({keyword="random"}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const {data} = response
        const gifs = [];
        data.map(image =>{
            const {images, title, id} = image
            const { url } =  images.downsized_medium
            gifs.push({title, id, url});
        })
        return gifs
    })
}