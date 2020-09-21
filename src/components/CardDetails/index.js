import React, {
  Fragment,
  memo,
  useEffect,
  useState
} from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { getPopularById } from '../../services/rest.service';
import { useAppContext } from '../../components/AppContext';
import error from '../../utils/error';
import config from '../../config';
import style from './style.module.scss';


const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const { isAuthenticated } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    const loadData = async() => {
      try {
        if (isAuthenticated) {
          let type;
          const pathSplit = history.location.pathname.split('/').slice(1);
          if (pathSplit[0].toLowerCase().match(config.routes.movie.title.toLowerCase())) {
            type = config.typeVideos.movie;
          } else {
            type = config.typeVideos.tvShow;
          }
          const data = await getPopularById(pathSplit[pathSplit.length - 1], type);
          setCardDetails(data);

        }
      } catch (e) {
        error(e);
      }
    }
    loadData();
  }, [history.location.pathname, isAuthenticated]);

  return (
    <Fragment>
      {cardDetails
      ? <div
        className={style['section-card']}>

          <img
          className={style['section-card__image']}
          src={cardDetails.poster_path ? `${config.baseImgUrl}${cardDetails.poster_path}` : ''}
          alt={cardDetails.name ? cardDetails.name : cardDetails.title} />

          <div
          className={style['section-card__description']}>
            <h2>{cardDetails.name ? cardDetails.name : cardDetails.title}</h2>
            {cardDetails.overview}
          </div>

        </div>
      : <div
        className={style['page']}>

          <Spinner
          animation='border'
          variant='secondary' />

        </div>

      }
      
    </Fragment>
  );
}

export default memo(CardDetails);
