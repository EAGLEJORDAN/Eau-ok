let argt;
argt = process.argv.slice(2);
//console.log(argt);
if (argt[0] === undefined )
{ 
    console.log("erreur: c'est vide");
}
else if (argt[1] === undefined )
{
    console.log("il faut minimum deux arguments et cela doit etre que des chiffres");
}
else
{
    //console.log(argt); //[ '5', '1', '19', '21' ]
    for ( let i=0; i<= argt.length -1; i++)
    {
        if ( isNaN(argt[i]) === true || argt[i] === "  ")
        {
            console.log("erreur: il faut que des chiffres");
            break;
        }
    }
    // je convertie toute les valeurs en type nombre pour faire l'opération de soustraction sur ces valeurs
    for (let i =0; i<= argt.length -1; i++)
    {
        argt[i] = Number(argt[i]);
    }
    //console.log(argt); //[ 5, 1, 19, 21 ]
    let variable = []; //[5, 1, 19, ]
    let difference = "";//[4 -14 -16 -18 -20 -2]
    for (let i=0; i<argt.length -1; i++)
    {
        variable[i] = argt[i];
        //console.log(variable); 
        for (let x = variable.length; x<=argt.length -1; x++)
        {
            difference += variable[i] - argt[x] + " ";
        }
    }
    //console.log(difference); //4 -14 -16 -18 -20 -2
    let difference2;
    difference2 = difference.split(" ");
    difference2.pop();
    //console.log(difference2); //[ '4', '-14', '-16', '-18', '-20', '-2' ]
    for (let i=0; i<=difference2.length -1; i++)
    {
        if (difference2[i] < 0)
        {
           difference2[i] = difference2[i] * (-1);
        }
        else
        {
           difference2[i] = Number(difference2[i]);
        }
    }
    //console.log(difference2);//[15, 19,  1,  1, 4, 14, 16, 18, 20, 2]
    let petitNombre = []; //[15, 15 , 1, 1];
    for (let i=0; i<=0; i++)
    {
        petitNombre[i] = difference2[i];
        //console.log(petitNombre);//15
        for (let y=petitNombre.length; y<=difference2.length -1; y++)
        {
            if (petitNombre[i] < difference2[y])
            {
                petitNombre[i+1] = petitNombre[i];
                ++i;
                //console.log(petitNombre);
            }
            else
            {
                petitNombre[i+1] = difference2[y];
                ++i;
            }
        }
    }
    //console.log(petitNombre);
    console.log(petitNombre[petitNombre.length -1]);
}

