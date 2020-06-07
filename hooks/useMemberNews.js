import { useQuery } from '@apollo/react-hooks';
import MEMBER_NEWS_QUERY from 'graphql/memberNews.query';
import _ from 'lodash';

export default ({ member }) => {
    const { data, ...rest } = useQuery(MEMBER_NEWS_QUERY, {
        variables: { individualId: member.individualId, limit: 3 },
        skip: !member.individualId,
    });

    const news = _.get(data, 'news', []).map(({ news: n }) => ({
        id: n.key,
        link: n.link,
        image: n.image,
        title: n.title,
        source: n.source,
        date: n.date,
    }));
    return {
        data: news,
        original: data,
        ...rest,
    };
}