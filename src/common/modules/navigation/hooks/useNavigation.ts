import { useSelector } from 'react-redux';

import { selectors } from '../ducks/selectors';

export const useNavigation = () => {
  const pathname = useSelector(selectors.pathnameSelector);
  const query = useSelector(selectors.queryStringSelector);
  const search = useSelector(selectors.searchSelector);
  const hash = useSelector(selectors.hashSelector);

  return {
    pathname,
    query,
    search,
    hash
  }
};