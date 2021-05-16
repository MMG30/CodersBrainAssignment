import React from 'react';
import reactDom from 'react-dom';
import classes from './Launches.module.css';
import Card from '../MissionCard/card'

class filter extends React.Component{

    state = {
        data : []
    }

    componentDidMount(){
        this.setState({data: this.props.data})
    }

    render(){
        let toRenderData = <Card />
        toRenderData = this.state.data.map(item=>{
            let obj = {
                mission_name: item.mission_name,
                flight_number: item.flight_number,
                mission_id: item.mission_id,
                launch_year: item.launch_year,
                image: item.links.mission_patch,
                success_launch: item.launch_success
            }
            if(this.props.year === null){
                return <Card obj={obj}/>
            }
            else if(this.props.year != null && this.props.year === item.launch_year){
                return <Card obj={obj}/>
            }
        })
        return(
            <div className={classes.MainDiv}>
                {toRenderData}
            </div>
        );
    }
};

export default filter;