
let Harold = document.querySelector('img');
let sadButton = document.getElementById('sadButton');
let happyButton = document.getElementById('happyButton');
let imageID = 0;
let maxImageID = 3;
let minImageID = 0;


let images = 
{
    0: "./assets/hurt.jpg",
    1: "./assets/HappyDev.jpg ",
    2: "./assets/happy.jpg",
    3: "./assets/GenuinelyHappy.jpg"
};


Harold.onclick = function() 
{
    alert('Ouch! Stop poking me!');
}

happyButton.onclick = function()  
{
    if(imageID<3)
    {
        imageID = imageID +1;
        Harold.src=images[imageID]
    }
}

sadButton.onclick = function()  
{
    if(imageID > 0)
    {
        imageID = imageID - 1;
        Harold.src=images[imageID]
    }
}