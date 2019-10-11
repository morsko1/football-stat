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
