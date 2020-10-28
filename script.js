// Starting point for scene.
let currentScene = 0

// Items
const items = {}

// Starts the game
window.onload = presentScene;


// All scenes
const scenes = [
    {
        // 0 - Start
        text: 'Du har precis vaknat och inser att du befinner dig i ett okänt rum. Framför dig ligger en lapp.',
        options: ['Plocka upp lappen', 'Strunta i lappen'],
        nextScene: [1, 1]
    },
    {
        // 1 - First option
        text: 'Lappen fattade eld och försvann upp i rök. Du kollar förvirrat runt i rummet efter en möjlig utväg. Du väljer att gå fram till...',
        options: ['Dörren', 'Spegeln', 'Tavlan', 'Gardinen'],
        nextScene: [3, 4, 6, 8]
    },
    {
        // 2 - scene zero
        text: 'Du väljer att gå fram till...',
        options: ['Dörren', 'Spegeln', 'Tavlan', 'Gardinen'],
        nextScene: [3, 4, 6, 8]
    },
    {
        // 3 - Door
        text: 'Du försöker öppna dörren men upptäcker att den är låst.',
        options: ['Leta vidare'],
        nextScene: [2]
    },
    {
        // 4 - Mirror
        text: 'Du blir lättad när du känner igen din egen spegelbild. Men vad är det där?',
        options: ['Titta närmre i spegeln', 'Strunta i det och leta vidare'],
        nextScene: [5, 2]
    },
    {
        // 5 - Reflection
        text: 'Du lutar dig fram mot spegeln och upptäcker något svart på halsen. Det står 491.',
        options: ['Leta vidare'],
        nextScene: [2]
    },
    {
        // 6 - Painting
        text: 'Du går fram till tavlan i hopp om att hitta en ledtråd ut. Målningen är abstrakt, svårtolkad och ger inga ledtrådar.',
        options: ['Plocka ner tavlan irriterat', 'Leta vidare'],
        nextScene: [7, 2]
    },
    {
        // 7 - Move painting
        text: 'När du plockar ner tavlan märker du att den innehåller något. Du river upp den tunna baksidan och hittar en skruvmejsel.',
        options: ['Ta skruvmejseln och leta vidare'],
        items: ['skruvmejsel'],
        nextScene: [2]
    },
    {
        // 8 - Curtain
        text: 'Du går fram till gardinen och drar den försiktigt åt sidan. Du upptäcker att fönstret är igensatt av en tegelvägg.',
        options: ['Känn på tegelstenar', 'Leta vidare'],
        nextScene: [9, 2]
    },
    {
        // 9 - Brick
        text: 'Du drar handen över tegelväggen. Plötsligt känner du att en av stenarna är lös.',
        options: ['Lirka ut stenen'],
        nextScene: [10]
    },
    {
        // 10 - Flashlight
        text: 'Stenen visade sig vara tunnare än utrymmet i väggen. Du sträcker in handen i hålet och hittar en ficklampa.',
        options: ['Ta ficklampan och leta vidare'],
        items: ['ficklampa'],
        nextScene: [2]
    }
]


// Show scene text 
function presentScene() {
    const storyText = document.getElementById('text');
    storyText.innerHTML = scenes[currentScene].text;

    const button1 = document.getElementById('button-1');
    button1.innerHTML = scenes[currentScene].options[0];

    const button2 = document.getElementById('button-2');
    button2.innerHTML = scenes[currentScene].options[1]
}



function handleUserOption () {
    
}



