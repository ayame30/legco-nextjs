
import { createClient, ClientContextProvider, createCache } from 'react-fetching-library';

const cache = createCache(
  (action) => {
    return action.method === 'GET';
  },
  (response) => {
    return new Date().getTime() - response.timestamp < 100000;
  },
);



const requestHostInterceptor = host => c => async (action) => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

const client = createClient({
  cacheProvider: cache,
  requestInterceptors: [requestHostInterceptor('https://apiv2.g0vhk.io/legco')],
});

export default client;