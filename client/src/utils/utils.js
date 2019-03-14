const formatDate = date => {
  const newDate = new Date(date).toLocaleDateString('ru-RU');
  const time = new Date(date).toLocaleTimeString('ru-RU');
  return newDate + ' в ' + time;
};

export { formatDate };
