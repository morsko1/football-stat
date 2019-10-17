export const getLeagueByCountry = (country) => {
    let league = '';
    switch (country.toLowerCase()) {
        case 'england':
            league = 'E0';
            break;
        case 'germany':
            league = 'D1';
            break;
        case 'italy':
            league = 'I1';
            break;
        case 'spain':
            league = 'SP1';
            break;
        case 'france':
            league = 'F1';
            break;
        default:
            break;
    }
    return league;
};

export const getClassNameByGameResult = (gameResult) => {
    let resultClass = '';
    switch (gameResult.toUpperCase()) {
        case 'W':
            resultClass = 'win';
            break;
        case 'D':
            resultClass = 'draw';
            break;
        case 'L':
            resultClass = 'lose';
            break;
        default:
            break;
    }
    return resultClass;
};

export const getLeagueNameById = (leagueId) => {
    let resultName = '';
    switch (leagueId.toUpperCase()) {
        case 'E0':
            resultName = 'England Premier League';
            break;
        case 'D1':
            resultName = 'Germany Bundesliga';
            break;
        case 'I1':
            resultName = 'Italy Serie A';
            break;
        case 'SP1':
            resultName = 'Spain Primera';
            break;
        case 'F1':
            resultName = 'France League One';
            break;
        default:
            break;
    }
    return resultName;
};
export const getSeasonBySeasonId = (seasonId) => {
    return `20${seasonId.slice(0, 2)}/20${seasonId.slice(2)}`
};
