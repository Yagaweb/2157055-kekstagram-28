const PHOTO_COUNTS = 25;
const LIKE_MAX = 200;
const LIKE_MIN = 15;
const COMMENTS_COUNTS = 15;
const NAMES = [
  'Савицкая Людмила Алексеевна',
  'Маняхин Пётр Борисович',
  'Железнова Мария Михайловна',
  'Постернак Алексей Евгеньевич',
  'Кузьмина Людмила Гавриловна',
  'Захаров Андрей Вячеславович',
  'Перл Роман Александрович',
  'Хисамова Регина Фаритовна',
  'Мурадов Мурад Абдулгалимович',
  'Маяковская Екатерина Алексеевна',
  'Кругликов Кирилл Игоревич'
];
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Иметь мягкое сердце в жестоком мире — это сила, а не слабость',
  'Смысл жизни состоит в том, чтобы умереть молодым ... как можно позже',
  'Пятница — мое второе любимое слово',
  'Если бы я хорошо себя вела, я бы умерла от скуки» — Таллула Бэнкхед',
  'Я могу жить без денег, но я не могу жить без любви',
  'Вы должны научиться выходить из-за стола, когда любовь больше не подается',
  'Мечтай по-крупному, малыш!',
  'Я никогда не делаю одну и ту же ошибку дважды. Я делаю это пять или шесть раз – для уверенности',
  'Я не ленивый. Я нахожусь в режиме энергосбережения'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const makeIndex = () => {
  let currentIndex = 0;

  return() => {
    currentIndex += 1;
    return currentIndex;
  };
};

const createCommentId = makeIndex ();

const createMassage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS_LINES)
  ).join(' ');

const createComment = () => ({
  id:createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMassage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENTS_COUNTS) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PHOTO_COUNTS}, (_, pictureIndex) =>
    createPhoto(pictureIndex + 1)
  );

getPictures();