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
else // hello world ! //H
{
    let newString = ""; //H
    for (let i=0; i<=argt.length -1; i++)
    {
        if ( argt[i] === argt[i].toLowerCase())
        {
            newString += argt[i].toUpperCase();
            break;
        }
        else
        {
            newString += argt[i];
            break;
        }
    } 
    for (let i=1; i<=argt.length -1; i++)
    {
        if (argt[i -1] === " ")
        {
           newString += argt[i].toUpperCase();
        }
        else if (argt[i] === argt[i].toLowerCase())
        {
            newString += argt[i];
        }
        else if (argt[i] === argt[i].toUpperCase())
        {
           newString += argt[i].toLowerCase();
        }
    }
    console.log(newString);
}