const arr = ["MA", "SA", "I", "SCH", "OOL"]

let charLower = (char) => char.toLowerCase()

let wordLower = (word) => word.split('').map(charLower).join('')

let arrayToLower = (array) => array.map(wordLower)

let output = arrayToLower(arr)

console.log(output)