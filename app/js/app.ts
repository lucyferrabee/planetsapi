
async function getData() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth')
    let data = await response.json()
    return data
}

async function foo() {
    let data = await getData()
    document.querySelector('#name').innerHTML = (data.name + '<br>');
    }

async function getData2() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth')
    let data2 = await response.json()
    return data2
}

async function foo2() {
    let data2 = await getData()
    document.querySelector('#density').innerHTML = (data2.density + '<br>');
}

async function getData3() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth')
    let data3 = await response.json()
    return data3
}

async function foo3() {
    let data3 = await getData()
    document.querySelector('#gravity').innerHTML = (data3.gravity + '<br>');
}

async function getData4() {
    let response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth')
    let data4 = await response.json()
    return data4
}

async function foo4() {
    let data4 = await getData()
    document.querySelector('#radius').innerHTML = (data4.meanRadius + '<br>');
}

foo()
foo2()
foo3()
foo4()