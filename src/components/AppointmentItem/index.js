import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentItem, toggleFav} = props
  const {title, date, isFavorite, id} = appointmentItem
  const [year, month, day] = date.split('-').map(eachItem => parseInt(eachItem))

  const formattedDate = format(new Date(year, month, day), 'dd MMMM yyyy, EEEE')

  const starUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onToggle = () => toggleFav(id)

  return (
    <li className="appointment-item">
      <div className="title-and-star-container">
        <p className="title">{title}</p>
        <button
          data-testid="star"
          type="button"
          className="star-btn"
          onClick={onToggle}
        >
          <img className="star-img" src={starUrl} alt="star" />
        </button>
      </div>
      <p className="appointment-date">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
