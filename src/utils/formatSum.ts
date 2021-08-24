const formatSum = (sum: number):string => {
  const regExp = new RegExp('(\\d)(?=(\\d\\d\\d)+([^\\d]|$))/g');

  return `${sum.toString().replace(regExp, '$1 ')} Р`;
};

export { formatSum };
