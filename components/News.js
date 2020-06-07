import React from 'react';
import Card from 'components/Card';
import CardImage from 'components/CardImage';



const News = ({ title, source, date, image, url }) => {
  return (
    <Card onClick={() => window.open(url)}>
      <div className="flex-row-parent">
        <div className="flex-100"><CardImage image={image} /></div>
        <div className="flex-expand flex-column-parent flex-space-between pl-1">
          <span className="h6">{title}</span>
          <div className="flex-row-parent flex-space-between pt-1">
            <span>Flag - 香港01</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default News;