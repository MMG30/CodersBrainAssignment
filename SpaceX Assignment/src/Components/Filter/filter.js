import React from 'react';
import reactDom from 'react-dom';
import classes from './filter.module.css'

class filter extends React.Component{

    yearOnClick(e){
        console.log(e.target)
    }

    handleYearChange(e){
        this.props.changeYear(e.target.innerText)
    }

    render(){
        return(
            <div className={classes.MainDiv}>
                <h3>Filters</h3>
                <div className={classes.FilterWrapperDiv}>
                    <div className={classes.filters}>
                        <p>Launch Year</p>
                        <div className={classes.YearFilterDiv}>
                            <p onClick={(e)=>this.handleYearChange(e)}>2006</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2007</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2008</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2009</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2010</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2011</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2012</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2013</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2014</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2015</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2016</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2017</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2018</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2019</p>
                            <p onClick={(e)=>this.handleYearChange(e)}>2020</p>
                        </div>
                    </div>
                    <div className={classes.filters}>
                        <p>Succesful Launch</p>
                        <div className={classes.YearFilterDiv}>
                            <p onClick={()=>this.props.changeSuccessLaunch(true)} 
                                className={this.props.launchStatus === true?classes.darkGreen:null}
                            >True</p>
                            <p onClick={()=>this.props.changeSuccessLaunch(false)}
                                className={`${this.props.launchStatus === false?classes.darkGreen: null} ${this.props.landStatus === false || this.props.landStatus === true?classes.disabled: null}`}
                            >False</p>
                        </div>
                    </div>
                    <div className={classes.filters}>
                        <p>Succesful Landing</p>
                        <div className={classes.YearFilterDiv}>
                            <p onClick={()=>this.props.changeSuccessLand(true)}
                                className={`${this.props.landStatus === true?classes.darkGreen: null} ${this.props.launchStatus === false || this.props.launchStatus === null?classes.disabled: null}`}
                            >True</p>
                            <p onClick={()=>this.props.changeSuccessLand(false)}
                                className={`${this.props.landStatus === false?classes.darkGreen: null} ${this.props.launchStatus === false || this.props.launchStatus === null?classes.disabled: null}`}
                            >False</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default filter;