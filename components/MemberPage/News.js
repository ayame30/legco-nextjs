import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Article from 'components/Article';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import MEMBER_NEWS_QUERY from 'graphql/memberNews.query';

const SOURCES = {
  appledaily: {
    flag: '/appledaily.jpg',
    label: '蘋果日報'
  }
}
export default ({ member }) => {
  if (!member) return null;
  
  const { data, loading } = useQuery(MEMBER_NEWS_QUERY, {
    variables: { individualId: member.individualId, limit: 3 }
  });
  if (loading || !data.memberNews) return null;
  
  
  return (
    <Article title="相關新聞" onMore={() => {}}>
      {data.memberNews.map(({ news }) => (
        <Card key={news.key} onClick={() => window.open(news.link)}>
          <div className="flex-row-parent">
            <div className="flex-100"><CardImage image={news.image} /></div>
            <div className="flex-expand pl-1 flex-column-parent flex-space-between ">
              <h5>{news.title}</h5>
              <div className="flex-row-parent flex-space-between">
                <span style={{ verticalAlign: 'middle' }}>
                  <span
                    className="inline-block mr-1 background-cover"
                    style={{
                      width: 15,
                      height: 15,
                      verticalAlign: 'middle',
                      backgroundImage: `url(${SOURCES[news.source].flag})`
                    }}
                  />
                  {SOURCES[news.source].label}
                </span>
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Article>
  )
}

