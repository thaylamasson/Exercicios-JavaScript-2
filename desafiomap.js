const list = [
    { name: "Rodolfo", vip: true},
    { name: "Maria", vip: false},
    { name: "João", vip: true},
    { name: "Bruno", vip: true},
    { name: "Carla", vip: false},
    { name: "Ana", vip: true},
    { name: "Julio", vip: false},
];

const newList = list.map (client => {
const newList = {
    name: client.name,
    vip: client.vip,
    sector: client.vip ? 'Black' : 'Green'

}
return newList
})
console.log(newList)