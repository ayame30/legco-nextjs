import React, { useState, useEffect } from 'react';
import Bill from 'components/Bill';
import Section from 'components/Section';
import { listHottest, listUpComing, listUpdates } from 'api/bills';


const BillsSection = ({ title, data }) => {

  return (
    <Section title={title} onMore={() => {}}>
      <div>
        {(data || []).map((r) => (
          <Bill
            key={r.id}
            readStatus={r.status === '二讀' ? 2 : null}
            id={r.id}
            tags={r.tags}
            name={r.title}
            meetingDate={r.meetingDate}
          />
        ))}
      </div>
    </Section>
  );
}

function Home({ listHottestData, listUpComingData, listUpdatesData }) {
  return (
    <div className="fullheight overflow-overlay">
      <BillsSection title="熱門法案" data={listHottestData} />
      <BillsSection title="即將表決法案" data={listUpComingData} />
      <BillsSection title="最近表決法案" data={listUpdatesData} />
    </div>
  )
};

Home.getInitialProps = async function() {
  const listHottestData = await listHottest();
  const listUpComingData = await listUpComing();
  const listUpdatesData = await listUpdates();

  return {
    listHottestData,
    listUpComingData,
    listUpdatesData
  };
};

export default Home;