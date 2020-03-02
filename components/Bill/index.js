import React from 'react';
import { withRouter } from 'next/router';
import TagList from '../TagList';
import Card, { SecondReadStatus } from '../Card';

const Bill = ({ id, readStatus = null, tags = [], name, meetingDate, history }) => (
  <Card
    statusComponent={readStatus === 2 ? <SecondReadStatus /> : null}
    onClick={() => history.push(`/bills/${id}`)}
  >
    <TagList list={tags} />
    <h3 className="my-1">{name}</h3>
    <small>下次開會 {meetingDate}</small>
  </Card>
);

export default withRouter(Bill);