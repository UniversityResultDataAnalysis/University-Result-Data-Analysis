import React, {useEffect, useState} from 'react'

//This is mock API response data for testing
const testData={
    status: "success",
    data: {
        title: "Results - January -February  2023- VII - SEMESTER - AY- 2022-2023 (Revaluation)",
        studentData: [
            {
                "usn": " 4CB19IS001",
                "name": " ABHISHEK B K",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 28,
                        "see": 21,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 27,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 30,
                        "see": 39,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.55,
                "totalGP": 151,
                "percentage": 68,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS002",
                "name": " ADITHYA M NAYAK",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 33,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 38,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 29,
                        "see": 36,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 35,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 95,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.25,
                "totalGP": 165,
                "percentage": 75,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS004",
                "name": " ANANYA U",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 35,
                        "see": 24,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 26,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 28,
                        "see": 29,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 35,
                        "see": 55,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.25,
                "totalGP": 145,
                "percentage": 65,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS005",
                "name": " ANKITH PRABHU",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 28,
                        "see": 30,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 31,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 36,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 30,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 33,
                        "see": 27,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 14
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.55,
                "totalGP": 151,
                "percentage": 68,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS006",
                "name": " ANUSH KAMATH",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 29,
                        "see": 24,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 31,
                        "see": 25,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 33,
                        "see": 34,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 29,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 36,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 35,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 94,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.35,
                "totalGP": 147,
                "percentage": 66,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS007",
                "name": " ARPITHA SHETTY",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 40
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 40,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 35,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 95,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.15,
                "totalGP": 183,
                "percentage": 84,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS009",
                "name": " ASHWINI P H",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 34,
                        "see": 32,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 36,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.05,
                "totalGP": 161,
                "percentage": 73,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS010",
                "name": " BHOOMIKA B NAYAK",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 40,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 39,
                        "see": 42,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 51,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.3,
                "totalGP": 186,
                "percentage": 85.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS011",
                "name": " BINDU",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 34,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 36,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 31,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 34,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.9,
                "totalGP": 158,
                "percentage": 71.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS012",
                "name": " CHAITANYA KINI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 34,
                        "see": 23,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 34,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 34,
                        "see": 40,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 26,
                        "see": 42,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.9,
                "totalGP": 158,
                "percentage": 71.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS013",
                "name": " CHETHAN KRISHNA S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 38,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 46,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 39,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.3,
                "totalGP": 186,
                "percentage": 85.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS014",
                "name": " CHINMAYA S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 35,
                        "see": 44,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 36,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.45,
                "totalGP": 169,
                "percentage": 77,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS015",
                "name": " DARSHAN PARAMESHWAR HEGDE",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 32,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 37,
                        "see": 40,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.65,
                "totalGP": 173,
                "percentage": 79,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS016",
                "name": " GAGAN B",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 29,
                        "see": 30,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 27,
                        "see": 32,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 33,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 27,
                        "see": 37,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.2,
                "totalGP": 144,
                "percentage": 64.5,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS017",
                "name": " HARSHA PATEL",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 40,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 32,
                        "see": 49,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.45,
                "totalGP": 169,
                "percentage": 77,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS018",
                "name": " HEMANTH BHAT",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 36,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 35,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9,
                "totalGP": 180,
                "percentage": 82.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS019",
                "name": " JEEVAN LINGARAJ NAIK",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 22,
                        "see": 28,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 25,
                        "see": 28,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 24,
                        "see": 35,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 22,
                        "see": 36,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 25,
                        "see": 29,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 6.6,
                "totalGP": 132,
                "percentage": 58.5,
                "classType": "SC"
            },
            {
                "usn": " 4CB19IS020",
                "name": " JITHESH",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 27,
                        "see": 15,
                        "grade": "F",
                        "gradePoint": "0",
                        "creditPoint": 0
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 22,
                        "see": 22,
                        "grade": "E",
                        "gradePoint": 4,
                        "creditPoint": 16
                    },
                    "18CS734-User Interface Design": {
                        "cie": 24,
                        "see": 38,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 22,
                        "see": 30,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 23,
                        "see": 29,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 36,
                        "see": 31,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 14
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 90,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 4.85,
                "totalGP": 97,
                "percentage": 41,
                "classType": "FAIL"
            },
            {
                "usn": " 4CB19IS021",
                "name": " JYOTHISHRI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 29,
                        "see": 45,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.3,
                "totalGP": 166,
                "percentage": 75.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS022",
                "name": " KARTHIK",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 33,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 31,
                        "see": 36,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 27,
                        "see": 48,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 95,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.25,
                "totalGP": 165,
                "percentage": 75,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS023",
                "name": " KAVITA SATISH KAMATH",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 46,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 34,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 41,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 55,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 95,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.65,
                "totalGP": 173,
                "percentage": 79,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS024",
                "name": " KEDAR C PAI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 33,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 38,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 35,
                        "see": 44,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 99,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.6,
                "totalGP": 172,
                "percentage": 78.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS025",
                "name": " KRISHNAMURTHY P PAI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 33,
                        "see": 27,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 32,
                        "see": 36,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 28,
                        "see": 50,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 40,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.05,
                "totalGP": 161,
                "percentage": 73,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS026",
                "name": " LIKHITH KUMAR U M",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 29,
                        "see": 32,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 30,
                        "see": 31,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 38,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 26,
                        "see": 44,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 31,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.9,
                "totalGP": 158,
                "percentage": 71.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS027",
                "name": " MAHENDRA SHETTI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 36,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 50,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 55,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 55,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.85,
                "totalGP": 177,
                "percentage": 81,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS028",
                "name": " MALAVIKA A P",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 33,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 40,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 32,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 34,
                        "see": 51,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.6,
                "totalGP": 172,
                "percentage": 78.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS029",
                "name": " MEGHA",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 40,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 34,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 36,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.8,
                "totalGP": 176,
                "percentage": 80.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS030",
                "name": " MOKSHA H S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 49,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 39,
                        "see": 51,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.25,
                "totalGP": 185,
                "percentage": 85,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS031",
                "name": " NAKUL N SHET",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 35,
                        "see": 46,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 30,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.65,
                "totalGP": 173,
                "percentage": 79,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS032",
                "name": " NEHA S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 38,
                        "see": 28,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 40,
                        "see": 42,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 37,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 41,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.75,
                "totalGP": 175,
                "percentage": 80,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS033",
                "name": " NISHMITHA P",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 39,
                        "see": 41,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 39,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 97,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.45,
                "totalGP": 189,
                "percentage": 87,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS034",
                "name": " OMPREETH D R",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 31,
                        "see": 38,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 31,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 29,
                        "see": 45,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 25,
                        "see": 36,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 36,
                        "see": 26,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.8,
                "totalGP": 156,
                "percentage": 70.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS035",
                "name": " P D MEDHINI",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 32,
                        "see": 28,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 30,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 34,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.75,
                "totalGP": 155,
                "percentage": 70,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS037",
                "name": " POOJA",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 37,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.65,
                "totalGP": 173,
                "percentage": 79,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS038",
                "name": " POOJARY PRAJWAL RAGHURAM",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 21,
                        "see": 21,
                        "grade": "E",
                        "gradePoint": 4,
                        "creditPoint": 16
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 23,
                        "see": 24,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 23,
                        "see": 29,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 22,
                        "see": 33,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 18
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 30,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 38,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 87,
                        "see": 0,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 9
                    }
                },
                "sgpa": 6.3,
                "totalGP": 126,
                "percentage": 55.5,
                "classType": "SC"
            },
            {
                "usn": " 4CB19IS039",
                "name": " POOJARY PRAVEEN NARAYANA",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 31,
                        "see": 28,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 31,
                        "see": 32,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 38,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 28,
                        "see": 39,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 36,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 85,
                        "see": 0,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 9
                    }
                },
                "sgpa": 7.5,
                "totalGP": 150,
                "percentage": 67.5,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS040",
                "name": " PRADEEP B",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 33,
                        "see": 27,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.25,
                "totalGP": 165,
                "percentage": 75,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS042",
                "name": " PRATHAM",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 35,
                        "see": 31,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 32,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 36,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 30,
                        "see": 35,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 34,
                        "see": 55,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 18
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.85,
                "totalGP": 157,
                "percentage": 71,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS043",
                "name": " PRATHIKSHA V P",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 33,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 26,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 48,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.85,
                "totalGP": 157,
                "percentage": 71,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS044",
                "name": " PRATHVIK SHANTHAMURTHI RAYKAR",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 41,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 56,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.8,
                "totalGP": 176,
                "percentage": 80.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS045",
                "name": " PRERANA B",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 35,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 34,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 32,
                        "see": 53,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 55,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.75,
                "totalGP": 175,
                "percentage": 80,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS047",
                "name": " ROHAN NAYAK K",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 37,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 35,
                        "see": 52,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 99,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.9,
                "totalGP": 178,
                "percentage": 81.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS048",
                "name": " S SHRADDHA",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 31,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 42,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 37,
                        "see": 51,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 51,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 55,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 97,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.7,
                "totalGP": 174,
                "percentage": 79.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS049",
                "name": " SATHWIK A M",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 30,
                        "see": 22,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 34,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 32,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 51,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8,
                "totalGP": 160,
                "percentage": 72.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS050",
                "name": " SHRIVATHSA",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 30,
                        "see": 29,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 32,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 42,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.05,
                "totalGP": 161,
                "percentage": 73,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS051",
                "name": " SINDHU S BADAL",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 36,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 33,
                        "see": 41,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 94,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.85,
                "totalGP": 177,
                "percentage": 81,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS052",
                "name": " SOHAN S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 28,
                        "see": 38,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 32,
                        "see": 28,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 28,
                        "see": 45,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 39,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.05,
                "totalGP": 161,
                "percentage": 73,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS053",
                "name": " SUDHIR HEGDE K",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 38,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 38,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 38,
                        "see": 42,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 93,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.25,
                "totalGP": 165,
                "percentage": 75,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS054",
                "name": " SUJITH SHRIDHAR NAIK",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 34,
                        "see": 43,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 39,
                        "see": 32,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 36,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 39,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 96,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.3,
                "totalGP": 166,
                "percentage": 75.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS055",
                "name": " SUPRIYA S",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 47,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 37,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 51,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 54,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.1,
                "totalGP": 182,
                "percentage": 83.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS056",
                "name": " SURAJ RAO",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 36,
                        "see": 34,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 33,
                        "see": 35,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 37,
                        "see": 30,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 27,
                        "see": 47,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 36,
                        "see": 37,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 53,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 92,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.95,
                "totalGP": 159,
                "percentage": 72,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS057",
                "name": " SURYANARAYAN U BHAT",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 29,
                        "see": 24,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 28,
                        "see": 23,
                        "grade": "D",
                        "gradePoint": 6,
                        "creditPoint": 24
                    },
                    "18CS734-User Interface Design": {
                        "cie": 35,
                        "see": 27,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 21
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 29,
                        "see": 44,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 35,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 7.35,
                "totalGP": 147,
                "percentage": 66,
                "classType": "FC"
            },
            {
                "usn": " 4CB19IS058",
                "name": " SUSHANTH DU",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 33,
                        "see": 32,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 35,
                        "see": 29,
                        "grade": "C",
                        "gradePoint": 7,
                        "creditPoint": 28
                    },
                    "18CS734-User Interface Design": {
                        "cie": 38,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 31,
                        "see": 39,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 24
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 37,
                        "see": 43,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 50,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 91,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.2,
                "totalGP": 164,
                "percentage": 74.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS059",
                "name": " VEENAXI PAINGINKAR",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 39,
                        "see": 38,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 38,
                        "see": 50,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 36
                    },
                    "18CS734-User Interface Design": {
                        "cie": 40,
                        "see": 48,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 39,
                        "see": 52,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 30
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 45,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 59,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 9.1,
                "totalGP": 182,
                "percentage": 83.5,
                "classType": "FCD"
            },
            {
                "usn": " 4CB19IS060",
                "name": " VINOLIYA SHARLINE PINTO",
                "subjectMarks": {
                    "18CS71-Artificial Intelligence and Machine Learning": {
                        "cie": 38,
                        "see": 35,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS72-Big Data Analytics": {
                        "cie": 39,
                        "see": 31,
                        "grade": "B",
                        "gradePoint": 8,
                        "creditPoint": 32
                    },
                    "18CS734-User Interface Design": {
                        "cie": 39,
                        "see": 42,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CS745-Robotic Process Automation Design & Development": {
                        "cie": 38,
                        "see": 51,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18ME751-Energy and Environment": {
                        "cie": 40,
                        "see": 44,
                        "grade": "A",
                        "gradePoint": 9,
                        "creditPoint": 27
                    },
                    "18CSL76-Artificial Intelligence and Machine Learning Laboratory": {
                        "cie": 40,
                        "see": 57,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 20
                    },
                    "18CSP77-Project work Phase -1": {
                        "cie": 98,
                        "see": 0,
                        "grade": "S",
                        "gradePoint": 10,
                        "creditPoint": 10
                    }
                },
                "sgpa": 8.75,
                "totalGP": 175,
                "percentage": 80,
                "classType": "FCD"
            }
        ]
    }
}

const Analysis = () => {

    useEffect(() => {
        //do your test here
        //here you can access testData and do your test functions for analysis
        console.log(testData);
    }, []);


    return (
        <table>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th scope="col">#</th>
                <td scope="col">Total</td>
                <td scope="col">Total</td>
                <td scope="col">Total</td>
                <td scope="col">Total</td>
                <td scope="col">Total</td>
            </tr>
            </tfoot>
        </table>
    )
}

export default Analysis;