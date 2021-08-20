import strings from '../strings';

const days = [
  strings.sunday,
  strings.monday,
  strings.tuesday,
  strings.wednesday,
  strings.thursday,
  strings.friday,
  strings.saturday,
];

const mounths = [
  strings.january,
  strings.february,
  strings.march,
  strings.april,
  strings.may,
  strings.june,
  strings.july,
  strings.august,
  strings.september,
  strings.october,
  strings.november,
  strings.december,
];

const getDate = () => {
  const date = new Date();
  const clock = `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
  const day = days[date.getDay()];
  const mounth = `${date.getDate()} ${mounths[date.getMonth()]}`;

  return `${mounth} - ${day} / ${clock}`;
};

export default getDate;
