let a = 0;
let b = 0;
let c = 0;
let combinaisonDe3Chiffres=[a,b,c];
let resultat = [];
//chiffre1=i++// quand chiffre1 augmente d'une valeur, je met chiffre1 à la position 2 du tableau combinaisonDe3Chiffre
//combinaisonDe3Chiffres=chiffre
 // quand chiffre1 = 9 alors j'augmente chiffre2 d'une valeur et j'initialise chiffre1 à 0 
 // puis j'augemnte à nouveau chiffre1 d'une valeur
 //quand chiffre2 = 9 alors j'augmente chiffre3 d'une valeur
 //quand chiffre3 = 9 fin du programme
 //si chifre3 < chiffre2 < chiffre3 alors affiche la variable combinaisonDeChiffres
for (let i = 0; i < 1;)
{
    c += 1;
    combinaisonDe3Chiffres[2] = c;
    if( a < b && b < c )
    {
        resultat.push(combinaisonDe3Chiffres.join(""));
    }
    if (c === 9) // quand chiffre1 = 9
    {   
        c = 0; // je remet chiffre1 à 0
        combinaisonDe3Chiffres[2] = c;
        if ( b < 9) //si chiffre2 inferieur à 9
        {
            b += 1; // j'augmente chiffre2 d'une valeur
            combinaisonDe3Chiffres[1] = b // j'affecte cette valeur à la position 1 du tableau
        }
        else if (b === 9 && c === 0)  //si chifffre2 est === 9 et chiffre1 === 0 
        //(au moment ou en est à 99 et 9 devient 0 par le premier if ci dessus
        {
            b = 0;
            combinaisonDe3Chiffres[1] = b;
            a += 1;
            combinaisonDe3Chiffres[0] = a;
            if ( a === 9)
            {
                break;
            }
        }
    }
}
//console.log(resultat);
let combinaison = "";
for ( let i = 0; i < resultat.length; i++)
{
    combinaison+=resultat[i] + ", ";
}
console.log(combinaison);