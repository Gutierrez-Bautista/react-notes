const btns = document.querySelectorAll('button')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id')

    // llamamos a un servicio para actualizar el me gusta
    // toggleLike(id)

    if (btn.classList.contains('liked')) {
      btn.textContent = 'like'
    } else {
      btn.textContent = 'dislike'
    }
    btn.classList.toggle('liked')
  })
})