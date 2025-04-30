const employees = 
[
    {f_nmae: "jannat", l_name: "issellay"},
    {f_nmae: "Amal", l_name: "issellay"},
    {f_nmae: "hdsuh", l_name: "dksjcjc"},
    {f_nmae: "sidjoj", l_name: "fujiodsh"},

]

function getFIrstEmployeeFirstNAme(employees)
{
    const firstEmployee = employees[0];
    return firstEmployee.f_nmae;
}

console.log(getFIrstEmployeeFirstNAme(employees));