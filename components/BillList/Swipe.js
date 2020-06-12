import React, { useEffect, useState } from 'react';
import Bill from 'components/Bill';
import SwipeableViews from 'react-swipeable-views';
import useBillList from 'hooks/useBillList';

const CategoryPage = ({ category }) => {
  const [ list, setList ] = useState([]);
  const { data: bills, loading } = useBillList({category});
  if (loading) return null;

  return (
    <div className="p3 py-1 fullheight overflow-y">
      {bills.map((bill) => (
        <Bill
          id={bill.id}
          key={bill.id}
          readStatus={bill.readStatus}
          tags={bill.tags}
          title={bill.title}
          meetingDate={bill.meetingDate}
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
        <CategoryPage key={value} category={shouldFetch[index] ? label : null} />
      ))}
    </SwipeableViews>
  )
}