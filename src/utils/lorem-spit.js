const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur, nisi a volutpat tempus, sem quam posuere sapien, quis luctus ligula purus id nibh. Phasellus eleifend nec odio luctus vulputate. Cras non porttitor tellus. In imperdiet scelerisque pulvinar. Vestibulum felis sapien, venenatis in dui ut, lobortis fringilla enim. Maecenas commodo elit at magna consectetur, ut hendrerit magna commodo. Sed lorem dolor, faucibus eu gravida et, varius et erat. Donec mattis consectetur elementum. Quisque faucibus magna sed eleifend hendrerit. Proin ex nunc, venenatis vel mauris et, ullamcorper dictum lectus. Nunc dapibus sit amet lorem iaculis tristique. Pellentesque in orci consectetur, varius est vel, ultrices mi. Nunc est velit, mollis et rhoncus quis, pretium sed purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vitae pulvinar velit, at consequat leo. Etiam justo erat, maximus porta nisl in, ultrices lobortis nunc. Sed pulvinar nisi magna, at aliquet ipsum maximus id. Donec sagittis ex eget tincidunt condimentum. Nullam sit amet sem mi. Duis hendrerit interdum lectus, nec tempor ante iaculis et. Nulla eu orci condimentum odio efficitur egestas et sed mauris. Vivamus eu odio a massa vulputate lacinia vitae et eros. Aenean sit amet odio ut augue lobortis commodo nec ac mauris. Donec sapien arcu, bibendum ac vehicula vitae, lobortis id purus. Fusce fermentum varius mollis. Praesent consectetur, mi quis egestas rhoncus, sem ipsum fringilla risus, et pretium nisi arcu in risus. Maecenas pharetra orci eu ipsum gravida, quis consectetur elit vestibulum. Maecenas efficitur leo non varius posuere. Nam quis lobortis urna. Aliquam dignissim semper lorem, nec interdum lectus varius ut. Donec volutpat volutpat tristique. Curabitur finibus sed dolor nec tempus. Quisque semper porta mi non fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam finibus volutpat augue id ornare. In auctor massa ut venenatis luctus. Quisque faucibus faucibus sem ac luctus. Ut non urna non felis sagittis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur justo massa, eget pulvinar turpis tincidunt id. Cras luctus lacus et blandit laoreet. Donec quis tempus ligula, eu pretium lacus. Donec semper felis ac arcu ornare, ac porttitor risus suscipit. Curabitur malesuada sagittis diam, at posuere augue efficitur ultricies. In eu odio convallis, ullamcorper mi non, blandit nibh. Vivamus tortor felis, molestie id maximus et, auctor id lorem. Ut sem mauris, vestibulum vel rhoncus eu, iaculis non elit. Sed molestie luctus neque, ac pulvinar ligula finibus eget. Suspendisse potenti. Aliquam at lacus mattis, semper metus efficitur, semper diam. Cras eget ex purus. Proin tellus mauris, dictum sed convallis eu, auctor quis libero. Aenean vehicula elit ac nunc maximus fringilla et in quam. Fusce porta tristique euismod. Nunc risus ligula, mattis vitae porta vel, vulputate et ligula. Proin vitae elit a turpis iaculis efficitur.';

const LOREM_IPSUM_WORDS = LOREM_IPSUM.split(' ');

/**
 * @param {number} numFullStops
 */
function phrase(numFullStops) {
  let lorem = LOREM_IPSUM;
  let result = '';

  for (let index = 1; index <= numFullStops; index++) {
    // first dot
    const end = lorem.indexOf('.');
    const slice = lorem.slice(0, end + 1);
    result += slice + ' ';
    lorem = lorem.replace(slice, '').trimLeft();
  }

  return result;
}

function word() {
  const twoWords = Math.round(Math.random());

  return twoWords ? `${randomWord()} ${randomWord()}` : randomWord();
}

function randomWord() {
  const idx = Math.round(Math.random(1) * LOREM_IPSUM_WORDS.length - 2);
  return LOREM_IPSUM_WORDS[idx].replace(',', '').replace('.', '').toUpperCase();
}

/**
 * @param {"word" | "small" | "medium" | "large"} size
 */
function loremSpit(size) {
  switch (size) {
    case 'small':
      return phrase(2);

    case 'medium':
      return phrase(4);

    case 'large':
      return phrase(6);

    case 'word':
      return word();

    default:
      console.warn('Invalid loremSpit switch case:', size);
  }
}

export default loremSpit;
