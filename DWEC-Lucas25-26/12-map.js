let map = new Map()
console.log(map)

map = new Map([
    ["nombre","Lucas"],
    ["edad",21],
    ["pais","España"],
    ["titulos",["Ingeniería","Física"]]
])
console.log(map)

map.set("puesto","Desarrollador")
console.log(map)


console.log(map.get("nombre"))

console.log(map.keys())
console.log(map.values())
console.log(map.entries())
