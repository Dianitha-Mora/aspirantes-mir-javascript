function calcolor (Number)

{

    if (Number === 1) {
        color = "El color es negro";
        return (color)
    
    } else { if (Number == 2) {
        color = "El color es Blanco";
        return (color)

    } else { if (Number === 3) {
        color ="El color es Azul";
        return (color)

    } else {
        color = "El color es Verde";
        return (color)
    }

}
}
}


console.log(calcolor(1)) // "El color es negro"
console.log(calcolor(2)) // "El color es blanco"
console.log(calcolor(3)) // "El color es azul"
console.log(calcolor(8)) // "El color es verde"