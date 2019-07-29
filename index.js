const inputField = document.getElementById("Value");
const btn = document.getElementById("btn");
const output = document.getElementsByClassName("output")[0];
const clr = document.getElementById("clr");

btn.addEventListener("click", (e) => {
    let Content = parseInt(inputField.value) > 10 ? output.innerHTML = "<br/> Value Must Be Less Than 10 <br/>" : parseInt(inputField.value);
    fetch(`https://randomuser.me/api/?results=${Content}`).then(e => e.json()).then( e => {
        console.table(e.results[0]);
        e.results.forEach(element => {
            let Names = [];
            Names.push(`${element.name.title} ${element.name.first} ${element.name.last}`);
            output.innerHTML += `<img src="${element.picture.large}"></img>` + `<br/> <span id="Name">Name: ` + Names + `</span><br/><span id="Age">Age: ${element.dob.age}</span><br/> <br/>`;
            console.log(Names);

        });
    })
});



clr.addEventListener("click", (e) => {
    inputField.value = "";
    output.innerHTML = "";
});

