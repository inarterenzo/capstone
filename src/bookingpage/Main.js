import React from 'react'
import BookingForm from './BookingForm'
import { useReducer,useEffect } from 'react'

const Main = () => {

    const initialiseTimes = () => {
        return [
            { time: '17:00', available: true },
            { time: '18:00', available: true },
            { time: '19:00', available: true },
            { time: '20:00', available: true },
        ]
    }
    function reducer (state, action) {
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
            return state;
            //throw new Error();
        }
    }

    const [times, dispatch] = useReducer(reducer, initialiseTimes());
    useEffect(() => {
        console.log(times)
    }, [times])
  return (
    <>
        <BookingForm times={times} dispatch={dispatch} />
    </>
  )
}

export default Main