// Starting point for scene.
let currentSceneIndex = 0

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
        text: 'Du går fram till tavlan i hopp om att den kan ge dig en ledtråd. Målningen är abstrakt, svårtolkad och ger dig inga ledtrådar.',
        options: ['Leta vidare', 'Plocka ner tavlan irriterat'],
        nextScene: [3, 8]
    },
    {
        // 8 - Move painting
        text: 'När du plockar ner tavlan märker du att den innehåller något. Du river upp tavlans baksidan och hittar en skruvmejsel.',
        options: ['Ta skruvmejseln och leta vidare'],
        item: 'skruvmejsel',
        nextScene: [3]
    },
    {
        // 9 - Curtain
        text: 'Du går fram till gardinen och drar den försiktigt åt sidan. Du upptäcker att fönstret är igensatt av en tegelvägg.',
        options: ['Leta vidare', 'Känn på tegelstenar'],
        nextScene: [3, 10]
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
        item: 'ficklampa',
        nextScene: [3]
    },
        // Scenes when user got items
    {
        // 12 - Use screwdriver
        text: 'Du inspekterar spegeln och ser att den sitter fast med skruvar.',
        options: ['Använd skruvmejseln', 'Strunta i skruvarna'],
        nextScene : [13, 3]
    },
    {
        // 13 - Behind mirror
        text: 'Du skruvar ner spegeln och möts av en dörr. För att öppna dörren krävs det ett lösenord.',
        options: ['Fyll i lösenord', 'Leta efter lösenord'],
        nextScene: [14, 3]
    },
    {
        // 14 - Enter password
        text: 'Fyll i lösenord (siffror)',
        options: ['Leta efter lösenord'],
        password: 491,
        nextScene: [3]
    },
    {
        // 15 - Opens the door
        text: '*Blipp blipp* Dörren är upplåst!',
        options: ['Öppna dörren'],
        nextScene: [16]
    },
    {
        // 16 - Behind door
        text: 'Du vrider om handtaget och möts av ett kolsvart rum. Du vägrar att gå in dit utan att se något.',
        options: ['Gå tillbaka och leta efter en ljuskälla'],
        nextScene: [3]
    },
    {
        // 17 - Use flashlight
        text: 'Du tänder ficklampan och riktar den mot det mörka rummet. Rummet visar sig vara en korridor.',
        options: ['Följ korridoren'],
        nextScene: [18]
    },
    {
        // 18 - End of corridor
        text: 'Du går sakta genom korridoren och möts av två dörrar. Vilken dörr vill du öppna?',
        options: ['Dörr 1', 'Dörr 2'],
        nextScene: [19, 22]
    },
    {
        // 19 - Open door 1
        text: 'Du väljer att öppna dörr 1 och ser att korridoren fortsätter. Dörren smälls igen bakom dig och går i lås. Ditt enda val är att fortsätta framåt.',
        options: ['Följ korridoren'],
        nextScene: [20]
    },
    {
        // 20 - Door 1, corridor
        text: 'Du följer korridoren. Du kikar försiktigt fram runt hörnet där du ser ännu en dörr.',
        options: ['Gå fram och öppna dörren'],
        nextScene: [21]
    },
    {
        // 21 - Door 1, new door
        text: 'Du vrider om låset för att öppna dörren. Rummet bakom dörren är tyvärr bekant. Du har lyckats öppna dörren in till rummet där du började.',
        options: ['Gå till spegeln', 'Gå till tavlan', 'Gå till gardinen'],
        nextScene: [5, 7, 9]
    },
    {
        // 22 - Door 2
        text: 'Du väljer att öppna dörr 2 och möts av solljus. Du lyckades ta dig ut!',
        options: ['Börja om'],
        nextScene: [0]
    }
]




/** Controls what to show for each scene */
function presentScene() {
    const scene = scenes[currentSceneIndex];

    updateStoryText(scene);
    createOptionButtons(scene);
    collectItems(scene);
    createPasswordInput(scene);
}

/**
 * Changes text based on scene index.
 * @param {Array<Number>} scene 
 */
function updateStoryText (scene) {
    const storyText = document.getElementById('text');
    storyText.innerHTML = scene.text;
}

/**
 * Creates as many buttons as options for each scene
 * @param {Array<Number>} scene 
 */
function createOptionButtons(scene) {
    const buttonContainer = document.getElementById('option-container');
    buttonContainer.innerHTML = "";
    
    for (let i = 0; i < scene.options.length; i++) {
        const option = scene.options[i];
        const nextScene = scene.nextScene[i];

        const button = createButton(option, nextScene)

        //Skapa en knapp
        buttonContainer.append(button);
    }
}

/**
 * Sets inner text and design for each button. Onclick is connected to the next scene. 
 * @param {Array<String>} option 
 * @param {Array<Number>} nextScene 
 */
function createButton(option, nextScene) {
    button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = option;
    button.onclick = function () {
        handleUserOption(nextScene)
    }

    return button;
}

/**
 * Sets the next scene based on which button the user clicked on.
 * @param {Array<Number>} nextScene 
 */
function handleUserOption (nextScene) {
    currentSceneIndex = nextScene;
    presentScene();
}

/**
 * Checks if the scene contains an item. If it does, new options will be created and the item wont be able to pic up again.
 * @param {Array<Number>} scene 
 */
function collectItems(scene) {
    if (scene.item) {
        if (scene.item == 'skruvmejsel') {
            scenes[5].options.push('Inspektera spegeln'),
            scenes[5].nextScene.push(12),
            scenes[7].options.pop()
        } if (scene.item == 'ficklampa') {
            scenes[16].options.push('Använd ficklampa'),
            scenes[16].nextScene.push(17),
            scenes[9].options.pop()
        }
    }
}

/**
 * An input field will appear if the scene index contains 'password'.
 * @param {Array<Number>} scene 
 */
function createPasswordInput(scene) {
    document.getElementById("password-container").style.display = 'none';

    if (scene.password) {
        document.getElementById("password-container").style.display = 'block';
        const form = document.getElementById('form');
        form.onsubmit = handlePassword.bind(null, scene)  
    }
}

/**
 * Checks if the user input of password is correct
 * @param {Array<Number>} scene 
 * @param {Event} event 
 */
function handlePassword(scene, event) {
    event.preventDefault();
    const input = document.getElementById('password');
    if(input.value == scene.password){
        currentSceneIndex = 15,
        presentScene();
    } else {
        const wrongPassword = document.getElementById('label');
        wrongPassword.innerHTML ='Fel lösenord'
    }
}