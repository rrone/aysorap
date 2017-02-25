import React, { Component } from 'react';

var Formatic = require('formatic');

class FinanceApp extends Component {
	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap,Formatic.plugins.elementClasses);
		var questions = [
        {
            "type": "fields",
            "key": "finPlayerFees",
            "label": "Payments for all player registration fee invoices, along with other invoices due to the National Office, were received at the National Office no later than 30 days following the invoice date.(Bylaw Section 1.04 (M); Treasurer Manual)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "received",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "finMeetingsBudgeted",
            "label": "Funds were budgeted for and Regional Commissioner attended the following meetings: (Regional Commissioner Position description) (Points only for meetings actually attended).",
            "fields": [
                {
                    "type": "checkbox-array",
                    "key": "courses",
                    "label": "(Check all that apply)",
                    "choices": {
                        "rc": "RC Training within 1 year of appointment",
                        "expo": "Most recent AYSO EXPO",
                        "nagm": "National Annual General Meeting (NAGM)*"
                    }
                },
                {
                    "type": "copy",
                    "helpTextHtml": "*If the RC could not attend, another Board Member attended or proxy form was submitted."
                }

            ]                        
        },
        {
            "type": "fields",
            "key": "finBudgetSubmitted",
            "label": "Operating budget for the Region was submitted to the National Office by June 1st prior to the beginning of the fiscal year and copied to the Area Director.(Bylaw 1.04 (M); Treasurer Manual)",
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
            "key": "finGuidelines",
            "label": "Financial guidelines, as established by the Treasurer’s Manual, Standard Regional Policies and Protocols and Bylaws, are administered properly within the Region.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "proper",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "finBudgetPublicized",
            "label": "Operating budget was made available to volunteers and parentsfor their information via:   (Bylaw Section 1.04, l; Policy Statement 3.2)",
            "fields": [
                {
                    "type": "checkbox-array",
                    "key": "method",
                    "label": "(Check all that apply)",
                    "choices": {
                        "posted": "Posted or distributed (via newsletter) in the Region",
                        "online": "Posted online",
                        "other": "Other"
                    }
                }

            ]                        
        },
        {
            "type": "fields",
            "key": "finNAPUtilized",
            "label": "All Regional accounts utilize the National Accounting Program (NAP).This includes all funds; tournament fund‐raising, team fund‐raising, etc.which are accounted for by the Treasurer within NAP.(Bylaw Section 1.04, M;",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "utilized",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "finNAPParticipated",
            "label": "Region participated in NAP online.",
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
            "key": "finAudited",
            "label": "All Regional accounts are audited by someone other than the authorized account signatories on an annual basis with a copy of the report being sent to the Area Director.(Treasurer Manual)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "audited",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "finCertifications",
            "label": "Regional Auditor position filled and the volunteer has attended AYSO Auditor and Treasurer training.",
            "fields": [
                {
                    "type": "single-line-text",
                    "key": "auditorname",
                    "label": "Regional Auditor Name"
                },
                {
                    "type": "single-line-text",
                    "key": "auditordate",
                    "label": "Auditor Certification Date"
                },
                {
                    "type": "single-line-text",
                    "key": "treasurerdate",
                    "label": "Treasurer Certification Date"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "treasurerTraining",
            "label": "Regional Treasurer has completed the following training:",
            "fields": [
                {
                    "type": "fields",
                    "key": "safehaven",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "completed",
                            "label": "AYSO’s Safe Haven®"
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
                    "key": "auditor",
                    "fields": [
                        {
                            "type": "checkbox-boolean",
                            "key": "completed",
                            "label": "Auditor"
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
            "type": "copy",
            "helpTextHtml": "<div class=\"well well-sm\"><span>TOTAL POINTS AVAILABLE = <strong>35</strong></span><br /><span>Total Points Earned:  <strong>18</strong></span></div>"
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
                        var pdata = { "tab" : "f", "questions" : newValue};
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

export default FinanceApp;
