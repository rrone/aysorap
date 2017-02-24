import React, { Component }  from 'react';
import {Table,Button,Collapse,Well} from 'react-bootstrap';



class Instructions extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          Instructions
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>

            <h2>Assessment Program Instructions</h2>
            <p >The Assessment  Program is designed to recognize Regions and Areas for their successful implementation of AYSO programs in their local communities. Those that actively support AYSO philosophies and policies strive for constant improvement and demonstrate a commitment to training its volunteers, may be an Assessment Program award winner.</p>
            <h3>Entry Rules and Guidelines</h3>
            <p>
                This application should assess the period from July 1, 2016 through June 30, 2017 – the Membership Year (MY2016). The application includes a certification, five category sections and the Points Page.
            </p>
            
            <p>
                If your Region/Area meets the requirements of each line item or you have checked any of the boxes in a line item then record the corresponding points in the &quot;Points&quot; column. Otherwise, leave it blank.  If you don’t understand a question, please call 866-588-2976.
            </p>
            <p>
                Provide written comments when  requested to verify a response.  This is indicated by statements such as “Check all that apply,” “D escribe,”  “Explain,” “Date” and “Names,” etc.
            </p>
            <p>
                This additional information is required to receive credit for an item.  Please  feel free to attach any supporting documents or examples.
            </p>
            <p>
                Regional Board Members must sign the appropriate lines on  the  certification page  indicating their concurrence with  the  application submission. If the certification page is not returned or signed, the application will  not  be processed .
            </p>
            <p>
                Retain a  copy of  the Assessment Program application for your  files and  as a  precaution in  the event that  the application is  lost  or damaged in transit.
            </p>
            
            <ul>
                <li>
                    The RAP application must be completed, signed and turned in to the Area Director by July 1, 2017.
                </li>
                <li>
                    The AAP application must be completed, signed and turned in to the Section Director by August 1,2017.
                </li>
                <li>
                    After  reviewing  the  completed  application, the  Area  Director  should  record  the  points  they  give  to  the Region  in  the  3rd column  labeled &quot;AD/SD Use Only&quot;. Once this is done, the  Area Director must assign the Award Level, sign and forward the application to the Section Director by August 1, 2017.
                </li>
                <li>
                    After reviewing the completed application and approving the Award Level, the Section Director must sign and forward the applications to the AYSO National Office in an envelope marked "Assessments". Envelopes must be postmarked by September 1, 2017 for applications to be considered. (Applications may be emailed to  <a href="mailto:assessments@ayso.org">assessments@ayso.org</a>, or they can be sent via DVD or on a flash drive or faxed to 310-525-1155 as long as they are faxed in original size and format to the National Program Coordinator.)
                </li>
                <li>
                    A list of all applications received will be posted on <a href="http://www.ayso.org/">www.ayso.org</a>. If a Region/Area is not listed, please contact the National Office at (800) 872-2976 extension 7973 to confirm that the application was received.
                </li>  
                <li>
                    Recipients will be notified of their award level at their Section EXPO.
                </li>
            </ul>
            <p>
                Any  Region/Area  can  be  an  award  winner  regardless  of  its  size,  age,  or  budget  as  AYSO  is  looking  for  the  effective  use  of  resources,  quality  delivery  of  services,  and  innovation.  Both  chartered  and  pilot  Regions  may  qualify  for  awards.
            </p>
            <h3>Benefits of the Award</h3>
            <p>
                An Assessment Award recognizes the success and dedication of the Board and its volunteers.  It also serves as a great planning tool for the next season.  Recipients of the Assessment Award  will receive:
            </p>
            <ul>  
                <li>
                    Group recognition and a certificate;
                </li>  
                <li>
                    High resolution graphic file of award to create banners, t-shirts and low resolution graphic to place on website for files, email <a href="mailto:management@ayso.org">management@ayso.org</a>for details.
                </li>
                <li>
                    Seven award pins for Regions (for the RC, RCA, RRA, Treasurer, Safety Director, Registrar and CVPA);
                    <br />
                    or four award pins for Areas (for the AD, ACA, ARA and AM A).
                </li>
                <li>
                    The opportunity to purchase additional pins for other volunteers and staff members, email <a href="mailto:management@ayso.org">management@ayso.org</a> for details.
                </li>
                <li>
                    A press kit for publicizing the award level, email <a href="mailto:management@ayso.org">management@ayso.org</a> for details.
                </li>
            </ul>
        <h3>Award Levels</h3>
        <p>
            There are four award levels: Bronze, Silver, Gold and Platinum. For a further explanation of each level, please refer to the table below.
        </p>
        <Table striped responsive>
		<tbody>
            <tr>
                <td>
                    Level:
                </td>
                <td>
                    Description:
                </td>
            </tr>
            <tr>
                <td>
                    Bronze
                </td>
                <td>
                    This award level is achieved if a Region/Area receives 60-69% of the total points across all categories.
                </td>
            </tr>
            <tr>
                <td>
                    Silver
                </td>
                <td>
                    This award level is achieved if a Region/Area receives 70 %-79% of the total points across all categories.
                </td>
            </tr>
            <tr>
                <td>
                    Gold
                </td>
                <td>
                    This award level is achieved if a Region/Area receives 80-89% of the total points across all categories.
                </td>
            </tr>
            <tr>
                <td>
                    Platinum
                </td>
                <td>
                    This award level is achieved if a Region/Area receives 90-100% of the total points across all categories.
                </td>
            </tr> 
            <tr>  
                <td>
                    Categories for RAP:
                </td>  
                <td>
                    Administration;  Coach,  Referee,  Finance,  Flex  and  Secondary  Programs  and  Community  Outreach
                </td> 
            </tr> 
            <tr>  
                <td>
                    Categories for AAP:
                </td>  
                <td>
                    Area Administration, Area Director, Area  Coach Administration,  Area Management Administration,  Area Referee Administration
                </td> 
            </tr> 
	</tbody>
        </Table> 
        <p><b>Special Note</b>: The Section Director, at his/her discretion, may award a certificate of Honorable Mention to a Region/Area that is unable to achieve one of the four award levels described above. Certificate templates are available from the National Office.</p>

            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Instructions;
