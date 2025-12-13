const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

document.querySelector('h1').getAttribute('class')

document.querySelector('h1').setAttribute('title', 'Hello World!!!')

h1.style.color = 'hotpink'

const allLinks = document.querySelectorAll('a')

// for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
    link.style.color = 'teal'
    link.style.textDecoration = 'none'
    link.style.fontWeight = '700'
    link.style.fontFamily = 'cursive'
}
