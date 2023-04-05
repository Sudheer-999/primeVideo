import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details

  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="video-link">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="btn-con">
              <button
                type="button"
                data-testid="closeButton"
                className="close-btn"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <div className="player-con">
                <ReactPlayer url={videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
