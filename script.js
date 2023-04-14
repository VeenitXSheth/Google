const feelingValues = ["I'm Feeling Lucky", "I'm Feeling Hungry", "I’m Feeling Doodly", "I’m Feeling Playful", "I’m Feeling Artistic", "I’m Feeling Puzzled", "I’m Feeling Trendy", "I’m Feeling Stellar", "I’m Feeling Wonderful"];

const feelingBtn = document.getElementById('feeling-btn');
feelingBtn.addEventListener('mouseenter', function() {

    const random = Math.floor(Math.random() * feelingValues.length);
    console.log(random, feelingValues[random]);

    feelingBtn.innerText = feelingValues[random];
    
});

feelingBtn.addEventListener('mouseleave', function() {

    feelingBtn.innerText = "I'm Feeling Lucky";
    
});

const searchbar = document.querySelector('input');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', function() {

    const userClient = navigator.userAgent;
    console.log(userClient);

    const search = searchbar.value;

    location.href = `https://www.google.com/search?q=sample+search&oq=sample+search&aqs=chrome..69i57j0i512l9.1809j0j7&sourceid=chrome&ie=UTF-8`;
    
})