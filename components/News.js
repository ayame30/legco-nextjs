import React from 'react';
import Card from 'components/Card';
import CardImage from 'components/CardImage';



const News = ({ title, source, date, image, url }) => {
  return (
    <Card onClick={() => window.open(url)}>
      <div className="flex-row">
        <div className="flex-100"><CardImage image={image} /></div>
        <div className="flex flex-column flex-space-between pl-1">
          <span className="h6">{title}</span>
          <div className="flex-row flex-space-between pt-1">
            <span>Flag - 香港01</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default News;