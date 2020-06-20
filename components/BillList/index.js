import React, { useState } from 'react';
import TabBar from 'components/TabBar';
import Category from './Category';
import Swipe from './Swipe';
import styles from './index.module.scss';

export default () => {
  const options = [
    { label: '全部', value: 'all' },
    { label: '法律', value: 'law' },
    { label: '交通運輸', value: 'transport' },
    { label: '土地房屋', value: 'civil' },
    { label: '醫療衛生', value: 'health' },
    { label: '經濟', value: 'econ' },
  ];
  const [ value, setValue ] = useState(options[0].value);
  const [ openCategory, setOpenCategory ] = useState(false);
  const onCategoryChange = (value) => {
    setValue(value);
    setOpenCategory(false);
  }
  const onSwipe = (i) => {
    setValue(options[i].value);
  }
  const i = options.map(o => o.value).indexOf(value);
  
  return (
    <div className="flex-column fullheight">
      <div className="flex-row flex-center px-1 pt-2">
        <div className="flex overflow-overlay">
          <TabBar options={options} value={value} onChange={onCategoryChange} />
        </div>
        <hr className="vertical ml-1"/>
        <button className="px-2 flex-80 text-center" onClick={() => setOpenCategory(prev => !prev)}>
          {openCategory ? <i className="fas fa-times mr-1" /> : <i className="fas fa-layer-group mr-1" />}
          分類
        </button>
      </div>
      <div className="flex overflow-y">
        <Category open={openCategory} value={value} options={options} onChange={onCategoryChange}/>
        <div className={styles.swipeContainer}>
          <Swipe
            index={i}
            onChange={onSwipe}
            categories={options}
          />
        </div>
      </div>
    </div>
    
  )
}