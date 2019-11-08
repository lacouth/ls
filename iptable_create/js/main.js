let button = document.querySelector('button')
let ipInput = document.querySelector('#ip')
let maskInput = document.querySelector('#mask')
let versionInput = document.querySelector('#version')
let tbody = document.querySelector('tbody')

button.addEventListener('click',(event)=>{
                                            event.preventDefault()
                                            addElementInTable()
                                        })

function addElementInTable(){
    const ip = ipInput.value || '-'
    const mask = maskInput.value || '-'
    const version = versionInput.value || '-'

    let row = `<tr><td>${ip}</td><td>${mask}</td><td>${version}</td></tr>`
    tbody.insertAdjacentHTML('beforeend',row)
}