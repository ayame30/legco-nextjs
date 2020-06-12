import React from 'react';
import { Router } from 'routes';
import TagList from 'components/TagList';
import Card from 'components/Card';
import SecondReadStatus from 'components/SecondReadStatus';
import moment from 'moment';

const Bill = ({ id, readStatus = null, tags = [], title, meetingDate }) => {
  const onClick = () => Router.pushRoute(`/bills/${id}`);
  
  return (
    <Card
      statusComponent={readStatus === 2 ? <SecondReadStatus /> : null}
      onClick={onClick}
    >
      <TagList list={tags} />
      <h3 className="my-1">{title}</h3>
      {!!meetingDate && <small>下次開會 {moment(meetingDate).format('YYYY-MM-DD')}</small>}
    </Card>
  );
};

export default Bill;