import {AiTwotoneDelete} from 'react-icons/ai'
import './index.css'

const Songs = props => {
  const {songsDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <div>
        <img src={imageUrl} alt="track" className="image" />
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <div>
        <p>{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </li>
  )
}

export default Songs
