let who =  ['The dog','My granma','His turtle','My bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
function buildExcuseString(theParts)
{
        let anExcuse ="";
        for(let i in theParts)
            {
                let aRandomPart = Math.floor(Math.random()*theParts[i].length);
                let aSpace = (i==theParts.length-1)?"":" ";
                anExcuse+=theParts[i][aRandomPart]+aSpace;
            }
        anExcuse+=".";
        return anExcuse
}
let lameExcuse = buildExcuseString([who, what, when])