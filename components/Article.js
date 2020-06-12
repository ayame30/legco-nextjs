import React from 'react';

export default ({ children, title, onMore }) => (
  <article>
    <div className="flex-row flex-center flex-space-between">
      <b className="h3">{title}</b>
      {onMore ? <button className="float-right h5" onClick={onMore}>更多</button> : null}
    </div>
    <div className=" py-2">
      {children}
    </div>
  </article>
);