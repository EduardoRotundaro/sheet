import React from 'react-redux';

import If from '../utils/If';

export default props => {
    function classNames (){
        let algn = `${props.vAlign? `align-self-${props.vAlign} `:''}`;
        
        if(props.className) algn += `${props.className} `;
        if(props.equal) return `${algn}col`;
        if(props.auto) return `${algn}col-auto`;

        let cols = (props.sizes || '12-12-12-12-12').split('-');
        return `${algn}col-${cols[0]} col-sm-${cols[1]} col-md-${cols[2]} col-lg-${cols[3]} col-xl-${cols[4]}`;
    }

    return (
        <If condition={!props.hide}>
            <div className={classNames()} onClick={props.onclick}>
                {props.children}
            </div>
        </If>
    );
}