const root = document.querySelector('#root')
const ul = document.createElement('ul')
root.append(ul)

let newItem = true

while (newItem) {
    newItem = prompt('Enter :')
    if (!newItem) {
        break 
    }
    const li = document.createElement('li')
    li.textContent = newItem
    ul.append(li)
}

console.log(root.outerHTML)