import React, { useEffect, useState } from 'react';
import Bill from 'components/Bill';
import SwipeableViews from 'react-swipeable-views';
import { listByCategory } from 'api/bills';

const CategoryPage = ({ category }) => {
  const [ list, setList ] = useState([]);
  useEffect(() => {
    if (!category) return;
    listByCategory(category).then(setList);
  }, [category]);
  return (
    <div className="p3 py-1 fullheight overflow-y">
      {list.map((r) => (
        <Bill
          readStatus={r.status === '二讀' ? 2 : null}
          tags={r.tags}
          name={r.title}
          meetingDate={r.meetingDate}
        />
      ))}
    </div>
  );
};

export default ({ index, onChange, categories }) => {
  const [ shouldFetch, setShouldFetch ] = useState({});
  useEffect(() => {
    setShouldFetch(prev => Object.assign({ [index]: true }, prev));
  }, [index])
  return (
    <SwipeableViews index={index} onChangeIndex={onChange}>
      {categories.map(({ label, value }, index) => (
        <CategoryPage category={shouldFetch[index] ? label : null} />
      ))}
    </SwipeableViews>
  )
}