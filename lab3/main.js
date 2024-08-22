let allItems = document.querySelector('#all-items')
let site = ["Wikipedia", "Youtube", "Facebook"]

// เพิ่มข้อมูล sites แต่ละ item ใน ul จนครบ โดยใช้วิธี el.createElement
// ** ห้ามใช้วิธีแก้ innerHTML

// site.forEach( el => {
//   allItems.innerHTML += `<li>${el}</li>`
// })

site.forEach(el => {
    const li = document.createElement('li')
    li.textContent = el
    allItems.append(li)
})



const btn1 = document.querySelector('#btn1')
btn1.onclick = function () {

    const sortList = []

    for (let el of allItems.children) {
        sortList.push(el.textContent)
    }

    sortList.sort()

    for (let i = 0; i < allItems.children.length; i++) {
        allItems.children[i].textContent = sortList[i]
    }
}
