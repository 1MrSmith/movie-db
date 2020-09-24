const fetchStoreData = async ({
  dispatch,
  startLoading,
  handleSuccess,
  fetch,
}) => {

  const response = await fetch();
  const isLoading = response ? false : true;

  if (typeof startLoading === 'function') {
    dispatch(startLoading(isLoading));
  }

  if (typeof handleSuccess === 'function') {
    dispatch(handleSuccess(isLoading));
  }

}

export default fetchStoreData;