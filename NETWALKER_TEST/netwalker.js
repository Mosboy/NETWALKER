let section_display = ["Front_Office", "Phlebotomy", "Laboratory", "Admin", "Dispatch", "Analyzers", "QC", "Account", "Inventory"]
var sections = document.querySelector(".to_the_left")

for(i of section_display){
    console.log(i)
    sections.innerHTML += `<div class=${i}><img src=img/${i}.png alt=${i}/><p>${i}</p><b>&darr;</b></div>`
    console.log(sections)
    // var p = document.createElement("p");
    // var node = document.createTextNode(i)
    // p.appendChild(node)
    // sections.apppendChild(p)
    // console.log(sections)
}