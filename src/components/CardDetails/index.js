/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
  useState
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HorizontalBar } from 'react-chartjs-2';
import { getPopularById } from '../../services/rest.service';
import { useAppContext } from '../AppContext';
import { loadTVShowDescription } from '../../store/tv-show';
import error from '../../utils/error';
import config from '../../config';
import style from './style.module.scss';


const CardDetails = (props) => {
  const [cardDetails, setCardDetails] = useState(null);
  const { isAuthenticated, searchString } = useAppContext();
  const { tvShowDetail, isLoading, } = props.tvShowDetail;
  const history = useHistory();
  const params = useParams();

  const loadStoreData = (typeId) => Promise.all([props.loadTVShowDescription(typeId)]);

  useEffect(() => {

    if (searchString.length > 2) {
      history.push(`${config.routes.search.url}/${searchString}/page/1`);
    }

  }, [history, searchString]);

  useEffect(() => {
    const loadData = async() => {
      try {
        if (isAuthenticated) {
          let type;
          const pathSplit = history.location.pathname.split('/').slice(1);
          if (pathSplit[0].toLowerCase().match(config.routes.movie.title.toLowerCase())) {
            type = config.typeVideos.movie;
            const data = await getPopularById(params.id, type);
            setCardDetails(data);
          } else {
            type = config.typeVideos.tvShow;
            loadStoreData(params.id);
          }

        }
      } catch (e) {
        error(e);
      }
    }
    loadData();
  }, [
    isLoading,
    params.id,
    isAuthenticated,
    history.location.pathname,
  ]);

  return (
    <Fragment>
      {cardDetails||tvShowDetail
      ? <div
        className={style['section-card']}>

          <img
          className={style['section-card__image']}
          src={cardDetails ? `${config.baseImgUrl}${cardDetails.poster_path}` : `${config.baseImgUrl}${tvShowDetail.poster_path}`}
          alt={cardDetails ? cardDetails.title : tvShowDetail.name} />

          <div
          className={style['section-card__description']}>
            <h2>{cardDetails ? cardDetails.title : tvShowDetail.name}</h2>
            {cardDetails?.overview || tvShowDetail?.overview}

            <div
            className={style['section-card__graph']}>

              <HorizontalBar data={{
              labels: [cardDetails ? cardDetails.title : tvShowDetail.name],
              datasets: [
                {
                  label: 'Rating',
                  data: [cardDetails ? cardDetails.vote_average : tvShowDetail.vote_average],
                  backgroundColor: 'rgba(49,64,82,0.4)',
                  borderColor: 'rgba(70,95,122,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(49,64,82,0.6)',
                  hoverBorderColor: 'rgba(70,95,122,1)',
                  barThickness: 50,
                },
              ],
            }}
            options={{
              legend: {
                labels: {
                  fontColor: 'rgb(255,255,255)',
                },
              },
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  scaleLabel: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  gridLines: {
                    color: 'transparent'
                  },
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  gridLines: {
                    color: 'rgb(255,255,255)',
                  },
                }],
              },
            }} />
            </div>
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

const mapStateToProps = (state) => ({
  tvShowDetail: state.tvShowsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  loadTVShowDescription: (payLoad) => dispatch(loadTVShowDescription(payLoad)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
