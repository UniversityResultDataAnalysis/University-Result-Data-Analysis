import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';

const CourseChart = ({data}) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const courseData = data;

        const courses = Object.keys(courseData);
        const avgCIE = courses.map(course => Math.round(courseData[course].avgCIE));
        const avgSEE = courses.map(course => Math.round(courseData[course].avgSEE));
        const avgCreditPoint = courses.map(course => Math.round(courseData[course].avgCreditPoint));

        setChartData({
            options: {
                chart: {
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: courses.map(course => course.split('-')[0])
                },
                yaxis: {
                    title: {
                        text: 'Scores'
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            series: [{
                name: 'Average CIE',
                data: avgCIE
            }, {
                name: 'Average SEE',
                data: avgSEE
            }, {
                name: 'Average Credit Point',
                data: avgCreditPoint
            }]
        });
    }, []);

    return (
        <div>
            {chartData.options && chartData.series && (
                <Chart options={chartData.options} series={chartData.series} type="bar" height={400}/>
            )}
        </div>
    );
};

export default CourseChart;