import _ from 'lodash';
import { useQuery } from 'react-fetching-library';
import client from 'lib/client';
import moment from 'moment';

export default ({ id, page }) => {
    const { payload: data = [], ...rest } = useQuery({
        method: 'GET',
        endpoint: '/member_news/' + id + '/5/' + page,
    });

    const news = _.get(data, 'news', []).map((n) => ({
        id: n.key,
        link: n.link,
        image: n.image,
        title: n.title,
        source: n.source,
        date: n.date,
    }));
    
    return {
        ...rest,
        data: news,
        pagination: data.pagination,
        original: data,
    };
}

export const query = async(id) => client.query({
    method: 'GET',
    endpoint: '/member_news/' + id + '/',
});