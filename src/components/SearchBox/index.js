import React, {
  Fragment,
  memo,
  useState,
  useCallback,
} from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import debounce from '../../utils/debounce';
import { useAppContext } from '../AppContext';
import config from '../../config';
import style from './style.module.scss';

const SearchBox = () => {
  const { userSearchString } = useAppContext();
  const [, setValue] = useState('');

  const debounced = useCallback(
    debounce((nextValue) => userSearchString(nextValue), config.delay),
    [],
  );

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debounced(nextValue);
  };

  return (
    <Fragment>

      <Form
      inline
      className='pr-3'>

        <InputGroup
        className={style['search-box']}>
          <InputGroup.Prepend>
            <InputGroup.Text id='pre-text'>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type='text'
            placeholder='Search'
            className={style['search-box__input']}
            name='search'
            aria-describedby='pre-text'
            onChange={handleChange} />
        </InputGroup>

      </Form>

    </Fragment>
  );
}

export default memo(SearchBox);
