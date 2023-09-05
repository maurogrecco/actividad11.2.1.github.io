const URL = "https://jsonplaceholder.typicode.com/users"

let firstname = document.getElementById("name");
let lastname = document.getElementById("lastname");
let birthday = document.getElementById("birthday");
let submit = document.getElementById("submit");

const info = {
    nombre : firstname.value,
    apellido : lastname.value,
    nacimiento : birthday.value
}

const method = {
    method : "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(info),
};

async funtion postInfo(URL){
    let response = await fetch (URL, method)
    if (response.ok) {
        console.log("Estado: ", response.status)

    } else {
        alert("Estado: ", response.status)
    }
}

submit.addEventListener("click", (event)=>{
    event.preventDefault()
    postInfo(URL, method)
})