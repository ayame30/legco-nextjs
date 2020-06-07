import React, { useState, useMemo } from 'react';
import Member from 'components/Member';
import classnames from 'classnames';
import _ from 'lodash';
import styles from './index.module.scss';

export default ({ members }) => {

  const [ openFilter, setOpenFilter ] = useState(false);
  const parties = useMemo(() => {
    const all = _.map(members, (m) => _.get(m, 'party')).filter(p => _.get(p, 'id'));
    return _.uniqBy(all, 'id');
  }, [members]);

  const districts = useMemo(() => {
    const all = _.map(members.filter(m => m.constituencyType === 'GC'), (m) => _.get(m, 'constituencyDistrict'));
    return _.uniq(all);
  }, [members]);

  const fDistricts = useMemo(() => {
    const all = _.map(members.filter(m => m.constituencyType === 'FC'), (m) => _.get(m, 'constituencyDistrict'));
    return _.uniq(all);
  }, [members]);
  return (
    <div className="fullheight">
      <div className="flex-column-parent fullheight">
        <div className="flex-row-parent flex-center">
          <div className="flex-row-parent flex-center flex-expand p2 overflow-y">
            <div className="nowrap"><span>排序</span><span className="arrow-right" /></div>
            <button className={styles.sortButton}>動議數目</button>
            <button className={styles.sortButton}>近月投票率</button>
            <button className={styles.sortButton}>近月出席率</button>
          </div>
            <button aria-label="篩選" onClick={() => setOpenFilter(prev => !prev)} className="p2">
              <i className="fas fa-filter"></i>
            </button>
        </div>
        <div className="flex-expand fullheight">
          <div className={classnames(styles.sidemenuContainer,{ [styles.active]: openFilter })}>
            <button aria-label="關閉篩選列" className={styles.overlay} onClick={() => setOpenFilter(false)} />
            <div className={classnames(styles.sidemenu, 'p2 overflow-y', { [styles.active]: openFilter })}>
              <div className="border-bottom py-1">議席</div>
              <div className="flex-row-parent multiline py-1">
                {districts.map(d => (
                  <div className="halfwidth px-1 mb-1" key={d}>
                    <button className={styles.filterButton}>{d}</button>
                  </div>
                ))}
                {fDistricts.sort().map(d => (
                  <div className="halfwidth px-1 mb-1" key={d}>
                    <button className={styles.filterButton}>{d}</button>
                  </div>
                ))}
              </div>
              <div className="border-bottom py-1">政黨</div>
              <div className="flex-row-parent multiline py-1">
                {parties.sort().map(party => (
                  <div key={party.id} className="halfwidth px-1 mb-1">
                    <button className={styles.filterButton}>{party.name}</button>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
          <div className="p3 fullheight overflow-y">
            {members.map((m, i) => (
              <div className="flex-row-parent flex-middle" key={m.id}>
                <div className="h2 flex-self-center flex-40 text-left"><b>{i + 1}</b></div>
                <div className="flex-expand">
                  <Member {...m} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}