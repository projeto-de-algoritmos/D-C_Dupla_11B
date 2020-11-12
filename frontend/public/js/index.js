var button = document.querySelector("#submit_button");
var numbers = document.querySelector("#numbers");

button.addEventListener("click", (e) => {
    console.log(numbers.value)
    arrayNum = numbers.value.split(' ');
    console.log(arrayNum)

    e.preventDefault();
    fetch('http://localhost:3000/imparpar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: {arrayNum} })
    }).then((data) => {
        console.log(data)
        return data.json()
    }).then((data) => {
        console.log(data)
        result = ''
        data.forEach(element => {
           result += ' ' + element;
        });
            document.querySelector("#result").value = result
        })
})