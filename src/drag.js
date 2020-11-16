export default class Draggers {
  constructor (item, target) {
    this.item = item
    this.target = target
    this.dragging = false
  }

  mousemove (event) {
    console.log(2)
    this.item.style.left = event.pageX - this.shiftX - this.rect.x + 'px'
    this.item.style.top = event.pageY - this.shiftY - this.rect.y + 'px'
  }

  init () {
    this.target.addEventListener('mousedown', (event) => {
      console.log(1)
      this.item.style.zIndex = 1000
      this.rect = this.item.parentNode.getBoundingClientRect()
      this.shiftX = event.clientX - this.item.getBoundingClientRect().left
      this.shiftY = event.clientY - this.item.getBoundingClientRect().top

      if (!this.dragging) {
        this.dragging = true
        this.ref = this.mousemove.bind(this)
        this.target.addEventListener('mousemove', this.ref)
      }
    })

    this.target.addEventListener('mouseup', () => {
      console.log(3)
      this.item.style.zIndex = 'unset'
      this.dragging = false
      this.target.removeEventListener('mousemove', this.ref)
      this.item.mousemove = null
      const parent = this.item.parentNode
      parent.removeChild(this.item)
      parent.appendChild(this.item)
    })
    /*
                                                                                                                                                                                            this.item.addEventListener('dragstart', event => this.dragStart(event))
                                                                                                                                                                                            this.item.addEventListener('dragover', event => this.dragOver(event))
                                                                                                                                                                                            this.item.addEventListener('dragleave', event => this.dragLeave(event))
                                                                                                                                                                                            this.item.addEventListener('drop', event => this.drop(event))
                                                                                                                                                                                            this.dropZone = document.querySelector('.main')
                                                                                                                                                                                            this.dropZone.addEventListener('drop', event => {
                                                                                                                                                                                              event.preventDefault()
                                                                                                                                                                                              this.item.style.position = 'absolute'
                                                                                                                                                                                              this.item.style.top = (event.pageY - this.y) + 'px'
                                                                                                                                                                                              this.item.style.left = (event.pageX - this.x) + 'px'
                                                                                                                                                                                              this.item.blur()
                                                                                                                                                                                            })
                                                                                                                                                                                            */
  }

  dragStart (event) {
    event.dataTransfer.setData('text/plain', 'dragstart')
    this.x = event.offsetX
    this.y = event.offsetY
    this.item.focus()
    this.item.classList.add('dragging')
  }

  drop (ev) {
    this.item.classList.remove('dragging')
    ev.preventDefault()
    this.item.style.position = 'absolute'
    this.item.style.top = (ev.pageY - this.y) + 'px'
    this.item.style.left = (ev.pageX - this.x) + 'px'
    this.item.blur()
  }

  dragOver (event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  dragLeave (e) {
    e.target.classList.remove('drag-over')
  }
}
