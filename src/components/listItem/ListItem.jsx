import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './listItem.scss'


export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
   const getMovie = async () => {
     try {
       const res = await axios.get('/movie/find/' + item, {
         headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmQ2YTVkMDdmZTE0MmEzY2ZhODZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA1Mjg1NCwiZXhwIjoxNjQ0NDg0ODU0fQ.aH7k4rIF4n7A9umFl7artDuVzvB4er9hC0_tVP0jqqA"
          }
       })
       setMovie(res.data)
     } catch (err) {
       console.log(err);
     }
   }
   getMovie()
  },[item])


  return (
  <Link to={{pathname: '/watch', movie: movie}}>
  <div className='listItem'
  style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  >
       <img
        src={movie.img}
        alt=""
        />
      {isHovered && (
        <Fragment>
 <video src={movie.trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className='icon'/>
          <Add className='icon'/>
          <ThumbUpAltOutlined className='icon'/>
          <ThumbDownAltOutlined className='icon'/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className='limit'>+{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
          {movie.desc}
        </div>
        <div className="genre">{movie.genre}</div>
      </div>
      </Fragment>
      )}
     
  </div>;
      </Link>
      )
}
