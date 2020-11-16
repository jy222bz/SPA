/**
 * It returns a JSON for the chat.
 *
 * @param {string} data the data to be sent to the user.
 * @param {string} id the channel id.
 * @param {string} messageType the type of the message.
 * @param {string} name the user name.
 * @returns {JSON} a JSON object.
 */
export function getJSON (data, id, messageType, name) {
  var json = {
    type: messageType,
    data: data,
    username: name,
    channel: id,
    key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
  }
  return JSON.stringify(json)
}
