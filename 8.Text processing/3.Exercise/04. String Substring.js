function solve(word, text) {
    let tokens = text.split(' ');

    for (let token of tokens){
        if(word.toLocaleLowerCase()==token.toLocaleLowerCase()){ // Може да го направим и с toLocaleUpperCase
           return console.log(word)
        }
    }
    console.log(`${word} not found`)
}
solve("javascript", "JavaScript is the best programming language");
