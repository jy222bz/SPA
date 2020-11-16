/**
 * It handels the drag.
 * The element will be dragged only from its header.
 * Thus, it cannot be dragged from anywhere else.
 *
 * @param {object} item the main div.
 * @param {object} target the header.
 */
export function onDrag (item, target) {
  target.onmousedown = function (event) {
    /**
     * To remember the distance from the pointer to the left-upper
     * corner of the item.
     */
    const shiftX = event.clientX - item.getBoundingClientRect().left
    const shiftY = event.clientY - item.getBoundingClientRect().top

    /**
     * To make it located relative to the body
     */
    item.style.zIndex = 1000
    document.body.append(item)

    /** It moves the elements based on the values.
     *
     * @param {number} pageX the x value.
     * @param {number} pageY the y value.
     */
    moveAt(event.pageX, event.pageY)

    /** It moves the elements based on the values.
     *It adds dragging class to change the opacity while its dragging.
     *
     * @param {number} pageX the x value.
     * @param {number} pageY the y value.
     */
    function moveAt (pageX, pageY) {
      item.classList.add('dragging')
      item.style.left = pageX - shiftX + 'px'
      item.style.top = pageY - shiftY + 'px'
    }

    /**
     * It handels the moves.
     *
     * @param {Event} ev the event.
     */
    function onMouseMove (ev) {
      moveAt(ev.pageX, ev.pageY)
    }
    /**
     * Add an event listener and refernce the method.
     */
    document.addEventListener('mousemove', onMouseMove)

    /**
     * Add an event listener for the drop and remove the class.
     */
    item.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove)
      item.classList.remove('dragging')
      item.onmouseup = null
    }
  }

  item.ondragstart = function () {
    return false
  }
}
