import React, { useEffect, useState } from 'react';
import Bill from 'components/Bill';
import SwipeableViews from 'react-swipeable-views';
import { listByCategory } from 'api/bills';
import BILLS_QUERY from 'graphql/bills.query';
import { useQuery } from '@apollo/react-hooks';


const CategoryPage = ({ category }) => {
  const [ list, setList ] = useState([]);
  const { data: { bills = [] } = {}, error, loading } = useQuery(BILLS_QUERY, {
    variables: { limit: 30 },
    fetchPolicy: 'network-only',
  });
  if (loading) return null;

  return (
    <div className="p3 py-1 fullheight overflow-y">
      {bills.map((r) => (
        <Bill
          id={r.id}
          key={r.id}
          readStatus={2}
          tags={[category]}
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
        <CategoryPage key={value} category={shouldFetch[index] ? label : null} />
      ))}
    </SwipeableViews>
  )
}