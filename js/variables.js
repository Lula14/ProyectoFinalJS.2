
const productos = document.querySelector("#productos")
const kilos = document.querySelector("#kilos")
const cantidad = document.querySelector("#cantidad")
const botonCalcular = document.querySelector("#botonCalcular")
const importe = document.querySelector("span")




const datosProductos = [
    { tipo: 'CatChow Adulto', factor: 350 },
    { tipo: 'Dogui', factor: 250 },
    { tipo: 'Pro Plan', factor: 650 },
    { tipo: 'Royal Canin', factor: 700 },
    { tipo: 'Old Prince', factor: 500 },
    { tipo: 'Pedigree', factor: 450 },
    { tipo: 'Balanced', factor: 700 },
    { tipo: 'Whiskas', factor: 300 },
    { tipo: 'Eukanuba', factor: 700 },
]


const datosKilos = [
    { tipo: 1, factor: 1 },
    { tipo: 3, factor: 2.9 },
    { tipo: 7.5, factor: 6.7 },
    { tipo: 15, factor: 13.5 },]


let costoKilo = 0
for (index = 0; index < datosProductos.length; index++) {
    costoKilo = datosProductos[index].precio
    console.table(costoKilo)
}

localStorage.setItem(datosProductos, datosKilos)

const img1 = document.createElement("img");

img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJfBtV3Y-SZuAg8T4p0U1gFh3H309W5HwtQ&usqp=CAU";
img1.alt = "Logo Cat Chow";
img1.style.width = "160px";
img1.style.marginInline = "10px";
img1.style.borderBlockColor = "whitesmoke";
img1.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img1.style.borderRadius = "0.7rem";
img1.addEventListener ("mousemove", function(){
    img1.style.clipPath = "circle(50% at 50% 50%)"
 
})

document.body.appendChild(img1);

const img2 = document.createElement("img");
img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIyM415JLdxqIwoHMGbt9AkJpw_q7yBsDEA&usqp=CAU";
img2.alt = "Logo Dogui";
img2.style.width = "92.5px";
img2.style.marginInline = "10px";
img2.style.borderBlockColor = "whitesmoke";
img2.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img2.style.borderRadius = "0.7rem";
img2.addEventListener ("mousemove", function(){
    img2.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img2);

const img3 = document.createElement("img");
img3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6vbeeabOx4uXreYU4d1qopOKDU7sIbOEmQ&usqp=CAU";
img3.alt = "Logo Pro Plan";
img3.style.width = "92.5px";
img3.style.marginInline = "10px";
img3.style.borderBlockColor = "whitesmoke";
img3.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img3.style.borderRadius = "0.7rem";
img3.addEventListener ("mousemove", function(){
    img3.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img3);

const img4 = document.createElement("img");
img4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1E_DEKmEKaxmBbAWCkuiNM5v6b8XBozgow&usqp=CAU";
img4.alt = "Logo Royal Canin";
img4.style.width = "92.5px";
img4.style.marginInline = "10px";
img4.style.borderBlockColor = "whitesmoke";
img4.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img4.style.borderRadius = "0.7rem";
img4.addEventListener ("mousemove", function(){
    img4.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img4);

const img5 = document.createElement("img");
img5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W63UBMNWu6dXN6rDNXvu9q2bynIqzsaBCQ&usqp=CAU";
img5.alt = "Logo Old Prince";
img5.style.width = "125px";
img5.style.marginInline = "10px";
img5.style.borderBlockColor = "whitesmoke";
img5.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img5.style.borderRadius = "0.7rem";
img5.addEventListener ("mousemove", function(){
    img5.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img5);

const img6 = document.createElement("img");
img6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnC9V3MDSVxEZ_dKwIeVEJFD0ys4vWZIcYiQ&usqp=CAU";
img6.alt = "Logo Pedigree";
img6.style.width = "95px";
img6.style.marginInline = "10px";
img6.style.borderBlockColor = "whitesmoke";
img6.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img6.style.borderRadius = "0.7rem";
img6.addEventListener ("mousemove", function(){
    img6.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img6);

const img7 = document.createElement("img");
img7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J3yOKGc9QiIS3UQn6Jla23x9RC-tUkVFlA&usqp=CAU";
img7.alt = "Logo Balanced";
img7.style.width = "210px";
img7.style.marginInline = "10px";
img7.style.borderBlockColor = "whitesmoke";
img7.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img7.style.borderRadius = "0.7rem";
img7.addEventListener ("mousemove", function(){
    img7.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img7);

const img8 = document.createElement("img");
img8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rWqz9mbnoFqISnMT-XPx7vvcdnaIIp1kmw&usqp=CAU";
img8.alt = "Logo Whiskas";
img8.style.width = "165px";
img8.style.marginInline = "10px";
img8.style.borderBlockColor = "whitesmoke";
img8.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img8.style.borderRadius = "0.7rem";
img8.addEventListener ("mousemove", function(){
    img8.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img8);

const img9 = document.createElement("img");
img9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqG_Yb35ylwnvkuF8pG4pAVP7-IvQ1b4nlQ&usqp=CAU";
img9.alt = "Logo Eukanuba";
img9.style.width = "92.5px";
img9.style.marginInline = "10px";
img9.style.borderBlockColor = "whitesmoke";
img9.style.boxShadow = "26px 28px 15px -8px rgba(0, 0, 0, 0.15)";
img9.style.borderRadius = "0.7rem";
img9.addEventListener ("mousemove", function(){
    img9.style.clipPath = "circle(50% at 50% 50%)"
 
})
document.body.appendChild(img9);




//////////////////////////////////////////


