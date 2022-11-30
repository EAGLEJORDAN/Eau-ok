function gestionErrreurArgt ()
{
    function triezOrdreCroissant(parametre)
{
    let compare = [];
    let stock2;//3
    for (let i=0; i<parametre.length-1; i++)
    {
       compare[i] = parametre[i];
       for (let x=compare.length; x<=parametre.length-1; x++)
       {
            if (compare[i]<parametre[x])
            {
                parametre[i] = compare[i];
            }
            else  
            {
                stock2 = parametre[x];
                //échange
                parametre[x]= compare[i];
                parametre[i] = stock2;
                compare[i]= stock2;
            }
       }
    }
    console.log(parametre);
}
    // gestion erreur d'arguments
    let argt;
    argt = process.argv.slice(2);
    if (argt[0] === undefined)
    {
    console.log("c'est vide!");
    }
    else
    {
    let argtFinale = [];
    for (let i=0; i<=argt.length-1; i++)
    {
                if ( isNaN(argt[i]) === true)
                {
                    console.log("erreur: il faut que des nombres!");
                break;
                }
                else
                {
                    argtFinale[i] = argt[i];
                }
   }
    if (argtFinale.length === argt.length)
    //mettre valeur en type nombre
    {
        for (let i=0; i<=argtFinale.length-1; i++)
        {
            argtFinale[i] = Number(argt[i]);
        }
        //vérifier si il y a des nombres identiques
        let verifier = [];
        let double;
        let finale = [];
        for (let i=0; i<argtFinale.length-1; i++)
        {
            verifier[i] = argtFinale[i];
            // on compare avec les valeurs suivantes
            for (let x=verifier.length; x<=argtFinale.length-1; x++)
            {
                if ( verifier[i] === argtFinale[x]) // si valeur egale à valeur
                {
                    double = verifier[i];
                    console.log("il ne peut pas y avoir deux fois le même nombre!");
                    break;
                }
                else
                {
                    finale[i] = verifier[i];
                }
            }
            if (double != undefined )
            {
                break;
            }
        }
        if ( finale.length === argtFinale.length-1)
        {
            //console.log(argtFinale);
            triezOrdreCroissant(argtFinale); 
        }
    }
    }
}
gestionErrreurArgt();