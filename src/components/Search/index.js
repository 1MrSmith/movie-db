import React, {
  Fragment,
  memo,
  useState,
} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import TabSearch from '../TabSearch';
import config from '../../config';
import style from './style.module.scss';

const Search = () => {
  const [key, setKey] = useState(config.routes.movie.title);
  const history = useHistory();
  const params = useParams();

  const choseTab = (k) => {
    setKey(k);
    history.push(`${config.routes.search.url}/${params.query}/page/1`);
  }

  return (
    <Fragment>
      <div
      className={style['page']}>

        <div
        className={style['page__search-results-title']}>{config.pages.search.searchResults}</div>

        <Tabs
        activeKey={key}
        onSelect={choseTab}>
          <Tab
          eventKey={config.routes.movie.title}
          title={config.routes.movie.title}>

            <TabSearch typeVideo={config.typeVideos.movie} activeTab={key} />

          </Tab>
          <Tab
          eventKey={config.routes.tvShow.title}
          title={config.routes.tvShow.title}>

            <TabSearch typeVideo={config.typeVideos.tvShow} activeTab={key} />

          </Tab>
        </Tabs>

      </div>

    </Fragment>

  );
}

export default memo(Search);
