import { getChatHTML } from './chatHTML_maker.js'
import { getGameHTML } from './gameHTML_maker.js'
import { processBackground, checkBackground, clearBackground } from './background_handler.js'
import { getHangmanHTML } from './hangmanHTML_maker.js'
import { generateID } from './id_generator.js'
import HangmanHandler from './hangman_handler.js'
import ImageHolder from './images.js'
import MemoryGameHandler from './memory_game.js'
import { openPrompt, forceUsername } from './handle_username.js'
import ChatHandler from './chat_handler.js'
import ChatListener from './chat_listeners.js'
import MemoryGameListeners from './memorygame_listener.js'
import { onDrag } from './drag_system.js'

/** A field for the Map. */
const objectContainer = new Map()
/** A field for the index of the div. */
var divIndex = 1

run()

/**
 * The main run method.
 */
function run () {
  checkBackground()
  processBackground()
  clearBackground()
  handleChat()
  handleHangman()
  handleGame()
  document.getElementById('c6').addEventListener('click', function () { deleteAll() })
}

/**
 * It deletes all items.
 */
function deleteAll () {
  if (objectContainer.size !== 0) {
    objectContainer.forEach((value, key) => {
      document.getElementById('main_div' + key).remove()
      var obj = get(key)
      if (obj.hasTimer()) {
        obj.stopTiming()
      }
      objectContainer.delete(key)
    })
    divIndex = 1
  }
}
/**
 * It adds an object to the map.
 *
 * @param {string} id the id of the object.
 * @param {object} object the object that controlls one instance.
 */
function add (id, object) {
  objectContainer.set(id, object)
}

/**
 * It handels the hangman.
 */
function handleHangman () {
  document.getElementById('c3').addEventListener('click', function () {
    var id = generateID()
    var div = getHangmanHTML(id)
    locateDiv(div)
    document.getElementById('main').appendChild(div)
    var game = new HangmanHandler(id)
    add(id, game)
    onDrag(document.getElementById('main_div' + id),
      document.getElementById('par1' + id))
    document.getElementById('next_btn' + id).addEventListener('click', function () {
      game.run()
    })
    document.getElementById('new_game_btn' + id).addEventListener('click', function () {
      game.initGame()
    })
    document.getElementById('close_btn3' + id).addEventListener('click', function () { deleteObject(id) })
  })
}

/**
 * It handels the memory game.
 */
function handleGame () {
  document.getElementById('c1').addEventListener('click', function () {
    var id = generateID()
    var div = getGameHTML(id)
    locateDiv(div)
    document.getElementById('main').appendChild(div)
    var images = new ImageHolder()
    var game = new MemoryGameHandler(id)
    var dropdown = document.getElementById('dropdown' + id)
    add(id, game)
    onDrag(document.getElementById('main_div' + id),
      document.getElementById('time' + id))
    var gameListener = new MemoryGameListeners()
    gameListener.init(game, id, images, dropdown)
    document.getElementById('close_btn' + id).addEventListener('click', function () { deleteObject(id) })
  })
}

/**
 * It handles the chat comms.
 */
function handleChat () {
  document.getElementById('c2').addEventListener('click', function () {
    var isValidName = forceUsername()
    if (isValidName) {
      var id = generateID()
      var div = getChatHTML(id)
      locateDiv(div)
      document.getElementById('main').appendChild(div)
      var chatter = new ChatHandler(id)
      add(id, chatter)
      onDrag(document.getElementById('main_div' + id),
        document.getElementById('par5' + id))
      var chatListener = new ChatListener()
      chatListener.init(chatter, id)
      document.getElementById('close_btn20' + id).addEventListener('click', function () { deleteObject(id) })
    }
  })
}

/**
 * It deletes the object and the div.
 *
 * @param {string} id the id of the object.
 */
function deleteObject (id) {
  var obj = get(id)
  if (obj.hasTimer()) {
    obj.stopTiming()
  }
  objectContainer.delete(id)
  document.getElementById('main_div' + id).remove()
  divIndex--
}

/**
 * It handels the set name button.
 */
document.getElementById('c7').addEventListener('click', function () {
  openPrompt(objectContainer)
})

/**
 * It returns the object.
 *
 * @param {string} id the id of the object.
 * @returns {object} the target object.
 */
export function get (id) {
  return objectContainer.get(id)
}

/**
 * It sets the x, y and the z index of the div.
 *
 * @param {object} div the html div.
 */
function locateDiv (div) {
  div.style.top = divIndex * 1 + 'px'
  div.style.left = divIndex * 1 + 'px'
  div.style.zIndex = divIndex++ + 1
}
