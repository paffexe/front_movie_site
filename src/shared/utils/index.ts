

export const createImageUrl = (path:string | null) => {
    if(path){
        return `https://image.tmdb.org/t/p/original${path}`
    }
    return "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
}