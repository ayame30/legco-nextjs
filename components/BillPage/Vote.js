import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

const Vote1 = <i className={classnames('fas fa-check-circle green', styles.vote)} />;
const Vote2 = <i className={classnames('fas fa-times-circle red', styles.vote)} />;
const Vote3 = <i className={classnames('fas fa-circle grey', styles.vote)} />;

export default ({ data }) => {
  const options = [
    { label: '按議席', value: 'constituency'},
    { label: '按政黨', value: 'party'},
  ]
  const [ sort, setSort ] = useState(options[0].value);

  const hostBlock = (
    <div className={classnames('flex-row p2', styles.resultRow)}>
      <div className="flex-100 flex-self-center">表決結果</div>
      <div className="flex flex-self-center green"><b>通過</b></div>
      <div className="flex-100 flex-self-center"><b>{data.host.name}</b> 主持</div>
    </div>
  );
  
  const byParty = {};
  const byConstituencyType = {
    G: {
      name: '地區直選',
      agree: 0,
      against: 0,
      absent: 0,
      abstain: 0,
    },
    F: {
      name: '功能組別',
      agree: 0,
      against: 0,
      absent: 0,
      abstain: 0,
    },
  };
  data.vote.forEach(vote => {
    if (!byParty[vote.party.id]) {
      byParty[vote.party.id] = {
        name: vote.party.name,
        agree: 0,
        against: 0,
        absent: 0,
        abstain: 0,
      };
    }
    byParty[vote.party.id][vote.decision]++;
    byConstituencyType[vote.constituencyType][vote.decision]++;
  });
  
  console.log(byParty);
  console.log(byConstituencyType);
  
  return (
    <div>
      <div className="py-1 flex-row">
        <div><span>排序</span><span className="arrow-right" /></div>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={classnames(styles.sortButton, {[styles.active]: opt.value === sort})}
            onClick={() => setSort(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {sort === 'constituency' ?
        <div className="flex-column">
          {hostBlock}
          {Object.values(byConstituencyType).map((cResult) => (
            <div className={classnames('flex-row p2', styles.resultRow)}>
              <div className="flex-100 flex-self-center green"><b>{cResult.name}</b></div>
              <div className="flex flex-self-center">
                {new Array(cResult.agree).fill(0).map(() => Vote1)}
                {new Array(cResult.against).fill(0).map(() => Vote2)}
                {new Array(cResult.abstain).fill(0).map(() => Vote3)}
              </div>
              <div className="flex-100 flex-row multiline flex-self-center">
                <span>{cResult.agree} 贊成</span>
                <span>{cResult.against} 反對</span>
                <span>{cResult.abstain} 棄權</span>
                <span>{cResult.absent} 缺席</span>
              </div>
            </div>
          ))}
        </div> : null}
      {sort === 'party' ?
        <div className="flex-column">
          {hostBlock}
          <div className={classnames('flex-column p2')}>
            <div className="flex-row py-2">
              <div className="flex flex-self-center">政黨</div>
              <div className="flex-50 text-center">贊成</div>
              <div className="flex-50 text-center">反對</div>
              <div className="flex-50 text-center">棄權</div>
              <div className="flex-50 text-center">缺席</div>
            </div>
            {Object.values(byParty).map((partyResult) => (
              <div className="flex-row py-2">
                <div className="flex flex-self-center">{partyResult.name}</div>
                <div className="flex-50 text-center">{partyResult.agree}</div>
                <div className="flex-50 text-center">{partyResult.against}</div>
                <div className="flex-50 text-center">{partyResult.abstain}</div>
                <div className="flex-50 text-center">{partyResult.absent}</div>
              </div>
            ))}
          </div>
        </div> : null}
    </div>
  )
}