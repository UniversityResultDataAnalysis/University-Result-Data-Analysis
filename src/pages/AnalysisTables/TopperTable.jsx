import React from 'react';

const TopperTable = ({ data }) => {
    return (
        <details>
            <summary role="button" className="outline contrast">Overall Toppers</summary>
            <table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>USN</th>
                    <th>SGPA</th>
                    <th>Percentage</th>
                </tr>
                </thead>
                <tbody>
                {data.map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.usn}</td>
                        <td>{student.sgpa}</td>
                        <td>{student.percentage}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </details>

    );
};

export default TopperTable;