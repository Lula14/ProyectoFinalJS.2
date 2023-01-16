
 
 const lista = document.querySelector ('#listado')

 fetch ('data.json')
 
 .then ( (res) => res.json())
 .then ( (data) => {
    data.forEach((producto) => { 
        const li = document.createElement ("li")
        li.innerText = `
        <h4>${producto.nombre}</h4>
        <p>${producto.precio}</p>
        <p>Codigo: ${producto.id}</p>
        <hr/>
        `
        
        console.table(producto)

      
    });
 })
 
 