import Ticket from '../types';

const calculateDuration = (item: Ticket):number => {
    const [ firstSegment, secondSegment ] = item.segments;

    return firstSegment.duration + secondSegment.duration;
};

const mainSort = (type: string, items: Ticket[]) => {
    const inner = (a:Ticket, b:Ticket) => {
        if (type === 'cheaper') {
            const durationA = calculateDuration(a);
            const durationB = calculateDuration(b);
            if (durationA < durationB) return -1;
            if (durationA > durationB) return  1;
            return 0;
        } else {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return  1;
            return 0;
        }
    };

    return [...items].sort(inner);
};

const sortWithTransfers = () => {

};

export { mainSort, sortWithTransfers };
