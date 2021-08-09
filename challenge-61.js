/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" 
domainName("www.xakep.ru") == "xakep"*/


const domainName = url => url.replace(/(?:www\.)|(?:https?:\/\/)(?:www\.)?/, "").split(".")[0]


let regExFun = /ab*c/g
let string = "acaacbbabbbbcdebc"

console.log(string.match(regExFun))