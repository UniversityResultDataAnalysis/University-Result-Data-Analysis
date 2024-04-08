import CourseChart from "../components/Charts/subjectAverageBarChart";
import PassFailChart from "../components/Charts/passVsFailBarChart";
import GradeTypePieChart from "../components/Charts/subjectWiseGradePieChart";

const ChartsTab = ({subjectWiseAverageTableData, passFailCountTableData, gradeTypeTableData}) => {
    return (
        <>
            <>
                <h3>Subject Wise Average</h3>
                <CourseChart data={subjectWiseAverageTableData}/>
            </>


            <>
                <h3>Pass v/s Fail</h3>
                <PassFailChart data={passFailCountTableData}/>
            </>
            <>
                <h3>Grade Pie Chart</h3>
                <GradeTypePieChart data={gradeTypeTableData}/>
            </>

        </>
    )
}

export default ChartsTab;