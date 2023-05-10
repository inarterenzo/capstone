import React, { useEffect } from 'react'
import { useState } from 'react'

const style = {
    display: 'grid',
    maxWidth: '600px',
    gap: '20px',
    backgroundColor: '#edefee',
    padding: '20px',
    marginTop:'5vh',
    marginLeft:'auto',
    marginRight:'auto',
}

const availableTimes = [
    { time: '17:00', available: true },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
    { time: '20:00', available: true },
    { time: '21:00', available: true },
    { time: '22:00', available: true },
]

const BookingForm = (props) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion,setOccasion] = useState('Nothing')
    const [submit, setSubmit] = useState(false)

    const handleDate = (event) => {
        setDate(event.target.value)
    }
    const handleTime = (event) => {
        setTime(event.target.value)
    }
    const handleGuests = (event) => {
        setGuests(event.target.value)
    }
    const handleOccasion = (event) => {
        setOccasion(event.target.value)
    }
    const AvailableTimes = props.times.map((time) => {
        if (time.available) {
            return <option key={time.time}>{time.time}</option>
        } else {
            return <option key={time.time}disabled>{time.time}</option>
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.dispatch({ type: time })
        setSubmit(true)
    }

    const today = new Date().toISOString().split("T")[0];
    const endMonth = new Date(today).toISOString().split("T")[0];
    console.log(endMonth.split("T")[0])

  return (
    <>
        {
            submit ?
            <div style={style} aria-label="A confirmation message of your booking.">
                <h3>Your reservation</h3>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p>Number of guests: {guests}</p>
                <p>Occasion: {occasion}</p>
                <div style={{display:'flex',flexDirection:'row',gap:'2vw'}}>
                    <h4>See you soon!</h4><h4 role="button" onMouseDown={() => setSubmit(false)}>Make another reservation.</h4>
                </div>
            </div>
              :
              <form style={style} onSubmit={handleSubmit}aria-label="A form to complete the booking" >
                <h3>Book now</h3>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" min={today} max="2023-08-30" id="res-date" required onChange={handleDate} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " onChange={handleTime} required>
                    {AvailableTimes}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" required id="guests" onChange={handleGuests} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={handleOccasion} required>
                    <option>Nothing</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        }
    </>
  )
}

export default BookingForm
