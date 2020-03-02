import React from 'react';
import ImageIcon from 'components/ImageIcon';
import Card from 'components/Card';
import { Router } from 'routes';


const Member = ({ id, name, party, image, constituencyType, constituencyDistrict, history }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => Router.pushRoute(`/members/${id}`)}
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
}
export default Member;