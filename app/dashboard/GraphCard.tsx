'use client'
import { Card, SimpleGrid } from '@mantine/core';
import { grossSales, netReturn,convRate } from './MOCK_DATA';
import { BasePrivateKeyEncodingOptions } from 'crypto';
import ReactEcharts from "echarts-for-react"; 




function GraphCard() {
 const  option = {
    title: {
      text: 'Stats'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // formatter: function (params) {
      //   let tar;
      //   if (params[1] && params[1].value !== '-') {
      //     tar = params[1];
      //   } else {
      //     tar = params[2];
      //   }
      //   return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      // }
    },
    legend: {
      data: ['Net Return', 'Gross Sales','Convertion Rate']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: netReturn.data.map(item=>{return item.date})      
      
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
     },
    },
    series: [
     
      {
        name: 'Convertion Rate',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#A5DD9B',
          borderRadius: [0, 0 , 0, 0]
        },        
        label: {
          show: true,
          position: 'top'
        },
        data: convRate.data.map(item=>{return item.value})
      },
      {
        name: 'Gross Sales',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          color: '#FFCF96',
        },
       
        label: {
          show: true,
          position: 'top'
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
      },
      {
        name: 'Net Return',
        type: 'bar',
        stack: 'Total',
        barWidth:17,
        itemStyle: {
          color: '#D0BFFF',
          borderRadius: [8, 8, 0, 0 ],
        },
        label: {
          show: false,
          position: 'bottom'
        },
        data: netReturn.data.map(item=>{return item.value})
      }
    ]
  };
  
  return (
    <Card m='1.5rem 1.5rem 1rem 1rem'><ReactEcharts option={option} /></Card>
  )
}

export default GraphCard