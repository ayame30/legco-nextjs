import _ from 'lodash';
import { useQuery } from 'react-fetching-library';
import client from 'lib/client';
import moment from 'moment';

export default (id) => {
    const { payload: data = [], ...rest } = useQuery({
        method: 'GET',
        endpoint: '/member_news/' + id + '/',
    });

    const news = data.map((n) => ({
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
        original: data,
    };
}

export const query = async(id) => client.query({
    method: 'GET',
    endpoint: '/member_news/' + id + '/',
});