import React from 'react';
import { withRouter } from 'react-router-dom'; 
import ImageIcon from '../ImageIcon';
import Card from '../Card';

const Member = ({ id, name, party, image, constituencyType, constituencyDistrict, history }) => (
  <Card
    onClick={() => history.push(`/members/${id}`)}
    statusComponent={(
      <div className="flex-self-center">
        <div className="h1">
          {constituencyDistrict}
        </div>
        <div className="p1">{constituencyType}</div>
      </div>
    )}
  >
    <div className="flex-row-parent">
      <ImageIcon image={image} />
      <div className="flex-expand px-2 flex-self-center">
        <h3 className=""><b>{name}</b></h3>
        <p>{party}</p>
      </div>
    </div>
  </Card>
);
export default withRouter(Member);