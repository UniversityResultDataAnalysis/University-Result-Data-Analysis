// Function to find top 3 students based on highest SGPA value
export function findTopStudents(data) {
    const sortedData = data.studentData.slice().sort((a, b) => b.sgpa - a.sgpa);
    return sortedData.slice(0, 3);
}

// Function to find number of students passed and failed in a subject
export function findPassedFailedCount(data, subject) {
    let passedCount = 0;
    let failedCount = 0;

    data.studentData.forEach(student => {
        const subjectMarks = student.subjectMarks[subject];
        if (subjectMarks && subjectMarks.grade !== "F") {
            passedCount++;
        } else if (subjectMarks && subjectMarks.grade === "F") {
            failedCount++;
        }
    });

    return {passed: passedCount, failed: failedCount};
}

// Function to find list of failed students in a subject
export function findFailedStudents(data, subject) {
    const failedStudents = [];

    data.studentData.forEach(student => {
        const subjectMarks = student.subjectMarks[subject];
        if (subjectMarks && subjectMarks.grade === "F") {
            failedStudents.push({
                usn: student.usn,
                name: student.name,
                cie: student.subjectMarks[subject].cie,
                see: student.subjectMarks[subject].see
            });
        }
    });

    return failedStudents;
}


// Function to calculate the average marks of students in each subject
export function calculateAverageMarks(data) {
    const averageMarks = {};

    data.studentData.forEach(student => {
        Object.keys(student.subjectMarks).forEach(subject => {
            if (!averageMarks[subject]) {
                averageMarks[subject] = {totalCIE: 0, totalSEE: 0, totalCreditPoint: 0, count: 0};
            }
            const marks = student.subjectMarks[subject];
            averageMarks[subject].totalCIE += marks.cie;
            averageMarks[subject].totalSEE += marks.see;
            averageMarks[subject].totalCreditPoint += marks.creditPoint;
            averageMarks[subject].count++;
        });
    });

    // Calculate averages
    Object.keys(averageMarks).forEach(subject => {
        const subjectData = averageMarks[subject];
        subjectData.avgCIE = subjectData.totalCIE / subjectData.count;
        subjectData.avgSEE = subjectData.totalSEE / subjectData.count;
        subjectData.avgCreditPoint = subjectData.totalCreditPoint / subjectData.count;
        delete subjectData.totalCIE;
        delete subjectData.totalSEE;
        delete subjectData.totalCreditPoint;
        delete subjectData.count;
    });

    return averageMarks;
}

// Function to list the count of students with each type of grade in a subject
export function countGradeTypes(data, subject) {
    const gradeCounts = {};

    // Iterate over each student's data to find all unique grades for the given subject
    data.studentData.forEach(student => {
        const grade = student.subjectMarks[subject].grade;
        if (!gradeCounts[grade]) {
            gradeCounts[grade] = 0;
        }
        gradeCounts[grade]++;
    });

    return gradeCounts;
}


// Function to extract an array of unique subject names from the data
export function getAllSubjectNames(data) {
    const subjectNames = new Set();
    data.studentData.forEach(student => {
        Object.keys(student.subjectMarks).forEach(subject => {
            subjectNames.add(subject);
        });
    });
    return Array.from(subjectNames);
}

