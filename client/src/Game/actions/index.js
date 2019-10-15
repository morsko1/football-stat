export const SET_GAME = 'game/SET_GAME';

export const setGame = (game) => ({
    type: SET_GAME,
    payload: {
        game
    }
});
