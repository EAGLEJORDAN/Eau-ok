let argt = process.argv.slice(2);
if (argt.length>1)
{
    console.log("erreur il faut q'un seul argument");
}
else
{
    if (argt[0] === undefined)
    {
        console.log
(`J'ai terminé l'épreuve de l'eau et c'était dure mais satisfaisant surtout quand tu trouves les
les algorithmes de mathématiques! J'ai apprécié les exercices de tri!
Au fur et à mesure des exercices on observe différente maniere d'aborder les boucles et les conditions!`);
    }
    else
    {
        console.log("il ne faut pas de valeur!");
    }
}
