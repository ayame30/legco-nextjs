import React from 'react';
import ImageIcon from 'components/ImageIcon';
import Card from 'components/Card';
import { Router } from 'routes';


const Member = ({ id, name, party, image, constituencyType, constituencyDistrict, history }) => {
  return (
    <Card
      onClick={() => Router.pushRoute(`/member/${id}`)}
      statusComponent={(
        <div className="flex-self-center">
          <div className="h1">
            {constituencyDistrict}
          </div>
          <div className="p1">{constituencyType === 'GC' ? '地區直選': '功能組別'}</div>
        </div>
      )}
    >
      <div className="flex-row-parent">
        <ImageIcon image={image} />
        <div className="flex-expand px-2 flex-self-center">
          <h3 className=""><b>{name}</b></h3>
          <p>{party.name}</p>
        </div>
      </div>
    </Card>
  );
}
export default Member;