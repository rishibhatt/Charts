import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";
import axios from 'axios';
import './css/Main.css'

import wine from '../Wine-Data.json'
function Main() {


    const Alcoholc: any[] = [];
    const Alcoholc2: any[] = [];
    const Alcoholc3: any[] = [];

    // filtering data from json
    // pushing into empty array based on category
    wine.map((f) => {   
        if(f.Alcohol == 1)
        {
            Alcoholc.push(f);

        }
        else if(f.Alcohol == 2)
        {
            Alcoholc2.push(f)
        }

        else
        {
            Alcoholc3.push(f)
        }

    })

    console.log(Alcoholc);


    // calculating sum of Malic Acid based on their respective category 

    let sum: number = Alcoholc.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return a + b;
        }

    );

    let sum2: number = Alcoholc2.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return a + b;
        }

    );

    let sum3: number = Alcoholc2.map(z =>
        z['Malic Acid']).reduce(function (a, b) {
            return a + b;
        }

    );

    // calculating average 
   const avgg = sum/Alcoholc.length;
   const avgg2 = sum2/Alcoholc2.length;
   const avgg3 = sum3/Alcoholc3.length;
console.log(avgg);
console.log(avgg2);
console.log(avgg3);
console.log(Alcoholc.length)
console.log(Alcoholc2.length)
console.log(Alcoholc3.length)




console.log(wine);

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

            data: wine.map((s, id) => {

                return [s['Color intensity'], s.Hue]
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

            data: [avgg,avgg2,avgg3],
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