import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';

const PassFailChart = ({data}) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {

        const passFailData = data.map(item => {
            return {
                subject: item.subject,
                passed: item.passFailCount.passed,
                failed: item.passFailCount.failed
            };
        });

        setChartData({
            options: {
                chart: {
                    type: 'bar',
                    stacked: true,
                },
                yaxis: {
                    categories: passFailData.map(item => item.subject),
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: 'top',
                },
            },
            series: [
                {
                    name: 'Passed',
                    data: passFailData.map(item => item.passed),
                },
                {
                    name: 'Failed',
                    data: passFailData.map(item => item.failed),
                },
            ],
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

export default PassFailChart;
