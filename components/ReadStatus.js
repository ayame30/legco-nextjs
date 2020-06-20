import React from 'react';
import Card from 'components/Card';
import classnames from 'classnames';


export default ({ status }) => {
  if (!status) return null;
  return (
    <div className="flex-self-center">
      <div className="h1">
        <i className="fas fa-check-circle icon-lg" />
      </div>
      {status === 1 && <div className="h3">一讀</div>}
      {status === 2 && <div className="h3">二讀</div>}
      {status === 3 && <div className="h3">三讀</div>}
    </div>
  );
}
