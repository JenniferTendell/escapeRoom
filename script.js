// Starting point for scene.
let currentSceneIndex = 0

// Items
let items = {}

// Starts the game
window.onload = presentScene;


// All scenes
const scenes = [
    {
        // 0 - Start
        text: 'Du har precis vaknat och inser att du befinner dig i ett okänt rum. Framför dig ligger en lapp.',
        options: ['Plocka upp lappen', 'Strunta i lappen',],
        nextScene: [1, 2]
    },
    {
        // 1 - Note
        text: 'På lappen står det "Klockan tickar... Tick, tack... Tick, tack..."',
        options: ['Lägg ner lappen'],
        nextScene: [2]
    },
    {
        // 2 - First option
        text: 'Lappen fattade eld och försvann upp i rök. Du kollar förvirrat runt i rummet efter en möjlig utväg. Du väljer att gå fram till...',
        options: ['Dörren', 'Spegeln', 'Tavlan', 'Gardinen'],
        nextScene: [4, 5, 7, 9]
    },
    {
        // 3 - scene zero
        text: 'Du väljer att gå fram till...',
        options: ['Dörren', 'Spegeln', 'Tavlan', 'Gardinen'],
        nextScene: [4, 5, 7, 9]
    },
    {
        // 4 - Door
        text: 'Du försöker öppna dörren men upptäcker att den är låst.',
        options: ['Leta vidare'],
        nextScene: [2]
    },
    {
        // 5 - Mirror
        text: 'Du blir lättad när du känner igen din egen spegelbild. Men vad är det där?',
        options: ['Titta närmre i spegeln', 'Strunta i det och leta vidare'],
        nextScene: [6, 3]
    },
    {
        // 6 - Reflection
        text: 'Du lutar dig fram mot spegeln och upptäcker något svart på halsen. Det står 491.',
        options: ['Leta vidare'],
        nextScene: [3]
    },
    {
        // 7 - Painting
        text: 'Du går fram till tavlan i hopp om att hitta en ledtråd ut. Målningen är abstrakt, svårtolkad och ger inga ledtrådar.',
        options: ['Plocka ner tavlan irriterat', 'Leta vidare'],
        nextScene: [8, 3]
    },
    {
        // 8 - Move painting
        text: 'När du plockar ner tavlan märker du att den innehåller något. Du river upp den tunna baksidan och hittar en skruvmejsel.',
        options: ['Ta skruvmejseln och leta vidare'],
        items: ['skruvmejsel'],
        nextScene: [3]
    },
    {
        // 9 - Curtain
        text: 'Du går fram till gardinen och drar den försiktigt åt sidan. Du upptäcker att fönstret är igensatt av en tegelvägg.',
        options: ['Känn på tegelstenar', 'Leta vidare'],
        nextScene: [10, 3]
    },
    {
        // 10 - Brick
        text: 'Du drar handen över tegelväggen. Plötsligt känner du att en av stenarna är lös.',
        options: ['Lirka ut stenen'],
        nextScene: [11]
    },
    {
        // 11 - Flashlight
        text: 'Stenen visade sig vara tunnare än utrymmet i väggen. Du sträcker in handen i hålet och hittar en ficklampa.',
        options: ['Ta ficklampan och leta vidare'],
        items: ['ficklampa'],
        nextScene: [3]
    }
]



// Show scene; text and options
function presentScene() {
    const scene = scenes[currentSceneIndex];
    
    // Skickar med hela objektet 'scene'
    updateStoryText(scene);
    createOptionButtons(scene);
}


function updateStoryText (scene) {
    const storyText = document.getElementById('text');
    storyText.innerHTML = scene.text;
}


function createOptionButtons(scene) {
    const buttonContainer = document.getElementById('option-container');
    buttonContainer.innerHTML = "";
    
    for (let i = 0; i < scene.options.length; i++) {
        const option = scene.options[i];
        const nextScene = scene.nextScene[i];

        const button = createButton(option, nextScene)

        //Uppdatera sidan med knappen
        buttonContainer.append(button);
    }
}

function createButton(option, nextScene) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = option;
    button.onclick = function () {
        handleUserOption(nextScene)
    }

    return button;
}

function handleUserOption (nextScene) {
    currentSceneIndex = nextScene;
    presentScene();

}


