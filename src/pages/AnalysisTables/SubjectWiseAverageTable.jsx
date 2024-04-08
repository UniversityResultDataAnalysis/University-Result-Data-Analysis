import React from 'react';

const SubjectWiseAverageTable = ({data}) => {
    return (
        <details>
            <summary role="button" className="outline contrast">Subject Wise Average CIE,SEE & Credit Point</summary>
            <table>
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>Avg CIE</th>
                    <th>Avg SEE</th>
                    <th>Avg Credit Point</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(data).map(([subject, averages], index) => (
                    <tr key={index}>
                        <td>{subject}</td>
                        <td>{Math.round(averages.avgCIE)}</td>
                        <td>{Math.round(averages.avgSEE)}</td>
                        <td>{Math.round(averages.avgCreditPoint)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </details>
    );
};

export default SubjectWiseAverageTable;