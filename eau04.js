let argmt;
let nextArgmt;
argmt = process.argv[2]; // j'ai 8 en ligne de commande
nextArgmt = process.argv[3];
if ( nextArgmt != undefined )
{
    console.log(" -1: erreur il y a deux arguments");
}
else if ( argmt === undefined || isNaN(argmt) === true || argmt <= 0)
{
    console.log(" soit c'est vide, soit il y a une chaine de caractere, soit l'argument est négatif ou égal à zéro");
}
else
{
    let argmtTypeNumber = []; //[8, 9, 10, 11]
    argmtTypeNumber[0] = Number(argmt);  //"8" est convertie en type nombre
    let numberTest; //9
    // je créé le nombre après 8 soit 9
    for ( let i = 0; i >=0; i++) // i=1 , i=2
    {
        argmtTypeNumber[i+1] = argmtTypeNumber[i] + 1; //  j'ajoute 9 à la position 1
        numberTest = argmtTypeNumber[i] + 1; // j'ajoute 9 dans numberTest pour vérifier ensuite si 9 est premier
        let resultatDivision = []; //[ ,9, 4.5, 3]
        // je vérifie si 9 est premier en essayant les diviseurs de 1 à 9
        for (let i=1; i<=numberTest; i++) // i est mon diviseur et je vais parcourir tout mes diviseurs pour vérifier si 3 est divisible par les diviseurs qu'il y a entre 1 et 3
 	    {
		    // je divise numberTest par mon premier diviseur i
            resultatDivision[i]= numberTest / i; // j'ajoute le résultat de la division soit 9 dans le tableau resultat à la position 1
		    //console.log(resultatDivision); 
            if (Number.isInteger(resultatDivision[i]) === true && i != 1 && i != numberTest) 
		    {
			    break;
		    }
            if (resultatDivision.length === numberTest+1)
            {
                console.log(numberTest + " est premier");
                break;
            }
        }
        if (resultatDivision.length === numberTest+1)
        {
            break;
        }
    }
}