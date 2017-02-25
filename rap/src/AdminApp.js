import React, { Component } from 'react';

var axios = require('axios');

var Formatic = require('formatic');

class AdminApp extends Component {

	constructor(props) {
		super(props);
		this.state = {token : '1234', "questions": this.loadquestions()};
	}

	loadquestions() {
		var loadedquestions = {};
		axios.get('/questions?t={this.state.token}&tab=a')
			.then(function(response) {
				console.log(response);
				loadedquestions = response.questions;
			})
			.catch(function(error) {
				console.log('error!!!');
				console.dir(error);
			});
		return(loadedquestions);

	}

	savequestions(values) {
		var pdata = {"token" : this.state.token, "tab" : "a", "questions" : values};
		axios.post('/questions', {pdata})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});



	}

	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap);
		var questions = 
[
                    {
                        "type": "string",
                        "key": "communities",
                        "isSingleLine": false,
                        "label": "Communities served (Print the city names and state or geographic zone to be included on the Certificate i.e. So. California):",
                        "rows": 5
                    },
                    {
                        "type": "string",
                        "key": "fee",
                        "isSingleLine": true,
                        "label": "Average per-player fee"
                    },
                    {
                        "type": "string",
                        "key": "playerCount",
                        "isSingleLine": true,
                        "label": "Number of players"
                    },
                    {
                        "type": "select",
                        "key": "applyingFor",
                        "label": "Currently applying for (Choose one):",
                        "choices": 
                                {
                                    "platinum": "Platinum",
                                    "gold": "Gold",
                                    "silver": "Silver",
                                    "bronze": "Bronze"
                                }
                    },

                    {
                        "type": "fields",
                        "key": "areaAttendance",
                        "required": false,
                        "label": "Regional Commissioner or delegate attended at least one Area meeting or Area conference call that was offered during the past year. (Regional Commissionerjob description)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "attended",
                                "label": "Yes",
                                "points": 2,
                            },
                            {
                                "type": "string",
                                "key": "date",
                                "isSingleLine": true,
                                "label": "If Yes, Date attended Area meeting or conference",
                                "points": 2,
                            }
                        ]
                    },
                    {
                        "type": "checkbox-array",
                        "key": "boardPositionsFilled",
                        "required": true,
                        "label": "All required Regional Board positions, as listed below, were filled (Bylaws Section 1.04; Standard Regional GuidelinesArticle 6.1,  Safe Haven 9.1) 1 point for each position filled",
                        "choices": {
                            "rc": "Regional Commissioner",
                            "rt": "Regional Treasurer",
                            "sd": "Regional Safety Director",
                            "cvpa": "Regional CVPA",
                            "rra": "Regional Referee Administrator",
                            "rca": "Regional Coach Administrator",
                            "reg": "Regional Registrar"
                        }
                    },
                    {
                        "type": "checkbox-array",
                        "key": "boardPositionsTrained",
                        "required": false,
                        "label": "All required Regional Board positions, as listed below, received discipline specific training.     2 points for each position trained",
                        "choices": {
                            "rc": "Regional Commissioner",
                            "rt": "Regional Treasurer",
                            "sd": "Regional Safety Director",
                            "cvpa": "Regional CVPA",
                            "rra": "Regional Referee Administrator",
                            "rca": "Regional Coach Administrator",
                            "reg": "Regional Registrar"
                        }
                    },
                    {
                        "type": "checkbox-array",
                        "key": "regionalCommissionerTraining",
                        "label": "Regional Commissioner completed: (Regional Commissioner position description) (Check all that apply)",
                        "choices": {
                            "orient": "RC  and Board Orientation by AD",
                            "intro": "Introductory Management/RegionalManagement",
                            "dispute": "Dispute Resolution and Due Process/Dispute Resolution prior to 2014"
                        }
                    },
                    {
                        "type": "string",
                        "isSingleLine": false,
                        "key": "philosophiesPublished",
                        "label": "AYSO philosophies were publicized and promoted in the community.(Bylaws Section 1.04.) List examples:",
                        "points": 2
                    },
                    {
                        "type": "fields",
                        "key": "boardSafeHaven",
                        "label": "All Regional Board Volunteers have AYSO’s Safe Haven® Certification",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "certified",
                                "label": "Yes",
                                "points": 3
                            }
                        ]
                    },
                    {
                        "type": "select",
                        "key": "otherBoardTraining",
                        "label": "Regional Board Volunteers, other than those listed in #2 above, have attended discipline specific training.        1‐3 points available",
                        "choices": {
                            "low": "50‐75% = 1 point",
                            "medium": "75‐95%= 2 points",
                            "high": "95% and above = 3 points"
                        }
                    },
                    {
                        "type": "fields",
                        "key": "boardJobDescription",
                        "label": "All Regional Board Volunteers have received the most current Safe Haven® approved job descriptions. (Standard Regional Policies and Protocols Article 4.D)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "received",
                                "label": "Yes",
                                "points": 3
                            }
                        ]
                    },
                    {
                        "type": "fields",
                        "key": "policiesSubmitted",
                        "label": "Standard Regional Policies and Protocols and/or any customized Regional Addendums were reviewed/updated/adopted, signed by RC, AD and SD, and submitted to the NationalOffice and made available to the entire Region and/or were distributed upon request.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "submitted",
                                "label": "Yes"
                            },
                            {
                                "type": "string",
                                "key": "submittedDate",
                                "label": "Date submitted"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "openBoardNominations",
                        "label": "Region had Board Member nominations(open to everyone) and electionsthis year (or as appropriate). (Standard Regional Policies and Protocols Article 4.B)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "submitted",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "openRCNominations",
                        "label": "Region has nominations for Regional Commissioner at least every three years and nominations are open to all who are interested in accordance with the processstated in the Policies and Protocols. (Standard Regional Policies and Protocols Article 4.B)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "submitted",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "allVolunteer",
                        "label": "All administrators and coaches are volunteers ‐ none are paid.(National Policy Statement 2.5)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "submitted",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "contractorCompliance",
                        "label": "If the Region pays any Independent Contractors for services, an AYSO template contract has been properly executed by the National Executive Director and signed and the &quot;1099 Program&quot; is being followed.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "submitted",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "volunteerForm",
                        "label": "All volunteers in each of the following categories registered using an eSigned eAYSO online form and were processed by the Region prior to the volunteer starting their position.(Bylaw Section 1.04 (c); National Policy Statement 3.7)",
                        "fields": [
                            {
                                "type": "single-line-string",
                                "key": "referees",
                                "label": "# of Referees"
                            },
                            {
                                "type": "single-line-string",
                                "key": "coaches",
                                "label": "# of Coaches"
                            },
                            {
                                "type": "single-line-string",
                                "key": "other",
                                "label": "# of Other Volunteers"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "rifUpdated",
                        "label": "Regional Information Form (RIF) updated in eAYSO upon any changesto the Regional Board.(Regional Commissioner position description; Treasurer Manual)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "updated",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "string",
                        "key": "registrationPublicized",
                        "label": "Region publicized registration dates and made every effort to accommodate all playersinterested in registering.  Describe:",
                        "rows": 5
                    },
                    {
                        "type": "fields",
                        "key": "playersRegistered",
                        "label": "All players are registered using an eSigned eAYSO online form or an AYSO Player Registration Form. (Policy Statements Article 3.7)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "registered",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "rulesAndRegulations",
                        "label": "Region abides by all AYSO Rules & Regulations, Bylaws and Policy Statements. (Bylaws 1.04(a); Standard Regional Policies and Protocols Article 4.A.)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "followed",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "string",
                        "key": "meetingsAndAgendas",
                        "label": "Regional Board meetings and agendas were publicized and open to all the Region’s participants prior to the meetings.(Standard Regional Policies and Protocols Article 6.C.) Describe:",
                        "rows": 5
                    },
                    {
                        "type": "fields",
                        "key": "boardMinutes",
                        "label": "Regional Board meeting minutes are prepared, kept available for review.  (Standard Regional Policies and Protocols Article 6.C.)   (Check all that apply ‐ points earned for any)",
                        "fields": [
                            {
                                "type": "checkbox-array",
                                "key": "minutes",
                                "choices": {
                                    "area": "Distributed to Area Director",
                                    "region": "Available to the Region’s participants upon request"
                                }
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "providesUniforms",
                        "label": "Region provides uniforms in keeping with AYSO Rules & Regulations.",
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
                        "key": "trademarks",
                        "label": "AYSO trademarks are used properly.(Policy Statements Article 1.1)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "trademarks",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "accidentInsurance",
                        "label": "Soccer Accident Insurance Program (SAI) was administered in a manner consistent with current procedures.(Bylaw Section 1.04)",
                        "fields": [
                            {
                                "type": "copy",
                                "helpTextHtml": "<ul><li>Secures necessary permits and where required, certificates of liability for all practice and playing fields.</li><li>SAI brochures are provided to all parents/guardians upon registration and/or posted online.</li><li>All preliminary and final Soccer Accident Insurance (SAI) claim forms were submitted to AYSO’s insurance carrier within 90 days of injury as necessary.(Bylaw 1.04(o))</li></ul>"
                            },
                            {
                                "type": "checkbox-boolean",
                                "key": "trademarks",
                                "label": "None Reported"
                            }
                        ]                        
                    },
                    {
                        "type": "string",
                        "key": "goalSafety",
                        "label": "Goals are properly anchored, safety stickers in place; nets are secured and safely fastened.Explain how goal post safety is covered with every volunteer and player.(Policy Statement 2.10) ",
                        "rows": 5
                    },
                    {
                        "type": "fields",
                        "key": "teamFormation",
                        "label": "Procedures for team formation and balancing were publicized and followed. (Bylaw Section 1.04(d; Standard Regional Policies and Protocols Article 7.B.2.))",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "formation",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "kidsZone",
                        "label": "Region implemented the Kids Zone® program to promote a fun, fair, safe soccer environment.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "implemented",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "waitingList",
                        "label": "Procedures are established and published for utilizing a waiting list.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "established",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "regionalCalendar",
                        "label": "Regional calendar is established and distributed before the start of the season.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "published",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "string",
                        "key": "volunteerRecruitment",
                        "label": "Region has a volunteer recruitment program in place.Describe:",
                        "rows": 5
                    },
                    {
                        "type": "fields",
                        "key": "areaDirectorBoardMeeting",
                        "label": "Area Director was invited to at least one Regional Board meeting/call during the year.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "invited",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "goalsAndObjectives",
                        "label": "Regional goals and objectives were discussed, decided upon and distributed to all Regional Board and staff.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "discussed",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "playerRegistrationLevel",
                        "label": "Retained player registration at same level as previous year.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "maintained",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "growthGoal",
                        "label": "Internal growth goal set for player registrationsfor the year.(Points earned if goal is met or exceeded, must be a positive number > 0.",
                        "fields": [
                            {
                                "type": "single-line-string",
                                "key": "goal",
                                "label": "Growth goal: (%)"
                            },
                            {
                                "type": "single-line-string",
                                "key": "actual",
                                "label": "Actual goal: (%)"
                            },
                            {
                                "type": "select",
                                "key": "result",
                                "label": "",
                                "choices": {
                                    "met": "Region met this goal",
                                    "exceeded": "Region exceeded this goal"
                                }
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "events",
                        "label": "Region sent representativesto the Section EXPO and/or Road Show to receive additional training in their discipline.(1 point per person up to 4.)",
                        "fields": [
                            {
                                "type": "single-line-string",
                                "key": "howMany",
                                "label": "How many?"
                            },
                            {
                                "type": "checkbox-array",
                                "key": "membersSent",
                                "label": "(Check all that apply ‐ Points earned for sending participantsto any events above)",
                                "choices": {
                                    "rt": "Treasurer",
                                    "sd": "Safety Director",
                                    "cvpa": "CVPA",
                                    "reg": "Registrar",
                                    "rca": "Regional Coach Administrator",
                                    "rra": "Regional Referee Administrator",
                                    "rc": "Regional Commissioner",
                                    "other": "Others"
                                }
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "handbookDistributed",
                        "label": "Parent/player handbook distributed to the Regional participants before the start of the season (hard or soft copy), and posted to the website.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "distributed",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "websiteUpdated",
                        "label": "Regional website created and updated periodically to keep parents and volunteers better informed of the activities in the Region",
                        "fields": [
                            {
                                "type": "single-line-string",
                                "key": "url",
                                "label": "URL:"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "smallSided",
                        "label": "Small‐sided games were utilized",
                        "fields": [
                            {
                                "type": "checkbox-array",
                                "key": "membersSent",
                                "label": "(Check all that apply ‐ Points earned for sending participantsto any events above)",
                                "choices": {
                                    "u5": "U-5",
                                    "u6": "U-6",
                                    "u8": "U-8",
                                    "u10": "U-10",
                                    "u12": "U-12"
                                }
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "interRegion",
                        "label": "Region participated in Inter‐Regional play with other Regionsin the Area, if available.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "participated",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "mailingList",
                        "label": "The Region HAS NOT distributed its mailing list.(Policy Statements Article One 1.2)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "distributed",
                                "label": "No, it has not been distributed"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "safeHavenInstructor",
                        "label": "Region has, at a minimum, one trained, certified and active Regional Management Instructor who is certified to instruct AYSO’s Safe Haven® Certification for Regional Board Positions.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "available",
                                "label": "URL:"
                            },
                            {
                                "type": "single-line-string",
                                "key": "instructor",
                                "label": "Name your most active instructor:"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "inPersonRegistration",
                        "label": "Region holds live registration events(face‐to‐face) for at least one registration.",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "held",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "fields",
                        "key": "refundPolicy",
                        "label": "Region’s refund policy is established and posted on the Region’s website.(Standard Regional Policies and Protocols)",
                        "fields": [
                            {
                                "type": "checkbox-boolean",
                                "key": "posted",
                                "label": "Yes"
                            }
                        ]                        
                    },
                    {
                        "type": "copy",
                        "helpTextHtml": "<div class=\"well well-sm\"><span>TOTAL POINTS AVAILABLE = <strong>115</strong></span><br /><span>Total Points Earned:  <strong>38</strong></span></div>"
                    }
            ]            ;

	var Form = React.createFactory(Formatic);
	var res = Form({"fields" : questions, "config" : config,
		onBlur: function (newValue) {
			var pdata = { "tab" : "a", "questions" : newValue};
			axios.post('/questions', {pdata})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	});
	return(res);
  }
}

export default AdminApp;
