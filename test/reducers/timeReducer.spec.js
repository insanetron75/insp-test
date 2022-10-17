import { types } from '../../src/actions/timeActions';
import reducer from '../../src/reducers/timeReducer';

describe('Time reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            timeRemaining: 0,
        });
    });

    it('should set remaining time', () => {
        const action = {
            type: types.SET_REMAINING_TIME,
            timeRemaining: 234,
        }
        expect(reducer(undefined, action)).toEqual({
            timeRemaining: 234,
        });
    });

    // I have run out of time unfortunetly, I would test the call is only made every 10 seconds
    // by mocking the function, counting how many times it is called in a 20 second period
});
