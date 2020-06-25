import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import Article from 'components/Article';
import ProgressBar from 'components/ProgressBar';
import MEMBER_VOTE_QUERY from 'graphql/memberVote.query';
import useMemberVotes from 'hooks/useMemberVotes';

export default ({ member }) => {
  const voteCount = member.voteStats
  if (!voteCount) return null;
  
  return (
    <Article title="表決次數">
      <div className="flex-row p2">
        <div className="flex text-center">
          <div className="h1 green"><b>{voteCount.yes}</b></div>
          <small className="green">贊成</small>
        </div>
        <div className="flex text-center">
          <div className="h1 red"><b>{voteCount.no}</b></div>
          <small className="red">反對</small>
        </div>
        <div className="flex text-center">
          <div className="h1 yellow"><b>{voteCount.abstain}</b></div>
          <small className="yellow">棄權</small>
        </div>
        <div className="flex text-center">
          <div className="h1 grey"><b>{voteCount.absent}</b></div>
          <small className="grey">缺席</small>
        </div>
        <div className="flex text-center">
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
      ]} total={voteCount.yes + voteCount.no + voteCount.abstain + voteCount.absent + voteCount.present}/>
    </Article>
  )
}
