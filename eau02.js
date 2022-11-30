let argmt;
argmt=process.argv.slice(2);
if (argmt[1] === undefined)
{
   console.log("erreur il manque un argument en ligne de commande");
}
else // si il ya au moins 3 arguments en ligne de commande soit: bonjour 36 aurevoir
{
    for ( let i = argmt.length -1; i >-1; i--)
    {
        console.log(argmt[i]);
    }
} 