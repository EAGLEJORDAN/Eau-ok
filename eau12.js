function gestionErrreurArgt()
{
    function triezOrdreCroissant(parametre) //
    {
        //console.log(parametre);
        let ttlElmNbr = parametre.length-1;                           
        let croissant = [];
        let compare;
        let compare2;
        for (let i=0; i<ttlElmNbr; i++) //
        {
            if (parametre[i] > parametre[i+1])
            {
                compare = parametre[i];
                compare2 = parametre[i+1];
                parametre[i] = compare2;
                parametre[i+1] = compare;
            }
            for(let x=0; x<ttlElmNbr; x++)
            {
                if (parametre[x] < parametre[x+1])
                {
                    croissant[x] = parametre[x];
                }
                else
                {
                    break;
                }
            }
            if (croissant.length === parametre.length-1)
            {
                break;
            }
            if ( i === ttlElmNbr-1)
            {
                i=-1;
            }
        }
        console.log(parametre);
    }
    /////////////////////////////
    //gestion d'erreur d'argument
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
                triezOrdreCroissant(argtFinale); //[ 2, 15, 4, 6, 4, 15 ] à essayer
            }
        }
    }
}
gestionErrreurArgt();