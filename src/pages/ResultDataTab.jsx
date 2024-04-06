import React from "react";

const ResultDataTab = ({ data }) => {
    return(
        <>

            {
                data.length > 0 ? data.map((item) => (
                        <details>
                            <summary>Name : {item.name} - USN : {item.usn}</summary>
                            <section>

                                <ul key={item.usn}>
                                    <li>SGPA : {item.sgpa}</li>
                                    <li>Percentage : {item.percentage}</li>
                                    <li>Total Grade Points : {item.totalGP}</li>
                                    <li>Class : {item.classType}</li>
                                </ul>
                                <details>
                                    <summary>Subject Wise Marks ( Click to Open )</summary>

                                    {Object.keys(item.subjectMarks).map((key) => {
                                        return (
                                            <>
                                                <div>
                                                    <strong>Subject Code : {key}</strong></div>
                                                <ul key={key}>
                                                    <li>CIE : {item.subjectMarks[key]?.cie}</li>
                                                    <li>SEE : {item.subjectMarks[key]?.see}</li>
                                                    <li>TOTAL
                                                        : {Number(item.subjectMarks[key]?.see) + Number(item.subjectMarks[key]?.cie)}</li>
                                                    <li>GRADE : {item.subjectMarks[key]?.grade}</li>
                                                    <li>GRADE POINT : {item.subjectMarks[key]?.gradePoint}</li>
                                                    <li>CREDIT POINT : {item.subjectMarks[key]?.creditPoint}</li>
                                                </ul>
                                            </>
                                        )
                                    })}
                                </details>

                            </section>
                        </details>
                    ))

                    : <span>Result Data</span>
            }
        </>
    )
}

export default ResultDataTab;