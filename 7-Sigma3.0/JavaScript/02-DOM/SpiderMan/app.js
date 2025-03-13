let img = document.getElementsByClassName("oldImg");
for(let i = 0; i < img.length; i++){
    img[i].src="assets/spiderman_img.png";
    console.log(`The image ${i} is changed`);
}