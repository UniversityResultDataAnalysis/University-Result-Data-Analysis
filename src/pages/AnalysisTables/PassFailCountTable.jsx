import React from "react";

const PassFailCountTable = ({ data }) => {
    return (
        <details>
            <summary role="button" className="outline contrast">Subject Wise Pass Fail Count</summary>
        <table>
            <thead>
            <tr>
                <th>Subject Name</th>
                <th>Passed</th>
                <th>Failed</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.passFailCount.passed}</td>
                    <td>{item.passFailCount.failed}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </details>
    );
};

export default PassFailCountTable;