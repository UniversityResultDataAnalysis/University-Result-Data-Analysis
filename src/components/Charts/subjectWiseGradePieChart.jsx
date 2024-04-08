import React from 'react';
import Chart from 'react-apexcharts';

const GradeTypePieCharts = ({ data }) => {
    return (
        <div>
            {data.map((subjectData, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{subjectData.subject}</h3>
                    <Chart
                        options={{
                            labels: Object.keys(subjectData.gradeType),
                            legend: {
                                position: 'bottom',
                            },
                        }}
                        series={Object.values(subjectData.gradeType)}
                        type="pie"
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
};

export default GradeTypePieCharts;