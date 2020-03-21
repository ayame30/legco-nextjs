import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Article from 'components/Article';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import MEMBER_QUESTIONS_QUERY from 'graphql/memberQuestions.query';


export default ({ member }) => {
  if (!member) return null;
  
  const { data, loading } = useQuery(MEMBER_QUESTIONS_QUERY, {
    variables: { individualId: member.individualId, limit: 5 }
  });
  if (loading || !data.questions) return null;
  
  
  return (
    <Article title="質詢紀錄" onMore={() => {}}>
      {data.questions.map((question, i) => (
        <button
          className="fullwidth flex-row-parent border-bottom my-2"
          key={question.key}
          onClick={() => window.open(question.link)}
        >
          <span className="flex-50">{i + 1}</span>
          <span className="flex-50"><b>{member.name}</b></span>
          <span className="flex-expand">就 <b>{question.title_ch}</b> {question.question_type}</span>
        </button>
      ))}
    </Article>
  )
}

