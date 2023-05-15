let refreshBtn = document.querySelector("#refreshBtn");
let saveBtn = document.querySelector("#saveBtn");
let loadBtn = document.querySelector("#loadBtn");
let container = document.querySelector(".container")
let apiUrl = "https://jsonplaceholder.typicode.com/todos";


async function getData () {
    let response = await fetch(apiUrl);
    let jsonData = await response.json();
    return jsonData;
}

function displayData (data) {
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let divTag = document.createElement("div");
        divTag.className = "list-item";
        let h3Tag = document.createElement("h3");
        h3Tag.className = "title";
        h3Tag.innerHTML = element.title;
        let inputTag = document.createElement("input");
        inputTag.className = "completed";
        inputTag.type = "checkbox";
        inputTag.checked = element.completed;;
        container.append(divTag);
        divTag.append(h3Tag);
        divTag.append(inputTag);
    }
};

refreshBtn.addEventListener("click", displayData(getData()))

async function saveData () {
    let data = await getData();
    localStorage.setItem("todos", JSON.stringify(data))
}

saveBtn.addEventListener("click", saveData())

async function loadData () {
    let data = JSON.parse(localStorage.getItem("todos"))
    displayData(data)
}

loadBtn.addEventListener("click", loadData())