import filter from 'leo-profanity';

const ru = filter.getDictionary('ru');
const en = filter.getDictionary('en');

filter.addDictionary([...ru, ...en]);

export default filter;
