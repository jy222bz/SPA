/**
 * It handles the drog and the drop.
 *
 * @param {string} id the id of the box.
 */
export function handleDrogDrop (id) {
  const item = document.getElementById(id)
  const dropZone = document.querySelector('.main')
  let x
  let y

  item.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', 'dragstart')
    x = event.offsetX
    y = event.offsetY
    item.focus()
    item.classList.add('dragging')
  })
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging')
  })

  dropZone.addEventListener('dragover', event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  })
  dropZone.addEventListener('drop', event => {
    event.preventDefault()
    item.style.position = 'absolute'
    item.style.top = (event.pageY - y) + 'px'
    item.style.left = (event.pageX - x) + 'px'
    item.blur()
  })
}
