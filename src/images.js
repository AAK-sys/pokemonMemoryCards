// A class that displays 12 images in a page




function displayImage(response) {
    const IMG_URLS = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        1,
        2,
        3
    ];

    

    for (let i = 0; i < IMG_URLS.length; i++) {
        // let imgElement = document.createElement("img");
        // imgElement.setAttribute('src', IMG_URLS[i]);
        // response.send(imgElement);
        let img = '<img class="logo" src=' + IMG_URLS[0] + ' alt="My_Logo">';
        response.send(img);
    };
};

module.exports = { displayImage }