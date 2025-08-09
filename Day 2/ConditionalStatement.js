function launchBrowser()
{
let browserName ="Chrome"
if (browserName.match("Chrome"))
{
    console.log("Browser Name is  "+browserName)
}

else{

    console.log("Browser Name is random")
}

}

function runTests()
{
    let testType ="Smoke"
    switch (testType) {
        case "sanity":
          console.log("Sanity Test!");
          break;
        case "Regression":
          console.log("Regression Test!");
          break;
        default:
          console.log("Smoke");
      }

    }     
launchBrowser()
runTests()
