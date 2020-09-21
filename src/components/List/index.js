import React, { Fragment, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../components/AppContext';
import Card from '../Card';
import config from '../../config';
import Pagination from 'pagination-component';
import style from './style.module.scss';

const List = (props) => {
  const history = useHistory();
  const { setRunPush } = useAppContext();

  const onClick = (page) => {
    history.push(`${props.paginationUrl}/${page + 1}`);
    setRunPush(`${props.paginationUrl}/${page + 1}`);
  }

  return (
    <Fragment>
      <div
      className={style['section-list']}>

        <div className={style['section-list__container']}>

          {props.data.length
          ? props.data.map((item) => (
              <div
              key={item.id}
              className={style['section-list__item']}>

                <Card
                key={item.id}
                id={item.id}
                title={item.name ? item.name : item.title}
                imageLink={`${config.baseImgUrl}${item.poster_path}`}
                detailsUrl={props.detailsUrl}
                typeVideo={props.typeVideo}
                checked={item?.checked} />

              </div>

            ))

          : <div
            className={style['section-list__no-content']}>

              <h2>{config.noContent}</h2>

            </div>

          }

          {props.data.length
          ? <div
            className={style['section-list__pagination']}>

              <Pagination
              currentPage={props.activePage - 1}
              pageCount={props.totalPage}
              pageLinkClassName={style['pageLink']}
              currentLinkClassName={style['currentLink']}
              onPageClick={onClick} />

            </div>

          : <Fragment></Fragment>

          }
        </div>
      </div>
    </Fragment>
  );
}

export default memo(List);
