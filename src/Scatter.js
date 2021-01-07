import React from 'react';
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Disney',
                data: [
                    [16.4, 5.4],
                    [21.7, 4],
                    [25.4, 3],
                    [19, 2],
                    [10.9, 1],
                    [13.6, 3.2],
                    [10.9, 7],
                    [10.9, 8.2],
                    [16.4, 4],
                    [13.6, 4.3],
                    [13.6, 12],
                    [29.9, 3],
                    [10.9, 5.2],
                    [16.4, 6.5],
                    [10.9, 8],
                    [24.5, 7.1],
                    [10.9, 7],
                    [8.1, 4.7],
                    [19, 10],
                    [27.1, 10],
                    [24.5, 8],
                    [27.1, 3],
                    [29.9, 11.5],
                    [27.1, 0.8],
                    [22.1, 2]
                ]
            }, {
                name: 'Google',
                data: [
                    [6.4, 5.4],
                    [11.7, 4],
                    [15.4, 3],
                    [9, 2],
                    [10.9, 11],
                    [20.9, 7],
                    [12.9, 8.2],
                    [6.4, 14],
                    [11.6, 12]
                ]
            }],
            options: {
                chart: {
                    height: 500,
                    type: 'scatter',
                    animations: {
                        enabled: true,
                    },
                    zoom: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#056BF6', '#D2376A'],
                xaxis: {
                    tickAmount: 10,
                    min: 0,
                    max: 40
                },
                yaxis: {
                    tickAmount: 7
                },
                markers: {
                    size: 15
                },
                fill: {
                    type: 'image',
                    opacity: 1,
                    image: {
                        src: [
                            "https://logos-download.com/wp-content/uploads/2016/06/Disney_logo.png",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
                        ],
                        width: 30,
                        height: 30
                    },
                    // pattern: {
                    //     style: 'squares',
                    //     width: 180,
                    //     height: 180,
                    //     strokeWidth: 0
                    // },
                },
                legend: {
                    labels: {
                        useSeriesColors: true
                    },
                    markers: {
                        customHTML: [
                            function () {
                                return ''
                            }, function () {
                                return ''
                            }
                        ]
                    }
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350} />
            </div>


        );
    }
}
