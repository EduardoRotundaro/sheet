import React from 'react';

import If from '../utilities/If';

export default props => {
    function classNames(){
        let classes = 'row';
        if(props.vAlign) classes += ` align-items-${props.vAlign}`;
        if(props.hAlign) classes += ` justify-content-${props.hAlign}`;
        if(props.className) classes += ` ${props.className}`;

        return classes;
    }

    return (
        <If condition={!props.hide}>
            <div className={classNames()}>
                {props.children}
            </div>
        </If>
    );
}