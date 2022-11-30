let nextArgt;
let argt; 
nextArgt = process.argv[3];
argt = process.argv[2]; 
//console.log(nextArgt);
if (nextArgt != undefined)
{
    console.log("il faut un seul argument!");
}
else if(isNaN(argt) === false || argt === undefined)
{
    console.log("erreur: il y a soit un nombre, soit c'est vide!");
}
else // hello world ! 
{   
    let newString = "";
    for(let i=0; i<=argt.length-1; i++)
    {
        if (argt[i] === argt[i].toLowerCase())
        {
            newString += argt[i].toUpperCase();
            //console.log(newString);
            break;
        }
        else if( argt[i] === argt[i].toUpperCase())
        {
            newString += argt[i].toLowerCase();
            //console.log(newString);
            break;
        }
    } //HELLO WORLD ! //hElLo M wOrLd !
    for (let p=1; p<=argt.length -1; p++) 
    {
        if( newString[p -1] === " " && newString[p -2] === newString[p -2].toLocaleLowerCase())
        {
            newString += argt[p].toUpperCase();
        }
        else if( newString[p -1] === " " && newString[p -2] === newString[p -2].toUpperCase())
        {
            newString += argt[p].toLocaleLowerCase();
        }
        else if (newString[p -1] === newString[p -1].toUpperCase())
        {
            newString += argt[p].toLowerCase();
            //console.log(newString);
        }
        else if (newString[p -1] === newString[p -1].toLocaleLowerCase())
        {
            newString += argt[p].toUpperCase();
            //console.log(newString);
        }
    }
    console.log(newString);
}