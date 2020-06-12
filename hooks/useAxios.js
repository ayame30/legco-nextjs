import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://apiv2.g0vhk.io/legco' })
});
export default useAxios;