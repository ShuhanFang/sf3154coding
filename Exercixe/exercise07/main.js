const subjects = ['cat', 'dog', 'bird', 'turtle', 'hamster', 'fish', 'rat', 'snake', 'lizard'];
const verbs = ['eats', 'sleeps', 'jumps', 'runs', 'swims', 'flies', 'hides', 'crawls', 'dances'];
const objects = ['fish', 'bone', 'carrot', 'toy', 'ball', 'stick', 'book', 'computer', 'plant'];

const getRandomWord = arr => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const generateSentence = () => {
  const subject = getRandomWord(subjects);
  const verb = getRandomWord(verbs);
  const object = getRandomWord(objects);

  return `${subject} ${verb} ${object}.`;
};

const button = document.querySelector('button');
const poem = document.querySelector('.poem');

button.addEventListener('click', () => {
  const sentence = generateSentence();
  poem.textContent = sentence;
});
