const images = document.querySelectorAll('img')

const options = {
    rootMargin: '100px'
}

const io = new IntersectionObserver((entries, observer)=> {
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        console.log(entry);
        const image = entry.target

        image.src = entry.target.dataset.src
        image.classList.add('appear')

        observer.unobserve(image)
      }
    })
}, options)

images.forEach(image => io.observe(image))
