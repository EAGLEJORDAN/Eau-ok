let nextArgt;
nextArgt = process.argv[4];
let argt;
argt = process.argv.slice(2,4);
//console.log(argt);
if (nextArgt != undefined)
{
    console.log(" erreur: il faut deux arguments!");
}
else if ( isNaN(argt[0]) === true || isNaN(argt[1]) || argt[0] === undefined || argt[1] === undefined)
{
    console.log("erreur: il faut insérer que des chiffres, ou il faut faut min et max deux arguments");
}
else //[ '25', '20' ]
{
    let newArgt = [];//[];
    let newArgt2 = "";
    argt[0] = Number(argt[0]);
    argt[1] = Number(argt[1]);
    // si argt  25 , 20
    if ( argt[0] > argt[1])
    {
        argt[2] = argt[0];
        argt[0] = argt[1];
        argt[1] = argt[2];   
        //console.log(argt.pop());//25
        //console.log(argt);// [ 20, 25 ]
        newArgt[0] = argt[0];
        for (let i=0; i >=0; i++)
        {    
            if ( newArgt[i] + 1 === argt[1])
            {
                break;
            }
            else
            {
                newArgt[i+1] = newArgt[i] + 1;//21
            }
        }
        for (let i =0; i<=newArgt.length -1; i++)
        {
            newArgt2 += newArgt[i] + " ";
        }
        console.log(newArgt2);
    }
    else //argt [20, 25]
    {
        newArgt[0] = argt[0];
        //console.log(newArgt); //[ ]
        for (let i=0; i >=0; i++)
        {    
            if ( newArgt[i] + 1 === argt[1])
            {
                break;
            }
            else
            {
                newArgt[i+1] = newArgt[i] + 1;//21
            }
        }
        for (let i =0; i<=newArgt.length -1; i++)
        {
            newArgt2 += newArgt[i] + " ";
        }
        console.log(newArgt2);
    }
}
