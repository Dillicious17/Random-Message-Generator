
    let pronouns = ['They', 'You', 'We', 'He', 'She']
    let verbs = ['is', 'will', 'are']
    let actions = ['eating', 'consuming', 'throwing up', 'ignoring']
    let foods = ['lasagna', 'tacos', 'pizza']


const randomizer = (arr1, arr2, arr3, arr4) =>{
    
    let pronoun = Math.floor(Math.random()*arr1.length);
    let verb = Math.floor(Math.random()*arr2.length);
    let action = Math.floor(Math.random()*arr3.length);
    let food = Math.floor(Math.random()*arr4.length);
    
    let randomMsg = `${pronouns[pronoun]} ${verbs[verb]} ${actions[action]} ${foods[food]} `;
    
    console.log(randomMsg);
    
}

randomizer(pronouns, verbs, actions, foods);