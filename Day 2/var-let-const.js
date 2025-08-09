const  browserName= "Chrome"

console.log("Outside Function :Browser Name  is  "+browserName)

function getBrowserName()
{
    if (browserName  ==="Chrome")
    
    {
        var browserName ="Chrome"
        console.log("Inside if :Browser Name  is  "+browserName)
    }
    else
    {
        let browserName = "Chrome"
        console.log("Else : Browser Name is :"+browserName)
    }

    console.log("Outside if-else block  within function: Browser Name  is  "+browserName)

    return browserName
}

getBrowserName()
console.log("After calling the function :"+browserName)
