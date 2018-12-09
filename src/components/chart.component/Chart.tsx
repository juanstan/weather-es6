import React from 'react';
import * as _ from "lodash";
import * as moment from 'moment';
import './Chart.css';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export class Chart extends React.Component<any> {
    public state: any;

    constructor(props: any){
        super(props);
        this.state = {
            data: []
        }
    }

    getDataReady(info:any):Array<any> {
        let data:[] = [];
        data = info.map((detail:any)=>{
           let timeMoment = moment(detail.dt_txt);
           if (timeMoment.format('hh:mm a') === '09:00 am') {
                return { name: timeMoment.format('dddd'), 'sea-level': detail.main.sea_level }
           }
        });
        return data;
    }

    componentDidMount() {
        let info = _.get(this.props, 'info');
        const data = this.getDataReady(info);
        this.setState({ data });
    }

    render() {
        let finalData:[];
        if (this.state.data.length > 0) {
            finalData = this.state.data;
        }
        return (
            <div className="chart mt-5">
                <ResponsiveContainer width={300} height={150}>
                    <LineChart data={finalData}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="sea-level" stroke="#8884d8"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }

}