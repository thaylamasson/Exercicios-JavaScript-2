// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário 
// e número de filhos. A prefeitura deseja saber: 
//- média do salário da população; - média do número de filhos; - maior salário; 
//- O final da leitura de dados se dará com a entrada de um salário negativo. 
//- Faça isso usando uma função!

const population = [
    {
        salary: 2.500,
        children: 2
    },
    {
        salary: 1.700,
        children: 1
    },
    {
        salary: 3.100,
        children: 0
    },
    {
        salary: 2.300,
        children: 3
    },
    {
        salary: -1.000,
        children: 0
    },
]
function findAverage(peopleinformation) {
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i < peopleinformation.lenght; i++) {
        const salary = peopleinformation[i].salary
        const children = peopleinformation[i].children

        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$ ${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$ ${highestSalary}`)
            break
        }
        else {
            averageSalary = averageSalary + salary;
            averageChildren += children

        }
    }
}

findAverage(population)



