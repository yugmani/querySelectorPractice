var imgTags = document.querySelectorAll("img");
var aTags = document.querySelectorAll("a");
var h4Tags = document.querySelectorAll("h4");

for (var i=0; i<imgTags.length; i++){
    imgTags[i].setAttribute("src", "images/image_"+(i+1)+".jpg");
}

const sites = [
    "https://www.w3schools.com/",
    "https://developer.mozilla.org/en-US/",
    "https://stackoverflow.com/"
]


    aTags[0].setAttribute("href", sites[0]);
    aTags[1].setAttribute("href", sites[1]);
    aTags[2].setAttribute("href", sites[2]);

const colors = [
    "#A52A2A",
    "#8A2BE2",
    "#FFD700"
]

for(var i=0; i<h4Tags.length; i++){
    h4Tags[i].setAttribute("style", "background-color:"+colors[i]+"; padding:10px");
}

