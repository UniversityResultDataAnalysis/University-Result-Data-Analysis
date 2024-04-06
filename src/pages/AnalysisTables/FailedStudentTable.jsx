const FailedStudentTable = ({ data }) => {
    return(
        <details>
            <summary role="button" className="outline contrast">Failed Students</summary>
            <div>
                {data.map(subject => (

                    subject.failedStudents.length > 0 &&

                    <div key={subject.subject}>
                        <h3>{subject.subject}</h3>

                            <div >
                                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>USN</th>
                                        <th>Name</th>
                                        <th>CIE</th>
                                        <th>SEE</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {subject.failedStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.usn}</td>
                                        <td>{student.name}</td>
                                        <td>{student.cie}</td>
                                        <td>{student.see}</td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                    </div>
                ))}
            </div>
        </details>
    )
}

export default FailedStudentTable;