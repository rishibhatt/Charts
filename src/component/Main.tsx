import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import './css/Main.css'
import wineData from '../Wine-Data.json'


function Main() {

    const arrayWithAlcohol1: any[] = [];
    const arrayWithAlcohol2: any[] = [];
    const arrayWithAlcohol3: any[] = [];

   
    // filtering data from json
    // pushing into empty array based on category
    wineData.map((data) => {   
        if(data.Alcohol == 1)
        {
            arrayWithAlcohol1.push(data);

        }
        else if(data.Alcohol == 2)
        {
            arrayWithAlcohol2.push(data)
        }

        else
        {
            arrayWithAlcohol3.push(data)
        }

    })

    console.log(arrayWithAlcohol1);

    // calculating sum of Malic Acid based on their respective category 

    let sum: number = arrayWithAlcohol1.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return (a + b);
        }


    );

    let sum2: number = arrayWithAlcohol2.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return a + b;
        }

    );

    let sum3: number = arrayWithAlcohol2.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return a + b;
        }

    );

    console.log(sum);
    // calculating average 
   const average = sum/arrayWithAlcohol1.length;
   const average2 = sum2/arrayWithAlcohol2.length;
   const average3 = sum3/arrayWithAlcohol3.length;
console.log(average);
console.log(average2);
console.log(average3);





console.log(wineData);

const option = {
    xAxis: {


        type: 'value',
        name: 'Color Intensity'


    },
    yAxis: {


        type: 'value',
        name: 'Hue'


    },
    grid: {
        borderColor: '#eee',
        x: 80,
        y: 60,
        x2: 120,
        y2: 60
      },
      tooltip: {
        trigger: "item",
        formatter: "<br/><strong>(Color Intensity,Hue)</strong>: ({c} )"
      },
    series: [

        {

            data: wineData.map((data, id) => {

                return [data['Color intensity'], data.Hue]
            }),

            type: 'scatter'
        }



    ],

}

const option2 = {
    xAxis: {
        type: 'category',
        name:'Alcohol',
        axisLabel: {
            formatter: '{value}',
            align: 'center'

          },
        data: [1,2,3]
    },
    yAxis: {
        type: 'value',
        name: 'Average of Mallic Acid'
    },
    tooltip: {
        trigger: "item",
        formatter: "<br/><strong>Average</strong>: ({c} )"
      },
    series: [

        {

            data: [average,average2,average3],
            type: 'bar',
            barWidth:'30%',
            barCategoryGap: '30%'
        }
    ]
};









return (
    <>

        <div>
            <div>

                <ReactEcharts option={option} className="scatter" />
                <ReactEcharts option={option2} className="bar" />

            </div>
        </div>
    </>

)
}

export default Main