import React from 'react';

const SubjectWiseGradeCountTable = ({data}) => {

    //sort object key gradeType in ascending order
    data.map((item) => {
        item.gradeType = Object.keys(item.gradeType).sort().reduce((acc, key) => {
            acc[key] = item.gradeType[key];
            return acc;
        }, {});
        return item;
    });

    return (
        <details>
            <summary role="button" className="outline contrast">Subject Wise Grade Count</summary>
            <table>
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>Grades</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.subject}</td>
                        <td>
                    <span>

                        {Object.entries(item.gradeType).map(([grade, count], i) => (
                            <span key={i}>{`${grade} : ${count} / `}</span>
                        ))}
                    </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </details>
    )
        ;
};

export default SubjectWiseGradeCountTable;