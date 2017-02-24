import React, { Component } from 'react';

var Formatic = require('formatic');

class RefereeApp extends Component {
	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap);
		var questions = [
        {
            "type": "fields",
            "key": "lawBookProvided",
            "label": "AYSO Edition of the FIFA Laws of the Game and AYSO Guidance for Referees, Coaches, Other Volunteers and Parents were provided to every new referee",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "provided",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "refereeOrientation",
            "label": "Referee volunteers attended an annual orientation/meeting prior to the start of the season.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "provided",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "refereeInstructorsProvided",
            "label": "AYSO trained and certified instructors were used at all courses. (National Referee Program Manual)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "provided",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "diagonalControl",
            "label": "Region utilizesthe diagonal system of control (one referee and two assistant referees) or when less than three referees are available for a game, only one referee is on the field, assisted by a qualified AR and/or by a club lineperson on the touchlines.(Only system approved by FIFA and followed by AYSO)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "utilized",
                    "label": "Yes"
                },
                {
                    "type": "single-line-string",
                    "key": "coverage",
                    "label": "Percentage of games covered by three neutral officials"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "refAdminTraining",
            "label": "Regional Referee Administrator completed:",
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
            "key": "refRostersReturned",
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
            "key": "refAdminStaff",
            "label": "Regional Referee Administrator has filled the following staff positions:",
            "fields": [
                {
                    "type": "fields",
                    "key": "rdra",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "filled",
                            "label": "Regional Director of Referee Assessment"
                        },
                        {
                            "type": "single-line-string",
                            "key": "name",
                            "label": "Name:"
                        }
                    ]
                },
                {
                    "type": "fields",
                    "key": "rdri",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "filled",
                            "label": "Regional Director of Referee Instruction"
                        },
                        {
                            "type": "single-line-string",
                            "key": "name",
                            "label": "Name:"
                        }
                    ]
                },
                {
                    "type": "fields",
                    "key": "assignor",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "filled",
                            "label": "Referee Scheduler/Assignor"
                        },
                        {
                            "type": "single-line-string",
                            "key": "name",
                            "label": "Name:"
                        }
                    ]
                }
            ]
        },
        {
            "type": "fields",
            "key": "refTrainingBudgeted",
            "label": "Region budgeted for referees wishing to attend a referee instructor course/referee assessor course/EXPO/Super Camp or Road Show during the year.",
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
            "key": "refCoursesHeld",
            "label": "Referee courses held in the Region and rostersreturned in:",
            "fields": [
                {
                    "type": "fields",
                    "key": "u8",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "held",
                            "label": "U‐8 Referee Course Date"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date",
                            "label": "Date:"
                        }
                    ]
                },
                {
                    "type": "fields",
                    "key": "ar",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "held",
                            "label": "Assistant Referee Course"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date",
                            "label": "Date:"
                        }
                    ]
                },
                {
                    "type": "fields",
                    "key": "basic",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "held",
                            "label": "Basic Referee Course"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date1",
                            "label": "Date:"
                        },
                        {
                            "type": "single-line-string",
                            "key": "date2",
                            "label": "Date:"
                        }
                    ]
                }
            ]
        },
        {
            "type": "fields",
            "key": "upgradingReferees",
            "label": "Number of referees completing or upgrading to:",
            "fields": [
                {
                    "type": "single-line-string",
                    "key": "advcount",
                    "label": "Advanced Referee"
                },
                {
                    "type": "single-line-string",
                    "key": "natcount",
                    "label": "National Referee"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "coachSafeHavenTrainer",
            "label": "Region has, at a minimum, one trained, certified and active Regional Referee Instructor who is certified to instruct AYSO’s Safe Haven® Certification for referees.",
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
            "type": "string",
            "key": "refPRO",
            "label": "Region implemented a Player‐RefereeOrganization Program (PRO, a.k.a.youth referees). Describe:",
            "rows": 5
        },
        {
            "type": "fields",
            "key": "refMentoring",
            "label": "Region implemented a formal mentoring program for referees. (National Referee Program Manual)",
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
            "key": "refAssignorWebinar",
            "label": "Referee Assignor has completed the Referee Assignor‐Scheduler Webinar",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "completed",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "copy",
            "helpTextHtml": "<div class=\"well well-sm\"><span>TOTAL POINTS AVAILABLE = <strong>65</strong></span><br /><span>Total Points Earned:  <strong>38</strong></span></div>"
        }
    ];

	var Form = React.createFactory(Formatic);
	var res = Form({"fields" : questions, "config" : config,
		onChange: function (newValue) {
			console.log(newValue);
		}
	});
	return(res);
  }
}

export default RefereeApp;
