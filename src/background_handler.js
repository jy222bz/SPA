/**
 * It processes the upload of the image and
 * saves it to the local storage and sets the background.
 */
export function processBackground () {
  document.querySelector('.button4').addEventListener('click', function () {
    var input = document.createElement('input')
    input.type = 'file'
    input.accept = '.png, .jpg, .jpeg'
    input.onchange = e => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
        localStorage.setItem('wallpaper', base64String)
        document.body.style.background = `url(data:image/png;base64,${base64String})`
      }
      reader.readAsDataURL(file)
    }
    input.click()
  })
}

/**
 * It sets the background from the local storage.
 */
export function checkBackground () {
  if (localStorage.getItem('wallpaper') !== null) {
    var dataImage = localStorage.getItem('wallpaper')
    document.body.style.background = `url(data:image/png;base64,${dataImage})`
  }
}

/**
 * It clears the background from the local storage.
 */
export function clearBackground () {
  document.querySelector('.button5').addEventListener('click', function () {
    if (localStorage.getItem('wallpaper') !== null) {
      localStorage.removeItem('wallpaper')
      document.body.style.background = '#0984e3'
    }
  })
}
