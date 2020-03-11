import React from 'react';
import classnames from 'classnames';
import { Router } from 'routes';
import Loading from 'components/Loading';

import TabBar from 'components/TabBar';
import ImageIcon from 'components/ImageIcon';
import styles from './index.module.scss';
import Overview from './Overview';
import Party from './Party';
styles;

const routes = [
  { path: '/members/:id/', value: '', exact: true, name: '表現', component: Overview },
  { path: '/members/:id/party', value: 'party', name: '政黨', component: Party },
];


let NewTabBar = ({ page = '', id }) => {
  const options = routes.map((route) => ({
    label: route.name,
    value: route.value,
  }));
  const onChange = (path) => {
    Router.replaceRoute(`/members/${id}/${path}`, `/members/${id}/${path}`, { shallow: true });
  }
  return <TabBar options={options} value={page} onChange={onChange} />;
}


export default ({ page = '', id, member }) => {
  styles;
  const PageComponent = (routes.find(v => v.value === page) || {}).component;
  
  return (
    <div className="flex-column-parent fullheight">
      <div className="flex-row-parent py-2 flex-center px-2">
        <ImageIcon image={member.image} />
        <div className="flex-expand px-2">
          <h3 className=""><b>{member.name}</b></h3>
          <p>{member.party}</p>
        </div>
        <div className={classnames(styles.constituency, 'flex-100')}>
          <div className="flex-self-center fullwidth">
            <div className="mb h2">
              {member.constituencyDistrict}
            </div>
            <div className="h5">{member.constituencyType === 'GC' ? '地區直選': '功能組別'}</div>
          </div>
        </div>
      </div>
      <NewTabBar page={page} id={id}/>
      <div className="p flex-expand overflow-y ">
        {!!PageComponent && <PageComponent id={member.id} individualId={member.individualId}/>}
      </div>
    </div>
  )
}