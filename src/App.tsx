import { RangeNavigatorComponent,AreaSeries,StepLineSeries,RangeTooltip,Inject,DateTime, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective } from '@syncfusion/ej2-react-charts';
import './App.css';

function App() {
  let stockDetails=[
        { date: new Date('2017-01-01'), value: 21 },
        { date: new Date('2018-01-01'), value: 24 },
        { date: new Date('2019-01-01'), value: 36 },
        { date: new Date('2020-01-01'), value: 38 },
        { date: new Date('2021-01-01'), value: 50 },
        { date: new Date('2022-01-01'), value: 52 },
        { date: new Date('2023-01-01'), value: 54 } 
  ];
  return (
    <div className="App">
      <RangeNavigatorComponent dataSource={stockDetails} valueType='DateTime'
      intervalType='Years' labelFormat='MMM-yy'
      value={[new Date('2019-01-01'),new Date('2021-01-01')]}
      majorGridLines={{color:'green',width:4}}
      majorTickLines={{color:'yellow',width:3}}
      tooltip={{enable:true,displayMode:'Always'}}
      xName='date' yName='value' type='StepLine'>
        {/* <RangenavigatorSeriesCollectionDirective>
          <RangenavigatorSeriesDirective />
        </RangenavigatorSeriesCollectionDirective> */}
      <Inject services={[DateTime,AreaSeries,StepLineSeries,RangeTooltip]}/>
      </RangeNavigatorComponent>
    </div>
  );
}

export default App;
