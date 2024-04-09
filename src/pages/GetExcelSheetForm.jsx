import React, {useEffect, useState} from "react";
import AnalysisTab from "./AnalysisTab";
import {
    calculateAverageMarks,
    countGradeTypes,
    findFailedStudents,
    findPassedFailedCount,
    findTopStudents,
    getAllSubjectNames
} from "../Utility-Functions/Analysis";
import ChartsTab from "./ChartsTab";
import ResultDataTab from "./ResultDataTab";
import {ImInfo} from "react-icons/im";
import {IoIosListBox, IoMdInformationCircleOutline} from "react-icons/io";
import {TiTick} from "react-icons/ti";
import {RxReset} from "react-icons/rx";
import {FaChartBar} from "react-icons/fa";
import {SlCalender} from "react-icons/sl";
import {RiGraduationCapLine} from "react-icons/ri";
import {MdFormatListNumbered} from "react-icons/md";
import {GrDatabase} from "react-icons/gr";

const GetExcelSheetForm = () => {

    const [title, setTitle] = useState("")

    const branchOptions = ["CSE", "ISE", "ECE", "ME"]

    const yearOptions = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]

    const semOptions = ["1SEM", "2SEM", "3SEM", "4SEM", "5SEM", "6SEM", "7SEM", "8SEM"]

    const [data, setData] = useState([]);

    const API_URL = 'https://script.google.com/macros/s/AKfycbzgAiPobS33ry5wXBCxNQfoIjCniJ485BJO4KfalAe3qWHurgO454MKkDD3Y5pC2jMM/exec'

    const [selectedBranch, setSelectedBranch] = useState("")
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedSem, setSelectedSem] = useState("")

    const [topperTableData, setTopperTableData] = useState([])
    const [subjectWisePassFailCount, setSubjectWisePassFailCount] = useState([])
    const [subjectWiseAverageTableData, setSubjectWiseAverageTableData] = useState([])
    const [subjectWiseGradeType, setSubjectWiseGradeType] = useState([])
    const [subjectWiseToppers, setSubjectWiseToppers] = useState([])
    const [failedStudents, setFailedStudents] = useState([])

    const [viewOutput, setViewOutput] = useState(false)


    useEffect(() => {
        if (viewOutput) {
            changeTab(null, "result")
        }

    }, [data]);

    const resetSubmitBtn = () => {
        document.getElementById("submitFormBtn").setAttribute("aria-busy", false)
        document.getElementById("submitFormBtn").innerHTML = "Submit"
        document.getElementById("submitFormBtn").removeAttribute("disabled")
    }

    const changeTab = (evt, tabName) => {
        var i;
        var x = document.getElementsByClassName("tabWindow");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";

        let tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" tablinkActive", "");
        }

        if (evt === null) {
            tablinks[0].className += " tablinkActive";
        }

        if (evt) {
            evt.currentTarget.className += " tablinkActive";
        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestURL = `${API_URL}?branch=${e.target.branch.value}&year=${e.target.year.value}&sem=${e.target.sem.value}`


        //validation
        if (selectedBranch === "" || selectedYear === "" || selectedSem === "") {
            return alert("Please select all the fields")
        }


        document.getElementById("submitFormBtn").setAttribute("aria-busy", true)
        document.getElementById("submitFormBtn").innerHTML = "Please wait , Fetching Data..."
        document.getElementById("submitFormBtn").setAttribute("disabled", true)

        fetch(requestURL, {
            method: 'GET',
            redirect: "follow",
        })
            .then(response => response.json())
            .then(json => {
                //If error in response , throw error
                if (json.status === "error") {
                    throw new Error(json.message)
                }

                const data = json.data
                const subjectNamesArray = getAllSubjectNames(data)
                //Set Topper Table Data
                setTopperTableData(findTopStudents(data))

                //Set Subject Wise Average Table Data (CIE, SEE, Credit Point)
                setSubjectWiseAverageTableData(calculateAverageMarks(data))


                subjectNamesArray.forEach((subjectName) => {

                    //Set Subject Wise Pass Fail Count
                    setSubjectWisePassFailCount((prev) => [...prev, {
                        subject: subjectName,
                        passFailCount: findPassedFailedCount(data, subjectName)
                    }])

                    //Set Subject Wise Grade Type Count
                    setSubjectWiseGradeType((prev) => [...prev, {
                        subject: subjectName,
                        gradeType: countGradeTypes(data, subjectName)
                    }])

                    //Set Subject Wise Toppers
                    setSubjectWiseToppers((prev) => [...prev, {
                        subject: subjectName,
                        toppers: findTopStudents(data, subjectName)
                    }])


                    //Set Failed Students
                    setFailedStudents((prev) => [...prev, {
                        subject: subjectName,
                        failedStudents: findFailedStudents(data, subjectName)
                    }])

                })

                //Set Title of the Result Data
                setTitle(json.data.title)

                //Set the data
                setData(json.data.studentData)

                //Show the output container
                setViewOutput(true)


            })
            .catch(error => {
                alert(error)
            })
            .finally(() => {
                resetSubmitBtn()
            })

    }



    const handleBranchChange = (e) => {
        setSelectedBranch(e.target.value)
    }

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value)
    }

    const handleSemChange = (e) => {
        setSelectedSem(e.target.value)
    }

    const resetStates = () => {
        setSelectedBranch("")
        setSelectedYear("")
        setSelectedSem("")

        setTopperTableData([])
        setSubjectWisePassFailCount([])
        setSubjectWiseAverageTableData([])
        setSubjectWiseGradeType([])
        setSubjectWiseToppers([])
        setFailedStudents([])
        setData([])
    }


    const handleReset = (e) => {
        e.preventDefault()
        resetStates()
        setViewOutput(false)
    }

    const handleGoBack = () => {

        resetStates()
        setViewOutput(false)
    }

    return (
        <>   {

            viewOutput ?
                <>
                    <button data-tooltip="Click to Navigate back to Form Page" onClick={handleGoBack}>Go Back to Form
                    </button>
                    <br></br>

                    <h3>{title}</h3>
                    <div className="tabNavigationBar">
                        <div className={"tablink tablinkActive"} onClick={(e) => changeTab(e, "result")}>
                            <IoIosListBox/> Result Data
                        </div>
                        <div className={"tablink"} onClick={(e) => changeTab(e, "chart")}>
                            <FaChartBar/> Charts & Graphs
                        </div>
                        <div className={"tablink"} onClick={(e) => changeTab(e, "analysis")}>
                            <GrDatabase/> Analysis
                        </div>
                    </div>

                    <section className={"scroll-section"}>
                        <article className={"tabWindow"} id={"result"}>
                            <ResultDataTab
                                data={data}
                            />
                        </article>

                        <article className={"tabWindow"} id={"chart"}>
                            <ChartsTab
                                subjectWiseAverageTableData={subjectWiseAverageTableData}
                                passFailCountTableData={subjectWisePassFailCount}
                                gradeTypeTableData={subjectWiseGradeType}
                            />
                        </article>

                        <article className={"tabWindow"} id={"analysis"}>
                            <AnalysisTab
                                topperTableData={topperTableData}
                                passFailCountTableData={subjectWisePassFailCount}
                                subjectWiseAverageTableData={subjectWiseAverageTableData}
                                subjectWiseGradeCountTableData={subjectWiseGradeType}
                                subjectWiseTopperData={subjectWiseToppers}
                                failedStudentsData={failedStudents}
                            />
                        </article>
                    </section>
                </>


                :


                <>
                    <h4><ImInfo/> Fill & Submit the Form to Retrieve the Data & Show Analysis Result</h4>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <label htmlFor="first-select"><span data-tooltip="Required Field"
                                                            className={"required-asterisk"}>*</span>
                            <RiGraduationCapLine/> Branch :</label>
                        <select
                            required
                            value={selectedBranch}
                            onChange={handleBranchChange}
                            id="first-select" name="branch">
                            <option value="" disabled hidden>Select Branch</option>
                            {branchOptions.map((branchOption) => (
                                <option key={branchOption} value={branchOption}>{branchOption}</option>
                            ))}
                        </select>
                        <br></br>

                        <label htmlFor="second-select"><span data-tooltip="Required Field"
                                                             className={"required-asterisk"}>*</span> <SlCalender/> Year
                            :</label>
                        <select
                            required
                            value={selectedYear}
                            onChange={handleYearChange}
                            placeholder={"Select Year"}
                            id="second-select" name="year">
                            <option value="" disabled hidden>Select Year</option>
                            {yearOptions.map((yearOption) => (
                                <option key={yearOption} value={yearOption}>{yearOption}</option>
                            ))}
                        </select>
                        <br></br>

                        <label htmlFor="third-select"><span data-tooltip="Required Field"
                                                            className={"required-asterisk"}>*</span>
                            <MdFormatListNumbered/> Semester :</label>
                        <select
                            required
                            value={selectedSem}
                            onChange={handleSemChange}
                            id="third-select" name="sem">
                            <option value="" disabled hidden>Select Semester</option>
                            {semOptions.map((semOption) => (
                                <option key={semOption} value={semOption}>{semOption}</option>
                            ))}
                        </select>
                        <br></br>
                        <div className={"form-btn-group"} role={"group"}>
                            <button id={"submitFormBtn"} aria-busy="false" type="submit"><TiTick/> Submit</button>
                            <button id={"resetFormBtn"} onClick={handleReset}><RxReset/> Reset</button>
                        </div>
                    </form>


                    <mark><IoMdInformationCircleOutline/> Note : The Processing may take upto 20-30 seconds, Please wait
                        after submitting
                    </mark>
                </>

        }
        </>


    )
};

export default GetExcelSheetForm;