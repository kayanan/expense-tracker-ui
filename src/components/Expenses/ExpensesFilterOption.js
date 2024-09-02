const Option=()=>{
    const options=[];
    for(let i=2019;i<=new Date().getFullYear();i++){
        options.push(<option key={i} value={i.toString()}>{i}</option>)
    }
    return options;
    

}

export default Option;