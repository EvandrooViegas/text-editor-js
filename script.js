const textAreaElem = document.querySelector("#text-area")

const selectFont = document.querySelector("#font-select")
const selectColors = document.querySelector("#colors-select")
const selectSize = document.querySelector("#size-select")

selectFont.addEventListener("change", () => {
    document.execCommand("fontName", false, selectFont.value)
})

selectColors.addEventListener("change", () => {
    document.execCommand("foreColor", false, selectColors.value)
})



selectSize.addEventListener("change", () => {
    document.execCommand("fontSize", false, selectSize.value)
})


const getCommand = (command) => {
    if(command == "image") {
        const imageLink = prompt("Image Link")
        const img = document.createElement("img")
        img.src = imageLink
        textAreaElem.append(img)
    } else {
        document.execCommand(command)
    }
}