export default class DragHandler {
  constructor (item, target) {
    this.item = item
    this.target = target
    this.dropZone = document.querySelector('.main')
  }

  init () {
    this.item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', 'dragstart')
      this.x = event.offsetX
      this.y = event.offsetY
      this.item.classList.add('dragging')
    })
    this.item.addEventListener('dragend', () => {
      this.item.classList.remove('dragging')
    })

    this.dropZone.addEventListener('dragover', event => {
      event.preventDefault()
      event.dataTransfer.dropEffect = 'move'
    })
    this.dropZone.addEventListener('drop', event => {
      this.item.style.top = (event.pageY - this.y) + 'px'
      this.item.style.left = (event.pageX - this.x) + 'px'
      const parent = this.item.parentNode
      parent.removeChild(this.item)
      parent.appendChild(this.item)
    })
  }
}
