/**
 * @author Jacob Yousif
 * @class ImageHolder
 * It manages the images.
 */
export default class ImageHolder {
  constructor () {
    /** @private */
    this.images16 = ['img/card_img/1.png', 'img/card_img/1.png', 'img/card_img/2.png', 'img/card_img/2.png',
      'img/card_img/3.png', 'img/card_img/3.png', 'img/card_img/4.png', 'img/card_img/4.png',
      'img/card_img/5.png', 'img/card_img/5.png', 'img/card_img/6.png', 'img/card_img/6.png',
      'img/card_img/7.png', 'img/card_img/7.png', 'img/card_img/8.png', 'img/card_img/8.png'
    ]
    /** @private */
    this.images4 = ['img/card_img/1.png', 'img/card_img/1.png', 'img/card_img/2.png', 'img/card_img/2.png']
    /** @private */
    this.images8 = ['img/card_img/1.png', 'img/card_img/1.png', 'img/card_img/2.png', 'img/card_img/2.png',
      'img/card_img/3.png', 'img/card_img/3.png', 'img/card_img/4.png', 'img/card_img/4.png'
    ]
  }

  /**
   * This methods returns shuffled array contains the paths of the images.
   * The size is 16 for 4 by 4 matrix.
   *
   * @returns {string[]} images the shuffeled paths of the images.
   */
  get16ShuffledImages () {
    return shuffleImages(this.images16)
  }

  /**
   * This methods returns shuffled array contains the paths of the images.
   * The size is 4 for 2 by 2 matrix.
   *
   * @returns {string[]} images the shuffeled paths of the images.
   */
  get4ShuffledImages () {
    return shuffleImages(this.images4)
  }

  /**
   * This methods returns shuffled array contains the paths of the images.
   * The size is 8 for 2 by 4 matrix.
   *
   * @returns {string[]} images the shuffeled paths of the images.
   */
  get8ShuffledImages () {
    return shuffleImages(this.images8)
  }

  /**
   * This methods returns the path for the cover image.
   *
   * @returns {string} ithe path for the cover image.
   */
  getCoveredImage () {
    return 'img/card_img/0.png'
  }
}

/**
 * This methods shuffles the paths of the images in the array.
 *
 * @param {string[]} images the array of the paths of the images.
 * @returns {string[]} images the shuffeled paths of the images.
 */
function shuffleImages (images) {
  let counter = images.length
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter--
    const temp = images[counter]
    images[counter] = images[index]
    images[index] = temp
  }
  return images
}
