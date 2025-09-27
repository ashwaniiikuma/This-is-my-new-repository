let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll
('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            input.value = string;
        }
        else{
              string += e.target.innerHTML;
        input.value = string;
        }
    })

    // Dark/light toggel code

    let toggleBtn = document.getElementById("toggle");
    let body = document.body;

    body.classList.add("darkmode"); //default dark mode

    toggleBtn.addEventListener("click", () =>{
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Dark-Mode";

        }
        else{
            toggleBtn.textContent = "Light Mode";
        }
    });

})