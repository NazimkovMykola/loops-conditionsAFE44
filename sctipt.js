function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

//boolean
// true / false

const str = ""
if (str) {
  console.log("не порожній, або існує")
} else if (str.length > 10) {
  console.log("не порожній довгий рядок")
} else if (str.length < 10) {
  console.log("не порожній короткий рядок")
} else {
  console.log(" порожній ")
}
// тернарний оператор - два варіанти розвитку подій ? :

str.length > 2 ? console.log("рядок є") : console.log("рядка немає")

// погана практика так робити
// str.length > 2 ? str.length > 2 ? alert(1): alert(2) : alert('test')

// const isUser = user.login ? 'залогінений'  : 'не залогінений'

// const userAge = age ? age : '-'

// switch case - коли треба перевіти дуже багато однотипних умов

// red, green, blue, white ... 
const enColor = 'red'

let color

switch (enColor) {
  case "red": {
    color = "червоний"
  }
  case "green": {
    color = "зелений"
  }
  case "blue": {
    color = "синій"
  }
}

// цикли 
// умову коли він має зупинитися 
const n = 0 
// 1 , 2, 3, 4 

// ітератор - змінна/лічильник кількості циклів
for(let i = 1; i <= 100; i++) {
  console.log(i)
}

// згенеруємо на сторінці 100 елементів div 
// випадкового кольору

setInterval(()=> {
  document.querySelectorAll('div').forEach(el => {
    el.remove()
  })
  for (let i = 100; i>=1; i--) {
    const r = randomInteger(0, 255)
    const g = randomInteger(0, 255)
    const b = randomInteger(0, 255)
    const color = `rgb(${r}, ${g}, ${b})`
    const div = document.createElement("div")
    div.style.backgroundColor = color
    div.style.width = i*10+'px'
    div.textContent = i
    document.body.appendChild(div)
  }
}, 2000)

// let iterator = 1
// while (iterator <= 100) {
// iterator++
// }

// do {
// iterator++
// } while (iterator<=100)
