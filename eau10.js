let nextArgt;
nextArgt = process.argv[3];
let argt;
argt = process.argv.slice(2);
let elementRecherche;
elementRecherche = argt.pop(); // renvoie lélément qui a été supprimé à partir de la fin du tableau
//console.log(elementRecherché);
//console.log(argt);
if (nextArgt === undefined)
{
    console.log
(`Il faut minimum deux arguments.
Rappel: le dernier argument est celui à rechercher!`)
}
else // je parcours mon tableau argt pour vérifier si chaque élément est === à elementRecherché
{
    let elementNonRecherche= [];
    for (let i=0; i<=argt.length -1; i++)
    {
        if ( argt[i] === elementRecherche)
        {
            console.log(i + "  est la position de " + elementRecherche);
            break;
        }
        else
        {
            elementNonRecherche[i] = argt[i];
        }
    }
    if ( elementNonRecherche.length === argt.length)
    {
        console.log("-1: " + elementRecherche + " n'est pas trouvé!") 
    }
}