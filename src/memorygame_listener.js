/**
 * @author Jacob Yousif
 * @class A view controller.
 * It initializes the control listeners for the memory game.
 */
export default class MemoryGameListeners {
  init (item, id, images, dropdown) {
    document.getElementById('item1' + id).addEventListener('click', function () {
      dropdown.style.display = 'none'
      item.init()
      item.setImages(images.get16ShuffledImages(), 16)
    })
    document.getElementById('item2' + id).addEventListener('click', function () {
      dropdown.style.display = 'none'
      item.init()
      item.setImages(images.get4ShuffledImages(), 4)
    })
    document.getElementById('item3' + id).addEventListener('click', function () {
      dropdown.style.display = 'none'
      item.init()
      item.setImages(images.get8ShuffledImages(), 8)
    })
  }
}
