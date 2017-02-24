import React, { Component } from 'react';

var Formatic = require('formatic');

class SponsorApp extends Component {
	render() {

		var config = Formatic.createConfig(Formatic.plugins.bootstrap);
		var questions = [
        {
            "type": "fields",
            "key": "supportedSponsors",
            "label": "National Sponsors are actively supported by the Region",
            "fields": [
                {
                    "type": "checkbox-array",
                    "key": "sponsors",
                    "label": "2 points each",
                    "choices": {
                        "score": "Uniforms purchased from SCORE",
                        "camps": "Region used AYSO Soccer Camps",
                        "spi": "Region purchased from Sports Pins International"
                    }
                },
                {
                    "type": "copy",
                    "helpTextHtml": "<div class=\"well well-sm\"><span>These points are added on to the point total and are not included in the total points available count. You will not lose points by not participating in this section.</span></diV>"
                }
            ]
        }
    ]
    ;

	var Form = React.createFactory(Formatic);
	var res = Form({"fields" : questions, "config" : config,
		onChange: function (newValue) {
			console.log(newValue);
		}
	});
	return(res);
  }
}

export default SponsorApp;
