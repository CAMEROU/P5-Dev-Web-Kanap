fetch("http://localhost:3000/api/products")
.then((res)  => res.json())
.then((data) => addproduct(data))

function addproduct(data){
const imageUrl =  data[0].imageUrl 
  
  const anchor = document.createElement("a")
  anchor.href= imageUrl
  anchor.text = "Kanap Sinopé"
  
  const items = document.querySelector("#items")
  items.appendChild(anchor)
}