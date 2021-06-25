let input = document.getElementById('textarea')
let output = document.getElementById('output')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let string = input.value
    if (string.match(/[a-z]/g) || string.match(/\W/g)) {
        window.alert("Please enter numbers only!")
    } else if (string.match(/[2-9]/g || string == '')) {
        window.alert("Please enter a binary number!")
    } else {
        let bin = parseInt(string, 2)
        output.value = bin
    }
})