import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import Bill from 'components/Bill';
import Article from 'components/Article';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'components/ProgressBar';
import MEMBER_VOTE_QUERY from 'graphql/memberVote.query';


export default ({ id, individualId }) => {
  const { data } = useQuery(MEMBER_VOTE_QUERY, {
    variables: { individualId } 
  });
  const voteCount = {
    yes: _.get(data, 'yes.aggregate.count', 0),
    no: _.get(data, 'no.aggregate.count', 0),
    abstain: _.get(data, 'abstain.aggregate.count', 0),
    absent: _.get(data, 'absent.aggregate.count', 0),
    present: _.get(data, 'present.aggregate.count', 0)
  };

  return (
    <Article title="表決次數">
      <div className="flex-row-parent p2">
        <div className="flex-expand text-center">
          <div className="h1 green"><b>{voteCount.yes}</b></div>
          <small className="green">贊成</small>
        </div>
        <div className="flex-expand text-center">
          <div className="h1 red"><b>{voteCount.no}</b></div>
          <small className="red">反對</small>
        </div>
        <div className="flex-expand text-center">
          <div className="h1 yellow"><b>{voteCount.abstain}</b></div>
          <small className="yellow">棄權</small>
        </div>
        <div className="flex-expand text-center">
          <div className="h1 grey"><b>{voteCount.absent}</b></div>
          <small className="grey">缺席</small>
        </div>
        <div className="flex-expand text-center">
          <div className="h1"><b>{voteCount.present}</b></div>
          <small>主持</small>
        </div>
      </div>
      <ProgressBar data={[
        { value: voteCount.yes, className: 'bg-green'},
        { value: voteCount.no, className: 'bg-red'},
        { value: voteCount.abstain, className: 'bg-yellow'},
        { value: voteCount.absent, className: 'bg-grey'},
        { value: voteCount.present, className: 'bg-black'},
      ]} total={168}/>
    </Article>
  )
}
