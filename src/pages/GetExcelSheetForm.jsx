import React, {useEffect, useState} from "react";
import Donut from "../components/Charts/Donut";
import Plot from "../components/Charts/Plot";
import Line from "../components/Charts/Line";
import Analysis from "./Analysis";

const GetExcelSheetForm = () => {

    const [title,setTitle] = useState("")

    const branchOptions = ["CSE", "ISE", "ECE",  "ME"]

    const yearOptions = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"]

    const semOptions = ["1SEM", "2SEM", "3SEM", "4SEM", "5SEM", "6SEM", "7SEM", "8SEM"]

    const [data, setData] = useState([]);

    const API_URL = 'https://script.google.com/macros/s/AKfycbzgAiPobS33ry5wXBCxNQfoIjCniJ485BJO4KfalAe3qWHurgO454MKkDD3Y5pC2jMM/exec'


    useEffect(() => {
        changeTab(null,"result")
    }, [data]);

    const resetSubmitBtn = () => {
        document.getElementById("submitFormBtn").setAttribute("aria-busy", false)
        document.getElementById("submitFormBtn").innerHTML = "Submit"
        document.getElementById("submitFormBtn").removeAttribute("disabled")
    }

    const changeTab = (evt,tabName) => {
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

        if(evt===null){
            tablinks[0].className += " tablinkActive";
        }

        if(evt){
            evt.currentTarget.className += " tablinkActive";
        }



    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestURL = `${API_URL}?branch=${e.target.branch.value}&year=${e.target.year.value}&sem=${e.target.sem.value}`
        console.log(requestURL)

        document.getElementById("submitFormBtn").setAttribute("aria-busy", true)
        document.getElementById("submitFormBtn").innerHTML = "Please wait , Fetching Data..."
        document.getElementById("submitFormBtn").setAttribute("disabled", true)

        fetch(requestURL,{
            method: 'GET',
            redirect: "follow",
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if(json.status === "error"){
                    return alert("Data not found for the given criteria")
                }
                else {
                    setTitle(json.data.title)
                    document.getElementById("outputContainer").style.display = "block"
                    setData(json.data.studentData)
                }


            })
            .catch(error => {
                console.log(error)
                alert("Error Occurred, Please try again later")
            })
            .finally(() => {
                resetSubmitBtn()
            })

    }

    return (
        <>
        <form onSubmit={handleSubmit} className='login-form'>

            <label htmlFor="first-select">Branch :</label>
            <select id="first-select" name="branch">
                <option selected disabled>Select Branch</option>
                {branchOptions.map((branchOption) => (
                    <option key={branchOption} value={branchOption}>{branchOption}</option>
                ))}
            </select>
            <br></br>

                <label htmlFor="second-select">Year :</label>
                <select id="second-select" name="year">
                    <option selected disabled>Select Year</option>
                    {yearOptions.map((yearOption) => (
                        <option key={yearOption} value={yearOption}>{yearOption}</option>
                    ))}
                </select>
                <br></br>

                    <label htmlFor="third-select">Semester :</label>
                    <select id="third-select" name="sem">
                        <option selected disabled>Select SEM</option>
                        {semOptions.map((semOption) => (
                            <option key={semOption} value={semOption}>{semOption}</option>
                        ))}
                    </select>
                    <br></br>

            <button id={"submitFormBtn"} aria-busy="false" type="submit" >Submit</button>
            <mark>Note : The Response may take upto 20-30 seconds, Please wait after submitting </mark>
        </form>
            <br/>
            <br/>
            <div id={"outputContainer"}>
            <div className="tabNavigationBar">
                <div className={"tablink tablinkActive"}  onClick={(e)=>changeTab(e,"result")}>Result Data</div>
                <div className={"tablink"}  onClick={(e)=>changeTab(e,"chart")}>Charts & Graphs</div>
                <div className={"tablink"}  onClick={(e)=>changeTab(e,"analysis")}>Analysis</div>
            </div>

            <article className={"tabWindow"}  id={"result"}>

                <h3>{title}</h3>
                {
                    data.length>0? data.map((item) => (
                        <details>
                            <summary>Name : {item.name} - USN : {item.usn}</summary>
                            <section>

                                <ul>
                                    <li>SGPA : {item.sgpa}</li>
                                    <li>Percentage : {item.percentage}</li>
                                    <li>Total Grade Points  : {item.totalGP}</li>
                                    <li>Class : {item.classType}</li>
                                </ul>
                                <details>
                                    <summary>Subject Wise Marks</summary>

                                    {Object.keys(item.subjectMarks).map((key, index) => {
                                        return (
                                            <>
                                                <div>
                                                    <strong>Subject Code : {key}</strong></div>
                                                <ul key={index}>
                                                    <li key={index}>CIE : {item.subjectMarks[key]?.cie}</li>
                                                    <li key={index}>SEE : {item.subjectMarks[key]?.see}</li>
                                                    <li key={index}>TOTAL : {Number(item.subjectMarks[key]?.see)+Number(item.subjectMarks[key]?.cie)}</li>
                                                    <li key={index}>GRADE : {item.subjectMarks[key]?.grade}</li>
                                                    <li key={index}>GRADE POINT : {item.subjectMarks[key]?.gradePoint}</li>
                                                    <li key={index}>CREDIT POINT : {item.subjectMarks[key]?.creditPoint}</li>
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
            </article>

            <article className={"tabWindow"}  id={"chart"}>
                <mark>Note : These are dummy charts , in later phases we will bind this with actual data </mark>

                <Plot/>
                <Donut/>
                <Line/>
           </article>

            <article className={"tabWindow"}  id={"analysis"}>
                <mark>Note : Analytics like Pass Percentage , Toppers , Subject Wise Toppers etc will be displayed here </mark>
               <Analysis/>
            </article>
            </div>
        </>



    );
};

export default GetExcelSheetForm;