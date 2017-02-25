import React, { Component } from 'react';

var Formatic = require('formatic');

class CommunityApp extends Component {
	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap,Formatic.plugins.elementClasses);
		var questions = [
        {
            "type": "fields",
            "key": "schoolyardProgram",
            "label": "Region offers the Schoolyard (U‐05) program consistent with the Schoolyard (U‐05) Program Manual.(AYSO National Rules & RegulationsI E.2.a and I.H.1)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "offered",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "vipProgram",
            "label": "Region has an active VIP (Very Important Player) Programfor players with physical and mental disabilities or has playersthat participate in an Area VIP program.( AYSO Reference Book, Chapter 13)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "offered",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "vipFeatured",
            "label": "VIP program is featured on the Regional registration flyer with contact information.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "featured",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "vipGrowth",
            "label": "There are more players registered in the VIP division than last year.",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "grew",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "u10Program",
            "label": "Region has an active U‐16‐U19 program or has playersthat participate in an Area‐run program for these age groups.(AYSO National Rules & RegulationsI E.2)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "offered",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "extraProgram",
            "label": "Region has teams in an approved EXTRA programor has playersthat participate in an approved Area‐run EXTRA program.(AYSO Reference Book, Chapter13)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "offered",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "secondaryProgram",
            "label": "Region has active tournament or other secondary play, or players actively participate in an Area‐run or Section run tournament or secondary play opportunity.   (1 point each)",
            "fields": [
                {
                    "type": "checkbox-array",
                    "key": "programs",
                    "label": "(Check all that apply)",
                    "choices": {
                        "tournament": " Tournament teams",
                        "national": "National Games teams",
                        "select": "Select teams",
                        "travel": "Travel teams",
                        "other": "Other Secondary Play, for example Spring Select"
                    }
                }
            ]                        
        },
        {
            "type": "fields",
            "key": "secondaryCompliance",
            "label": "Secondary programs, if any were operating, were self‐funded and did not utilize Region general funds and followed Policy Statement 2.2, having separate written guidelines citing player selection and funds usage.(AYSO National Policy Statement 2.2)",
            "fields": [
                {
                    "type": "checkbox-boolean",
                    "key": "compliant",
                    "label": "Yes"
                }
            ]                        
        },
        {
            "type": "string",
            "key": "assistance",
            "rows": 5,
            "label": "Region provided assistance to new, disadvantaged or “sister” AYSO Regions. Describe:"
        },                            
        {
            "type": "string",
            "key": "sportsmanship",
            "rows": 5,
            "label": "Region has a Sportsmanship program in place.(Attach sample documents as appropriate) Describe:"
        },                            
        {
            "type": "string",
            "key": "volunteerRecognition",
            "rows": 5,
            "label": "Region has a volunteer recognition program in place.(Attach sample documents as appropriate) Describe:"
        },                            
        {
            "type": "string",
            "key": "uniquePrograms",
            "rows": 5,
            "label": "List any significant enhancements or unique programs that your Region offersto its participants.  Please attach examples and supporting documentation. Describe:"
        },                            
        {
            "type": "string",
            "key": "communityRelationsProgram",
            "rows": 5,
            "label": "Region has a community relations programin place.Attach supporting documentation. Describe:"
        },                            

        {
            "type": "copy",
            "helpTextHtml": "<div class=\"well well-sm\"><span>TOTAL POINTS AVAILABLE = <strong>35</strong></span><br /><span>Total Points Earned:  <strong>38</strong></span></div>"
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
                        var pdata = { "tab" : "m", "questions" : newValue};
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

export default CommunityApp;
