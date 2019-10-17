import * as actionsGame from '../actions';

const initialState = {
    game: null,
    isGameLoading: false,
    gameLoadingError: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionsGame.SET_GAME:
            return {
                ...state,
                game: action.payload.game
            };
        case actionsGame.GET_GAME:
            return {
                ...state,
                isGameLoading: true
            };

        case actionsGame.GET_GAME_SUCCESS:
            return {
                ...state,
                game: action.payload.data,
                isGameLoading: false
            };

        case actionsGame.GET_GAME_FAILURE:
            return {
                ...state,
                isGameLoading: false,
                gameLoadingError: action.payload.error
            };

        default:
            return state;
    }
};
