import React from 'react';
import News from 'components/News';

export default ({ data }) => {
  return (
    <div>
      {data.map((news) => (
        <News
          source={news.source.name}
          title={news.title}
          date={news.date}
          url={news.url}
          image={news.image}
        />
      ))}
  </div>
  
  )
}