let a = 0 , b = 0, c = 0, d = 0;
let tableau = [a,b,c,d];
let nombre = "";
let nombre2;
for ( let i = 0; i < 1;)
{
    d += 1;
    tableau[3] = d;
    if ( (tableau[0]<tableau[2]) || (tableau[1]<tableau[3] && tableau[0]<=tableau[2]))
    {
        tableau[1] = tableau[1].toString();
        tableau[3] = tableau[3].toString();
        nombre += tableau[0] + tableau[1] + " " + tableau[2] + tableau[3] + ", "; 
    }
    //console.log(tableau);
    if (d === 9)
    {
        d = 0;
        tableau[3] = d;
        if (c < 9)
        {
            c += 1;
            tableau[2] = c;
            if ( tableau[0]<tableau[2] )
            {
                tableau[1] = tableau[1].toString();
                tableau[3] = tableau[3].toString();
                nombre += tableau[0] + tableau[1] + " " + tableau[2] + tableau[3] + ", "; 
            }
            //console.log(tableau);
        }
        else if ( c === 9 && d === 0)
        {
            if (b < 9)
            {
                c = 0;
                tableau[2] = c;
                b += 1;
                tableau[1] = b;
                //console.log(tableau);
            }
            else if ( c === 9 && d === 0 && b === 9)
            {
                if (a < 9)
                {
                    b = 0;
                    tableau[1] = b;
                    c = 0;
                    tableau[2] = c;
                    a += 1;
                    tableau[0] = a;
                    //console.log(tableau);
                }
                else if ( a === 9)
                {
                    break;
                }
            }
        }
    }
}
//console.log(nombre.length); // 34650 caractere
//console.log(nombre[nombre.length - 1]); // renvoie le dernier caractere vide 
//console.log(nombre[nombre.length - 2]); // renvoie la dernier virgule
nombre2 = nombre.slice(0,nombre.length - 2);
console.log(nombre2);