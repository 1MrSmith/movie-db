import React, {
  Fragment,
  memo,
  useState,
  useCallback,
} from 'react';
import { Form, FormControl } from 'react-bootstrap';
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

        <FormControl
        type='text'
        placeholder='Search'
        name='search'
        onChange={handleChange} />
      </Form>

    </Fragment>
  );
}

export default memo(SearchBox);
