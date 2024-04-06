import React from 'react'
import TopperTable from "./AnalysisTables/TopperTable";
import PassFailCountTable from "./AnalysisTables/PassFailCountTable";
import SubjectWiseAverageTable from "./AnalysisTables/SubjectWiseAverageTable";
import SubjectWiseGradeCountTable from "./AnalysisTables/SubjectWiseGradeCountTable";
import SubjectWiseToppers from "./AnalysisTables/SubjectWiseToppers";
import FailedStudentTable from "./AnalysisTables/FailedStudentTable";

const AnalysisTab = ({topperTableData,passFailCountTableData, subjectWiseAverageTableData ,subjectWiseGradeCountTableData,subjectWiseTopperData , failedStudentsData}) => {


    return (
        <>
            <TopperTable data={topperTableData}/>

            <PassFailCountTable data={passFailCountTableData}/>

            <SubjectWiseAverageTable data={subjectWiseAverageTableData}/>

            <SubjectWiseGradeCountTable data={subjectWiseGradeCountTableData}/>

            <SubjectWiseToppers data={subjectWiseTopperData}/>

            <FailedStudentTable data={failedStudentsData}/>



        </>
    )
}

export default AnalysisTab;