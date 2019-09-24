export default props =>{
    if(props.condition) return props.thenRender;
    return props.elseRender;
}