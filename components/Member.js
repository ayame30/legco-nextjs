import React from 'react';
import ImageIcon from 'components/ImageIcon';
import Card from 'components/Card';
import { Router } from 'routes';


const Member = ({ id, name, party, image, constituencyType, constituencyDistrict, history }) => {
  return (
    <Card
      onClick={() => Router.pushRoute(`/member/${id}`)}
      statusComponent={(
        constituencyDistrict && <div className="flex-self-center">
          {constituencyDistrict.length <= 3 && <div className="h1">{constituencyDistrict}</div>}
          {constituencyDistrict.length > 3 && constituencyDistrict.length <= 5 && <div className="h2">{constituencyDistrict}</div>}
          {constituencyDistrict.length > 5 && constituencyDistrict.length <= 8 && <div className="h3">{constituencyDistrict}</div>}
          {constituencyDistrict.length > 8 && <div className="h4">{constituencyDistrict}</div>}

          <div className="p1">{constituencyType === 'GC' ? '地區直選': '功能組別'}</div>
        </div>
      )}
    >
      <div className="flex-row">
        <ImageIcon image={image} />
        <div className="flex px-2 flex-self-center">
          <h3 className=""><b>{name}</b></h3>
          <p>{party && party.name}</p>
        </div>
      </div>
    </Card>
  );
}
export default Member;