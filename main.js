let videoImgURL = handleImg(handleID('https://www.youtube.com/watch?v=Y5KWxCAwpNE'))

console.log(videoImgURL)

function handleID(URL) {
    let videoID
    
    if (URL.indexOf('v=')>0) {
        videoID = URL.split('v=')[1].substring(0, 11)
    } else {
        videoID = URL.split('be/')[1].substring(0, 11)
    }
    
    return videoID
}

function handleImg(ID) {
    let videoImgURL = `https://i.ytimg.com/vi/${ID}/hqdefault.jpg`
    
    return videoImgURL
}