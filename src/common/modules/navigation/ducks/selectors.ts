import { createSelector } from 'reselect';
import { RouterState } from 'connected-react-router';

import { AppState } from '../../../../store';

const navigationSelector = (state: AppState): RouterState => state.router;

const queryStringSelector = createSelector(
  navigationSelector,
  navigation => (navigation.location as any).query
);

const hashSelector = createSelector(
  navigationSelector,
  navigation => navigation.location.hash
);

const searchSelector = createSelector(
  navigationSelector,
  navigation => navigation.location.search
);

const pathnameSelector = createSelector(
  navigationSelector,
  navigation => navigation.location.pathname
);

export const selectors = {
  queryStringSelector,
  hashSelector,
  searchSelector,
  pathnameSelector
}