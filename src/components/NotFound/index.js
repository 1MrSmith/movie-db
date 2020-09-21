import React, { memo } from 'react';
import style from './style.module.scss';

const NotFound = () => {
  return (
    <div
    className={style['not-found']}>

      <h3>Sorry, page not found!</h3>

    </div>
  );
}

export default memo(NotFound);
