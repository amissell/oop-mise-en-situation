const employees = 
[
    {f_name: "amal", l_name: "issellay"},
    {f_name: "kjfjsk", l_name: "icnmbsjkhda"},
    {f_name: "m,dna", l_name: ",knxaks"},
    {f_name: "djkk", l_name: "sdcojdsoc"},
    {f_name: "dxjoiaj", l_name: "kjxskdkas"},
    {f_name: "ncsclj", l_name: "jscnjnsk"},


]
function getLastEmployeeLastName(employees)
{
    const lastEmployeer = employees[employees.length - 1];
    return lastEmployeer.l_name;
}


console.log(getLastEmployeeLastName(employees));