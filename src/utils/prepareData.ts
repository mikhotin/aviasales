import _ from 'lodash';

import Ticket from '../types';

const prepareData = (data: Ticket[]) => data.map((item: Ticket) => ({ ...item, id: _.uniqueId() }));

export default prepareData;
