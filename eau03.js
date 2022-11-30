let argmt;
let argmt2;
let nombreFibonnacci = [0,1];
argmt=process.argv[2]; // disant j'ai prit "5"en ligne de commande
// si ligne de commande vide
if (argmt === undefined) 
{
    console.log("erreur c'est vide");
} // si ligne de commande est une chaine de caractere
else if (isNaN(argmt) === true || Math.sign(argmt) === -1 )
{
    console.log(-1);
} //si il n'y a ni aucun argument, ni une chaine de caractere et ni un nombre négatif en ligne de commande
else // il y a que des nombres positifs
{
    argmt2=Number(argmt); 
    for (let i = 2; i <= argmt2; i++)
    {   
        nombreFibonnacci.push(nombreFibonnacci[i-2] + nombreFibonnacci[i-1]);
    }
    console.log(nombreFibonnacci[argmt2] + " est le nombre de fibonnacci de la position " + argmt2 );
}