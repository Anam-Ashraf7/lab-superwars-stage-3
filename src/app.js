const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let isHero = true;
    // Instead of forloop use Map method
    // Code here
    let detailedPlayers = players.map(function(player,index){
       const detailedPlayer = {
            name: player,
            image: "images/super-"+(index+1)+".png",
            strength: getRandomStrength(),
            type: isHero ? "hero" : "villain",
        }
        isHero = !isHero;
        return detailedPlayer;
    })

    return detailedPlayers;

}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = ''

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    let heroes = players.filter(function(player){
        return player.type === "hero";
    })

    let villains = players.filter(function(player){
        return player.type === "villain";
    })

        if (type === "hero"){
            fragment = heroes.map(function(player){
                return`
                <div class="player">
                    <img src="${player.image}">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>
            `;
            })
            
        } else if (type === "villain"){
            fragment = villains.map(function(player){
                return`
                <div class="player">
                    <img src="${player.image}">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>
            `;
            })
        }

        return fragment.join("\n");
    }



// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}