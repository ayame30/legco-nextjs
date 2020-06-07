import React from 'react';
import Article from 'components/Article';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import useMemberNews from 'hooks/useMemberNews';


const SOURCES = {
  appledaily: {
    flag: '/appledaily.jpg',
    label: '蘋果日報'
  }
}
export default ({ member }) => {  
  const { data, loading } = useMemberNews({ member });
  if (loading || !data.length) return null;
  
  
  return (
    <Article title="相關新聞" onMore={() => {}}>
      {data.map((news) => (
        <Card key={news.id} onClick={() => window.open(news.link)}>
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

