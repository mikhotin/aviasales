interface State {
    all: boolean,
    withoutTransfer: boolean,
    withOneTransfer: boolean,
    withTwoTransfers: boolean,
    withThreeTransfers: boolean,
    mainFilter: string
}

const initialState: State = {
    all: false,
    withoutTransfer: false,
    withOneTransfer: false,
    withTwoTransfers: false,
    withThreeTransfers: false,
    mainFilter: 'cheaper'
};

function reducer(state: State, action: { type: string }) {
    switch (action.type) {
        case 'all':
            return {...initialState, all: !state.all}; //если all, то все остальные выключить
        case 'withoutTransfer':
            return {...state, withoutTransfer: !state.withoutTransfer}; //тут выключить all
        case 'withOneTransfer':
            return {...state, withOneTransfer: !state.withOneTransfer};
        case 'cheaper':
            return {...state, mainFilter: 'cheaper'};
        case 'faster':
            return {...state, mainFilter: 'faster'};
        default:
            throw new Error('Something went wrong!');
    }
}

export { initialState, reducer };