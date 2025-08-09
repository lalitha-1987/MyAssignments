function findNumberType(x)
{
    if (x > 0)

        console.log("The number  "+x+"  is a Positive number")

        else if (x<0)

        console.log("The number  "+x+"  is a Negative number")

        else if(x==0)
        console.log("The number  "+x+"  is a Neutral number")

        else
            console.log("Check your input")
}

let x = "5"
findNumberType(x)

 x = "-2"
findNumberType(x)

x = "abc"
findNumberType(x)
