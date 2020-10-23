import states from '../data/states';

export default () => {
    const foundStates = {};
    states.forEach(state => {
        foundStates[state] = false;
    })
    return foundStates;
}