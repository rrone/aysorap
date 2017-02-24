import React, { Component } from 'react';

var Formatic = require('formatic');

class CoachApp extends Component {
	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap,Formatic.plugins.elementClasses);
var questions = [
        {
            "type": "fields",
            "key": "coachAdminTraining",
            "label": "Regional Coach Administrator completed:",
            "fields": [
                {
                    "type": "fields",
                    "key": "intromgt",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "completed",
                            "label": "Introductory Management/RegionalManagement"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date",
                            "label": "Certification Date:"
                        }
                    ]
                },
                {
                    "type": "fields",
                    "key": "disputeres",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "completed",
                            "label": "Dispute Resolution and Due Process/Dispute Resolution prior to 2014"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date",
                            "label": "Certification Date:"
                        }
                    ]
                }
            ]
        },
        {
            "type": "fields",
            "key": "u6CoachTraining",
            "label": "U‐06 Coaches are trained and certified. (Rules and Regulations Section E.2 (a) )",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "available",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coachcount",
                    "label": "Enter the number of U-6 teams: "
                },
                {
                    "type": "copy",
                    "helpTextHtml": "(Verify that all team coaches have minimum of U6 Coach Certification and AYSO’s Safe Haven®)"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "u8CoachTraining",
            "label": "U‐08 Coaches are trained and certified. (Rules and Regulations Section E.2 (a) )",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "available",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coachcount",
                    "label": "Enter the number of U-8 teams: "
                },
                {
                    "type": "copy",
                    "helpTextHtml": "(Verify that all team coaches have minimum of U8 Coach Certification and AYSO’s Safe Haven®)"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "u10CoachTraining",
            "label": "U‐10 Coaches are trained and certified. (Rules and Regulations Section E.2 (a) )",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "available",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coachcount",
                    "label": "Enter the number of U-10 teams: "
                },
                {
                    "type": "copy",
                    "helpTextHtml": "(Verify that all team coaches have minimum of U10 Coach Certification and AYSO’s Safe Haven®)"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "u12CoachTraining",
            "label": "U‐12 Coaches are trained and certified. (Rules and Regulations Section E.2 (a) )",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "available",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coachcount",
                    "label": "Enter the number of U-6 teams: "
                },
                {
                    "type": "copy",
                    "helpTextHtml": "(Verify that all team coaches have minimum of U12 Coach Certification and AYSO’s Safe Haven®)"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "u14CoachTraining",
            "label": "U‐14 Coaches are trained and certified. (Rules and Regulations Section E.2 (a) )",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "available",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coachcount",
                    "label": "Enter the number of U-14 teams: "
                },
                {
                    "type": "copy",
                    "helpTextHtml": "(Verify that all team coaches have minimum of U14 Coach Certification and AYSO’s Safe Haven®)"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachOrientation",
            "label": "Coach volunteers attend an annual orientation/meeting prior to the start of the season where Safe Haven Protocols and safety procedures are reviewed.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "posted",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "string",
            "key": "coachInstructors",
            "label": "AYSO trained and certified instructors were used at all courses.Provide instructor names:",
            "rows": 5
        },
        {
            "type": "fields",
            "key": "upgradingCoaches",
            "label": "Number of coaches completing or upgrading to:",
            "fields": [
                {
                    "type": "single-line-string",
                    "key": "intcount",
                    "label": "Intermediate Coach"
                },
                {
                    "type": "single-line-string",
                    "key": "advcount",
                    "label": "Advanced Coach"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachRostersReturned",
            "label": "All rosters were managed/returned within 30 days from date of course via eAYSO.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "returned",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachTrainer",
            "label": "Regional Coach Administrator has filled the Regional Coach Trainer position.(Pointsif different than RCA)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "assigned",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "name",
                    "label": "Name the Regional Coach Trainer:    "
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachSafeHavenTrainer",
            "label": "Region has,  at a minimum, one trained, certified and active Regional Coach Instructor who is certified to instruct AYSO’s Safe Haven® Certification for U‐6,  U‐8,  U‐10 and U‐12 coaches.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "assigned",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "name",
                    "label": "Name your most active instructor:"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachCoursesBudgeted",
            "label": "Region budgeted for coaches wishing to attend: coach course/coach instructor course/EXPO/Super Camp/National Coaching Course during the year.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "budgeted",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachCourses",
            "label": "Coach courses held in the Region and rosters returned in eAYSO:   (4 pts each)",
            "fields": [
                {
                    "type": "checkbox-array",
                    "key": "courses",
                    "label": "(Check all that apply)",
                    "choices": {
                        "u6": "U-6 Course",
                        "u8": "U-8 Course",
                        "u10": "U-10 Course",
                        "u12": "U-12 Course"
                    }
                }
            ]                        
        },
        {
            "type": "copy",
            "helpTextHtml": "<div class=\"well well-sm\"><span>TOTAL POINTS AVAILABLE = <strong>65</strong></span><br /><span>Total Points Earned:  <strong>38</strong></span></div>"
        }

    ];
	questions.forEach(function(field) {
//console.log('looking at ' + field.key);
		if (field.hasOwnProperty('classes')) {
//console.log('    adding classes ' + field.classes);
//			config.addElementClass('s' + field.key,field.classes);
			config.addElementClass(field.key,"well");
			config.addElementClass(field.key,"well-sm");
		}
	});

	var Form = React.createFactory(Formatic);
	var res = Form({"fields" : questions, "config" : config,
		onChange: function (newValue) {
			console.log(newValue);
		}
	});
	return(res);
  }
}

export default CoachApp;
