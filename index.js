let Harold = document.querySelector("img");
let sadButton = document.getElementById("sadButton");
let happyButton = document.getElementById("happyButton");
let imageID = 0;
let maxImageID = 3;
let minImageID = 0;

let images = {
  0: "https://www.postavy.cz/foto/109674-harold-foto.jpg",
  1: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2b22a3844e99d6545ff36350b836218742118554_full.jpg",
  2: "https://s.tcdn.co/f4e/997/f4e99785-cdf0-34dd-b279-d5313bc7a155/192/2.png",
  3: "https://s.tcdn.co/f4e/997/f4e99785-cdf0-34dd-b279-d5313bc7a155/192/9.png"
};

Harold.onclick = function() {
  alert("Ouch! Stop poking me!");
};

happyButton.onclick = function() {
  if (imageID < 3) {
    imageID = imageID + 1;
    Harold.src = images[imageID];
  }
};

sadButton.onclick = function() {
  if (imageID > 0) {
    imageID = imageID - 1;
    Harold.src = images[imageID];
  }
};
