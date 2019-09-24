import React from 'react';

export default props => (
    <div className={`container${props.full? '-fluid':''}${props.className? ` ${props.className}`:''}`}>
        {props.children}
    </div>
);