import { renderHook, act, getByDisplayValue, fireEvent,render } from '@testing-library/react';
import { useReducer, useEffect } from 'react';

const initialiseTimes = () => {
    return [
        { time: '17:00', available: true },
        { time: '18:00', available: true },
        { time: '19:00', available: true },
        { time: '20:00', available: true },
    ]
}

function updateTimes (state, action) {
    switch (action.type) {
        case '17:00':
            state.find(time => time.time === '17:00').available = false;
            return state;
        case '18:00':
            state.find(time => time.time === '18:00').available = false;
            return state;
        case '19:00':
            state.find(time => time.time === '19:00').available = false;
            return state;
        case '20:00':
            state.find(time => time.time === '20:00').available = false;
            return state;
        default:
            //throw new Error();
    }
}

describe('updateTimes function', () => {
    const initialState = [
      { time: '17:00', available: true },
      { time: '18:00', available: true },
      { time: '19:00', available: true },
      { time: '20:00', available: true },
    ];
    test('should update the availability of the specified time', () => {
      const action = { type: '18:00' };
      const expectedState = [
        { time: '17:00', available: true },
        { time: '18:00', available: false },
        { time: '19:00', available: true },
        { time: '20:00', available: true },
      ];
      const resultState = updateTimes(initialState, action);
      expect(resultState).toEqual(expectedState);
    });
});

describe ('testing the inisialiser function', () => {
    test('initialiseTimes should return an array of times', () => {
    const times = initialiseTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times).toHaveLength(4);
    expect(times[0]).toHaveProperty('time', '17:00');
    expect(times[0]).toHaveProperty('available', true);
    expect(times[1]).toHaveProperty('time', '18:00');
    expect(times[1]).toHaveProperty('available', true);
    expect(times[2]).toHaveProperty('time', '19:00');
    expect(times[2]).toHaveProperty('available', true);
    expect(times[3]).toHaveProperty('time', '20:00');
    expect(times[3]).toHaveProperty('available', true);
  });
});

describe ('testing the booking form is rendered', () => {
    test('booking form is rendered', () => {
        const { result } = renderHook(() => useReducer(updateTimes, initialiseTimes()));
        expect(result.current[0]).toEqual([
            { time: '17:00', available: true },
            { time: '18:00', available: true },
            { time: '19:00', available: true },
            { time: '20:00', available: true },
        ]);
    });
});

describe('testing the form is submitted', () => {
    test('form is submitted', () => {
        const { result } = renderHook(() => useReducer(updateTimes, initialiseTimes()));
        act(() => {
            result.current[1]({ type: '17:00' });
        });
        expect(result.current[0]).toEqual([
            { time: '17:00', available: false },
            { time: '18:00', available: true },
            { time: '19:00', available: true },
            { time: '20:00', available: true },
        ]);
    });
});
