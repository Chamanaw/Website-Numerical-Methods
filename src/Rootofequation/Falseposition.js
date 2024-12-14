import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import '../App.css';
import { calFalse } from '../Math/Math'

import apis from '../API/index';

class Falseposition extends React.Component {
    state = {
        Equation: "",
        XL: "",
        XR: "",
        E: "",
        re: [],

        apiData: [],
        hasData: false,


    };
    async getData()
    {
        let tempData = null
        await apis.getRoot().then(res => {tempData = res.data})
        this.setState({apiData: tempData})
        this.setState({hasData: true})
        this.onInsert()
     
    }

    onClickExample = e =>{
        if(!this.state.hasData){
            this.getData()
        }
       
    }

    onInsert(){
      
            this.setState({
                Equation: this.state.apiData[1].equation,
                XL: this.state.apiData[1].xl,
                XR: this.state.apiData[1].xr,
                E: this.state.apiData[1].error,    
            })
    }
    
    getEquation = e => {
        this.setState({
            Equation: e.target.value,
        })

    }

    getXL = e => {
        this.setState({
            XL: e.target.value,
        })
    }

    getXR = e => {
        this.setState({
            XR: e.target.value,
        })
    }

    getEro = e => {
        this.setState({
            E: e.target.value,
        })
    }
    Show = e => {
        this.setState(
            { re: calFalse(this.state.Equation, this.state.XL, this.state.XR, this.state.E) }
        );
    }


    render() {

        return (

            <div>
                <div className="bg">
                    <div>
                        <h1 className="cho">FALSEPOSITION</h1>
                    </div>
                    <div className="bg2">
                   
                        <Button type="primary" onClick={this.onClickExample} className="set">ตัวอย่าง</Button><br/>
                        Equation: <Input onChange={this.getEquation} value={this.state.Equation}/><br />
                        <label className="label1">XL: </label>  <Input onChange={this.getXL} value={this.state.XL}/>
                        XR: <Input onChange={this.getXR} value={this.state.XR}/><br />
                        <label className="label2">ERROR:</label> <Input onChange={this.getEro} value={this.state.E}/><br />
                        <Button type="primary" onClick={this.Show} className="set">Calculate</Button>
                    </div>
                </div ><br />

                <div className="iteration">
                    <h1 className="h1x">ITERATION</h1>
                    {this.state.re}

                </div>
            </div>

        );
    }
}
export default Falseposition;