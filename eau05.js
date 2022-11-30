let argtLigneCommande; //[ "bonjour", "42"]
//                           0  ,    1
let nextArgt;
argtLigneCommande = process.argv.slice(2,4);  //bonjour 42
//console.log(argtLigneCommande); ["bonjour", "joure"]
nextArgt = process.argv[4];
if ( nextArgt != undefined)
{
    console.log("il faut maximum deux arguments");
}
else if ( argtLigneCommande[1] === undefined || argtLigneCommande[0] === undefined )
{
    console.log("il faut minimum et maximum deux arguments");
}
else if ( isNaN(argtLigneCommande[0]) === false || isNaN(argtLigneCommande[1]) === false)
{
    console.log("les nombres ne sont pas admis");
}
else // si le tableau argtLigneCommande contient des chaine de caractere
{
    let sousChaineaVerifier;
    sousChaineaVerifier = argtLigneCommande[1];
    //console.log(sousChaineaVerifier); //lei
    let chaine;
    chaine = argtLigneCommande[0];
    //console.log(chaine); //soleil
    sousChaineaVerifier=sousChaineaVerifier.split("");
    chaine=chaine.split("");
    //console.log(sousChaineaVerifier); //[ 'j', 'o', 'u', 'r', 'e' ]
    //console.log(chaine); //['b', 'o', 'n','j', 'o', 'u','r']
    let valeurPresente = []; // //[ <1 empty item>, 'o', <1 empty item>, 'j', <1 empty item>, 'u', 'r' ]
    for (let i=0; i<=sousChaineaVerifier.length-1; i++)
    { // je créé une boucle pour parcourir chaine afin de véfifier si chaque caracteres de sousChaine... est présente dans chaine
        for (let p=0; p<=chaine.length-1; p++)                                       
        {
            if (sousChaineaVerifier[i] === chaine[p])//0, 1, 2, 3,
            {
                valeurPresente[p] = sousChaineaVerifier[i];
            }
        }
    } 
    //console.log(valeurPresente); //[ <1 empty item>, 'o', <1 empty item>, 'j', <1 empty item>, 'u', 'r' ]
    let positionDebut;
    let positionFin;
    let aVerifier ="";
    let extrait;
    positionDebut = valeurPresente.indexOf(sousChaineaVerifier[0]);
    //console.log(positionDebut);
    extrait = valeurPresente.slice(positionDebut);
    //console.log(extrait); //[ 'j', 'o', 'u', 'r' ]
    positionFin = sousChaineaVerifier.length;  
    //console.log(positionFin); //3
    aVerifier = extrait.slice(0,positionFin ); 
    //console.log(aVerifier); //[ 'j', 'o', 'u', 'r' ]
    if (sousChaineaVerifier.length === aVerifier.length)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
