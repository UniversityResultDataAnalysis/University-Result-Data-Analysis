const SubjectWiseToppers = ({data}) => {

    // for each subject
    data.map(subject => {
        // sort toppers by total marks
        subject.toppers.sort((a, b) => {
            return (Number(b.subjectMarks[subject.subject].cie) + Number(b.subjectMarks[subject.subject].see)) - (Number(a.subjectMarks[subject.subject].cie) + Number(a.subjectMarks[subject.subject].see));
        });
        return subject;
    });

    return (
        <details>
            <summary role="button" className="outline contrast">Subject Wise Toppers</summary>
            <div>
                {data.map(subject => (
                    <div key={subject.subject}>
                        <h3>{subject.subject}</h3>

                        <div>
                            <table style={{borderCollapse: 'collapse', width: '100%'}}>
                                <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>USN</th>
                                    <th>Total Marks</th>
                                    <th>Grade</th>
                                </tr>
                                </thead>
                                <tbody>
                                {subject.toppers.map((topper, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{topper.name}</td>
                                        <td>{topper.usn}</td>
                                        <td>{Number(topper.subjectMarks[subject.subject].cie) + Number(topper.subjectMarks[subject.subject].see)}</td>
                                        <td>{topper.subjectMarks[subject.subject].grade}</td>
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

export default SubjectWiseToppers;