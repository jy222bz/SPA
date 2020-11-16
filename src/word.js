/**
 * @author Jacob Yousif
 */

/**
 * This method picks a word from the array randomly and returns it.
 *
 * @returns {string} the chosen word.
 */
export function getWord () {
  const words = ['praise', 'environment', 'operational', 'inhibition', 'wind',
    'step', 'audience', 'swing', 'bang', 'clue', 'cheat', 'retain', 'diagram',
    'posture', 'speed', 'suitcase', 'debate', 'left', 'season', 'neglect', 'relieve', 'glasses',
    'praise', 'environment', 'operational', 'inhibition', 'wind', 'medieval', 'publish', 'pudding',
    'fill', 'grind', 'faint', 'salesperson', 'fan',
    'James', 'John', 'Adam', 'Kelly', 'Sanders', 'Billy', 'Hello', 'Anna', 'Kalle',
    'Ola', 'Magnus', 'Sammy', 'Sandra', 'Sara', 'Jennifer', 'Sussan', 'Sanna', 'Sally', 'depression',
    'carriage', 'neighborhood', 'temptation', 'researcher', 'econobox', 'treatment', 'sunshine', 'deviation',
    'fragment', 'publisher', 'repetition', 'incident', 'recession', 'complain', 'addicted', 'birthday', 'election',
    'evaluate', 'familiar', 'motorist', 'astonishing', 'frighten', 'relevance', 'restrict', 'difficult', 'professional',
    'sequence', 'appendix', 'intelligence', 'surround', 'elaborate', 'cylinder', 'cemetery', 'coincidence', 'ancestor',
    'abnormal', 'inhibition', 'resource', 'craftsman', 'detective', 'electronics', 'different', 'overlook', 'diplomatic',
    'potential', 'sickness', 'location', 'guerrilla', 'aquarium', 'sanctuary', 'difference', 'underline', 'association',
    'foreigner', 'government', 'prejudice', 'productive', 'encourage', 'butterfly', 'deprivation', 'avant', 'garde',
    'expansion', 'advantage', 'copyright', 'authority', 'waterfall', 'hospitality', 'requirement', 'instrument',
    'respectable', 'integrated', 'hypnothize', 'character', 'confusion', 'population', 'provision', 'qualified',
    'chimpanzee', 'deteriorate', 'lifestyle', 'mechanical', 'paragraph', 'participate', 'recording', 'representative',
    'treasurer', 'convenience', 'landowner', 'nomination', 'contradiction', 'conspiracy', 'wisecrack', 'executive',
    'earthquake', 'preference', 'construct', 'fabricate', 'disturbance', 'preference', 'competition', 'admiration',
    'satisfaction', 'articulate', 'conception', 'publication', 'commission', 'interactive'
  ]
  return words[Math.floor(Math.random() * words.length)].toUpperCase()
}
