import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  console.log(props)

  return (
    <Popup trigger={<img alt="thumbnail" src={thumbnailUrl} />} modal nested>
      {close => (
        <div className="bg-container">
          <div>
            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <div>
            <ReactPlayer
              url={videoUrl}
              autoPlay="true"
              controls="true"
              width="1200"
              height="auto"
            />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
