const words = ['coder','programmer','developer'];
const capitalizedWords = words.map((word) =>{
    return word[0].toUpperCase() + word.slice(1,word.length);
});
console.log(capitalizedWords);