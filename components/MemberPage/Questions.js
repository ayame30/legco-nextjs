import React from 'react';
import Article from 'components/Article';
import useMemberQuestions from 'hooks/useMemberQuestions';

export default ({ member }) => {  
  const { data, loading } = useMemberQuestions({ member });
  if (loading || !data.length) return null;
  
  
  return (
    <Article title="質詢紀錄" onMore={() => {}}>
      {data.map((question, i) => (
        <button
          className="fullwidth flex-row-parent border-bottom my-2"
          key={question.id}
          onClick={() => window.open(question.link)}
        >
          <span className="flex-50">{i + 1}</span>
          <span className="flex-50"><b>{member.name}</b></span>
          <span className="flex-expand">就 <b>{question.title}</b> {question.type}</span>
        </button>
      ))}
    </Article>
  )
}

