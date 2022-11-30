let nextArgt;
let argt; 
nextArgt = process.argv[3];
argt = process.argv[2]; 
//console.log(nextArgt);
if (nextArgt != undefined)
{
    console.log("il faut un seul argument!");
}
else if( argt === undefined)
{
    console.log("erreur: c'est vide!");
}
else
{
    let chiffreVerifiez = "";
    for ( let i=0; i<=argt.length -1; i++)
    {
        if(isNaN(argt[i]) === true)
        {
            console.log("false: il faut que des chiffres");
            break;
        }
        else if (isNaN(argt[i]) === false)
        {
            chiffreVerifiez += argt[i];
        }
    }
    if (chiffreVerifiez.length === argt.length)
    {
        console.log("true: il y a que des chiffres");
    }
}