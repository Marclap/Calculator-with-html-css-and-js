const data = () => {
    return document.getElementById('textview')
}

const insert = (num) => {
    let form = data()
    form.value = form.value + num
}

const equal = () => {
    let form = data()
    let info = form.value
    if (info) form.value = eval(info)
}

const clean = () => {
    let form = data()
    form.value = ''
}

const back = () => {
    let form = data()
    form.value = form.value.substring(0, form.value.length - 1)
}
