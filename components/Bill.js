import React from 'react';
import { Router } from 'routes';
import TagList from 'components/TagList';
import Card from 'components/Card';
import SecondReadStatus from 'components/SecondReadStatus';

const Bill = ({ id, readStatus = null, tags = [], name, meetingDate }) => {
  const onClick = () => Router.pushRoute(`/bills/${id}`);
  
  return (
    <Card
      statusComponent={readStatus === 2 ? <SecondReadStatus /> : null}
      onClick={onClick}
    >
      <TagList list={tags} />
      <h3 className="my-1">{name}</h3>
      <small>下次開會 {meetingDate}</small>
    </Card>
  );
};

export default Bill;