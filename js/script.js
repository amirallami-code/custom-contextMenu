let $ = document
let contextMenu = $.getElementById('contextMenu')
let body = $.body

body.addEventListener('contextmenu', function (event) {

    event.preventDefault()

    contextMenu.style.display = 'block'
    contextMenu.style.left = event.pageX
    contextMenu.style.top = event.pageY
})
body.addEventListener('click', function () {
    contextMenu.style.display = 'none'
})
body.addEventListener('keypress', function (event) {
    if (event.code === "Escape") {
        contextMenu.style.display = 'none'
    }
})
