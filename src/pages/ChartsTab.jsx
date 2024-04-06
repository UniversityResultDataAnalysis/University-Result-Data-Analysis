import CourseChart from "../components/Charts/Chart1";

const ChartsTab = ({subjectWiseAverageTableData}) => {
    return (
        <>
            <CourseChart data={subjectWiseAverageTableData} />
        </>
    )
}

export default ChartsTab;