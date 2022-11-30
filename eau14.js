let argt = process.argv.slice(2);
if ( argt[0] === undefined)
{
    console.log(" erreur c'est vide");
}
else
{

    let tableAscii = ['  ','!',`"`,'#','$','%','&',"'",'(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', , , ,'^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','DEL'];
    //console.log(tableAscii[1]);
    ///console.log(argt); //Albert Momo Gilbert
    // attribuer une position à chaque caractere de chaque élément ou mot
    let newArgt = []; 
    for (let i=0; i<=argt.length-1;i++)
    {   
        newArgt[i] = argt[i].split("");
    }
    //console.log(newArgt); //[ [ 'A', 'z', 'e' ], [ 'M', 't', 'y', 'u' ], [ 'G', 'c', 'v' ] ]
    //connaitre la position du premier caractetere de chaque mot ou tableau
    let variable;
    let caractere;
    let position = [];
    for (let i=0; i<=newArgt.length-1; i++)
    {
        variable = newArgt[i]; 
        //console.log(variable);//[ 'A', 'z', 'e' ]
        for (let x=0; x<1; x++)
        {
            caractere = variable[x];
            for (let y=0; y<=tableAscii.length-1; y++)
            {
               if(caractere === tableAscii[y])
               {
                   position[i] = y;
                   break;
               }
            } 
        }
    }
    //newArgt =[ [ 'A', 'l', 'b', 'e', 'r', 't' ],[ 'M', 'o', 'm', 'o' ],['G', 'i', 'l','b', 'e', 'r','t'] ]
    //console.log(position);   //[ 33, 79, 76 ]
    // rassembler chaque valeur d'un tableau en une seule chaine
    let variable2;
    let chaine = "";
    for (let i=0; i<=newArgt.length-1; i++)
    {
       variable2 = newArgt[i];
       //console.log(variable2); //[ 'A', 'l', 'b', 'e', 'r', 't' ]
       for (let x=0; x<=variable2.length-1; x++)
       {
        chaine += variable2[x];
       }
       chaine += ",";
    }
    //console.log(chaine); //Albert,Momo,Gilbert,
    //supprimer la derniere virgule
    let indexChar;
    let chaine2;
    let chaine3;
    indexChar = chaine.length-1;
    chaine2 = chaine.slice(0,indexChar);
    //console.log(chaine2); //
    //séparer la chaine en plusieurs élément là où il y a des virgule
    chaine3 = chaine2.split(",");
    //console.log(chaine3); //[ 'Albert', 'Momo', 'Gilbert' ]
    // j'affecte chaque valeur de chaine3 dans un tabaleau chaine4 à l'index  qui correspond à la valeur du tableau position.
    let chaine4 = [];
    for (let i=0; i<=chaine3.length-1; i++)
    {  
            chaine4[position[i]]= chaine3[i]; 
    }
    //console.log(chaine4);//
    //j'extrais de chaine4 chaque valeur non vide dans une dans une variable ordreAscii
    let ordreAscii = "";
    for (let i=0; i<=chaine4.length-1; i++)
    {
        if (chaine4[i] != undefined)
        {
            ordreAscii += chaine4[i] + " " ;
        }
    }
    console.log(ordreAscii);
}
