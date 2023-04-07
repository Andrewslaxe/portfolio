// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const contents = document.querySelectorAll('section')

hamMenuBtn.addEventListener('click', () => {
  contents.forEach(section => {
    section.classList.toggle('section-blur')
  })
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }

})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
    contents.forEach(section => {
      section.classList.toggle('section-blur')
    })
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const colorPicker = document.getElementById("color-picker")


colorPicker.addEventListener("input", function () {
  const colorBackground = colorPicker.value
  const fontColor = getContrastColor(colorBackground)
  const negativefontColor = fontColor === '#ffffff' ? '#000000' : '#ffffff'
  let root = document.documentElement

  root.style.setProperty('--letterColor', fontColor)
  root.style.setProperty('--negativefontColor', negativefontColor)
  root.style.setProperty('--themeColor', colorBackground)
  root.style.setProperty('--themeBackground', colorBackground + 'ad')
})

function getContrastColor(color) {
  const brightness = Math.round(((parseInt(color.slice(1, 3), 16) * 299) +
    (parseInt(color.slice(3, 5), 16) * 587) +
    (parseInt(color.slice(5, 7), 16) * 114)) / 1000)
  return (brightness > 125) ? '#000000' : '#ffffff'
}