const microsoft_line__third = document.querySelector('.microsoft_line__third')
const microsoft = document.querySelector('.microsoft')

microsoft_line__third.addEventListener('mouseenter', (e) => {
    microsoft.classList.add('animate');
})

microsoft_line__third.addEventListener('mouseleave', (e) => {
  microsoft.classList.remove('animate')
})
