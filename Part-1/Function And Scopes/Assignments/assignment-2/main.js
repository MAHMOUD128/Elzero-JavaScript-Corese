//change 1
function itsMe() {
    return `Iam A Normal Function`;
  }
  
  console.log(itsMe()); // Iam A Normal Function

//Arrow Function
  itsMe =()=> "Iam A Normal Function";
  console.log(itsMe()); 

//change 2
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//Arrow Function
urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));