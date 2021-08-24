import moment from 'moment';

const formatMinutes = (mins: number):string => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
};

const formatStartEndTime = (date: string, duration: string):string => {
    const dateStart = moment(date).toDate();
    const startTime = moment(dateStart).format('H:mm');
    const endTime = moment(dateStart).add(duration, 'm').format('H:mm');

    return `${startTime} - ${endTime}`;
};

export { formatMinutes, formatStartEndTime };
