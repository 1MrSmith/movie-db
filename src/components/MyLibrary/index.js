import React, {
  Fragment,
  memo,
  useState,
} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PanelLibrary from '../PanelLibrary';
import config from '../../config';
import style from './style.module.scss';

const MyLibrary = () => {
  const [key, setKey] = useState(config.routes.movie.title);
  const history = useHistory();

  const choseTab = (k) => {
    setKey(k);
    history.push(config.routes.myLibrary.url);
  }

  return (
    <Fragment>
      <div
      className={style['page']}>

        <div
        className={style['page__my-library-caption']}>{config.pages.myLibrary.myLibraryCaption}</div>

        <Tabs
        activeKey={key}
        onSelect={choseTab}>
          <Tab
          eventKey={config.routes.movie.title}
          title={config.routes.movie.title}>

            <PanelLibrary typeVideo={config.typeVideos.movie} activeTab={key} />

          </Tab>
          <Tab
          eventKey={config.routes.tvShow.title}
          title={config.routes.tvShow.title}>

            <PanelLibrary typeVideo={config.typeVideos.tvShow} activeTab={key} />

          </Tab>
        </Tabs>

      </div>

    </Fragment>

  );
}

export default memo(MyLibrary);
