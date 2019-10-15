import * as actionsGame from '../actions';

const initialState = {
    game: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsGame.SET_GAME:
            return {
                ...state,
                game: action.payload.game
            };

        default:
            return state;
    }
};
