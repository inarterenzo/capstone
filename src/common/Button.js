import { Link } from 'react-router-dom'

const styles = {
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        border: 'none',
        padding: '1vh 5vw',
        borderRadius: '5px',
        fontWeight: 'bold',
    }
}

const Button = (props) => {
  return (
    <Link to={props.to}>
      <button>
        {props.text}
      </button>
    </Link>
  )
}

export default Button
