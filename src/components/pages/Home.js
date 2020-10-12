import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import Loading from "../auth/Loading";
import ErrorNotice from "../misc/ErrorNotice";


export default function Home() {
  const { userData } = useContext(UserContext);
    const [entName, setEntName] = useState();
    const [opId, setopId] = useState();
    let [error, setError] = useState();
    const [loadinig, setLoading] = useState(false);
    let [enableChk, setEnableChk] = useState(false);
    let [enableCount, setEnableCount] = useState(false);
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");




const submitEnt = async (e) => {
    e.preventDefault();

    try {
    setError(error="")
    if(!entName || entName === "Select Entitlement") return setError("Please select an entitlement")
    if(!opId || opId.trim === '') return setError("Enter the Opportunity Id")

    let opIdList = opId.split(',');
    const inputs = { entName, opIdList, checked, count };

      const tempRes = await Axios.post("http://localhost:5000/users/entitlements", inputs);
      setData(tempRes)

        // for(let i=0; i<data.data.length;i++){
        //     console.log(data.data[i].OpId)
        // }


    } catch (err) {
      setError("Error");
    }
  };


  return (
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
      {userData.user ? (
          <div>


              <div className="container mt-4">
              <div className="card">
                  <div className="card-header">
                      Entitlements
                  </div>
                  <div className="card-body">
                            <form className="form" onSubmit={submitEnt}>
                                <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Entitlement List</label>
                                        <div className="col-sm-10">

                                        {/*<select name="entName" onChange={(e) => setEntName(e.target.value); document.getElementById("bookhallfor").style.display = "block";} className="custom-select">*/}
                                        <select name="entName" id="entName" className="custom-select" onChange={(e) => {
                                            setError(error="")
                                          var ele = document.getElementById("entName");
                                          var strEnt = ele.options[ele.selectedIndex].text;
                                          setEntName(strEnt);
                                          if(e.target.value === 'feature'){
                                              setEnableCount(enableChk = false)
                                              setEnableChk(enableChk = true)
                                          }else{
                                              setEnableChk(enableChk = false)
                                              setEnableCount(enableChk = true)
                                          }

                                        }}>
                                             <option value="null" key="choose">Select Entitlement</option>
                                            <option key="analyticsapi-daily-calls" value="quantity">analyticsapi-daily-calls</option>
                                            <option value="quantity">analyticsapi-hourly-calls</option>
                                            <option value="quantity">analyticsapi-maximum-history-months</option>
                                            <option value="quantity">analyticsapi-maximum-period-days</option>
                                            <option value="feature">analyticsapi-summary-endpoint</option>
                                            <option value="feature">analyticsapi-topkeyphrases-endpoint</option>
                                            <option value="feature">analyticsapi-topshared-endpoint</option>
                                            <option value="feature">analyticsapi-topsources-endpoint</option>
                                            <option value="feature">analyticsapi-toptags-endpoint</option>
                                            <option value="feature">mi-public-api-management</option>
                                            <option value="feature">apiHourlyExports</option>
                                            <option value="feature">apiPushBroadcast</option>
                                            <option value="feature">apiPushEditorial</option>
                                            <option value="feature">apiPushDocumentBody</option>
                                            <option value="feature">apiPushFacebook</option>
                                            <option value="feature">apiPushSocial</option>
                                            <option value="quantity">api-exports-max-history-months</option>
                                            <option value="quantity">api-exports-max-period-days</option>
                                            <option value="feature">audienseIntegration</option>
                                            <option value="feature">ave-widget</option>
                                            <option value="feature">avg-sentiment-widget</option>
                                            <option value="feature">chinaPSP</option>
                                            <option value="feature">composite-widget</option>
                                            <option value="feature">custom-scoring</option>
                                            <option value="feature">custom-scoring-extended-report</option>
                                            <option value="quantity">dashboards</option>
                                            <option value="feature">digital-marketing-insight-report</option>
                                            <option value="feature">dyn-newsletter-entitlement</option>
                                            <option value="feature">dow-jones-factiva-full</option>
                                            <option value="feature">dow-jones-factiva-light</option>
                                            <option value="feature">els-widget</option>
                                            <option value="feature">emoji-graph-widget</option>
                                            <option value="feature">emoji-widget</option>
                                            <option value="feature">engage</option>
                                            <option value="quantity">engageUserCount</option>
                                            <option value="feature">entangle-widget</option>
                                            <option value="feature">enterprise-account</option>
                                            <option value="feature">explore</option>
                                            <option value="feature">fh-sentiment-content-widget</option>
                                            <option value="feature">fullTextExports</option>
                                            <option value="feature">geo-segment-widget</option>
                                            <option value="feature">germanPremiumContent</option>
                                            <option value="feature">google-analytics-widget</option>
                                            <option value="feature">icm-australia</option>
                                            <option value="feature">icm-austria</option>
                                            <option value="feature">icm-belgium</option>
                                            <option value="feature">icm-brazil</option>
                                            <option value="feature">icm-canada</option>
                                            <option value="feature">icm-china</option>
                                            <option value="feature">icm-denmark</option>
                                            <option value="feature">icm-finland</option>
                                            <option value="feature">icm-france</option>
                                            <option value="feature">icm-germany</option>
                                            <option value="feature">icm-hong-kong</option>
                                            <option value="feature">icm-india</option>
                                            <option value="feature">icm-ireland</option>
                                            <option value="feature">icm-kenya</option>
                                            <option value="feature">icm-liechtenstein</option>
                                            <option value="feature">icm-malaysia</option>
                                            <option value="feature">icm-mexico</option>
                                            <option value="feature">icm-netherlands</option>
                                            <option value="feature">icm-new-zealand</option>
                                            <option value="feature">icm-norway</option>
                                            <option value="feature">icm-philippines</option>
                                            <option value="feature">icm-qatar</option>
                                            <option value="feature">icm-saudi-arabia</option>
                                            <option value="feature">icm-singapore</option>
                                            <option value="feature">icm-south-africa</option>
                                            <option value="feature">icm-sweden</option>
                                            <option value="feature">icm-switzerland</option>
                                            <option value="feature">icm-united-arab-emirates</option>
                                            <option value="feature">icm-united-kingdom</option>
                                            <option value="feature">icm-united-states</option>
                                            <option value="feature">icmAWSEmail</option>
                                            <option value="quantity">icmContactExportLimit</option>
                                            <option value="feature">icmFeedback</option>
                                            <option value="quantity">icmRecipientsPerDay</option>
                                            <option value="quantity">icmRecipientsPerDistribution</option>
                                            <option value="feature">image-widget</option>
                                            <option value="feature">influencerApp</option>
                                            <option value="quantity">inputsPerReport</option>
                                            <option value="quantity">inputsPerWidget</option>
                                            <option value="feature">interactive-word-cloud-widget</option>
                                            <option value="feature">keyphrase-trend-widget</option>
                                            <option value="feature">lens-developer-preview</option>
                                            <option value="feature">localized-concept-cloud-widget</option>
                                            <option value="quantity">maxAlerts</option>
                                            <option value="quantity">maxNewsletterRecipients</option>
                                            <option value="feature">media-exposure-highlights-widget</option>
                                            <option value="feature">momentum-widget</option>
                                            <option value="feature">newIcmSearch</option>
                                            <option value="feature">newsfeedDocumentCap</option>
                                            <option value="feature">newsfeed-internal-use</option>
                                            <option value="feature">newslettersEnabled</option>
                                            <option value="feature">newslettersRecurring</option>
                                            <option value="quantity">newswire-country</option>
                                            <option value="quantity">newswire-country-with-translation</option>
                                            <option value="quantity">newswire-global-english-only</option>
                                            <option value="quantity">newswire-global-with-translation</option>
                                            <option value="quantity">newswire-international</option>
                                            <option value="quantity">newswire-international-with-translation</option>
                                            <option value="quantity">newswire-national-us-canada</option>
                                            <option value="quantity">newswire-national-us-uk-canada</option>
                                            <option value="quantity">newswire-online</option>
                                            <option value="quantity">newswire-regional</option>
                                            <option value="quantity">notifications-every-mention</option>
                                            <option value="quantity">notifications-signals-count</option>
                                            <option value="feature">notifications-spike-detection</option>
                                            <option value="feature">notifications-top-news</option>
                                            <option value="feature">notifications-twitter-influencer</option>
                                            <option value="feature">one-off-newsletter</option>
                                            <option value="feature">podcasts</option>
                                            <option value="feature">pr-insight-report</option>
                                            <option value="quantity">pr-insight-report-count</option>
                                            <option value="feature">pr-insight-report-social-template</option>
                                            <option value="feature">pr-roi-emv-count</option>
                                            <option value="feature">premium-print-australia-all</option>
                                            <option value="feature">premium-print-australia-all-metros</option>
                                            <option value="feature">premium-print-australia-major-metros</option>
                                            <option value="feature">premium-print-australia-magazines</option>
                                            <option value="feature">premium-print-australia-nationals</option>
                                            <option value="feature">premium-print-australia-regional</option>
                                            <option value="feature">premium-print-canada-infomart</option>
                                            <option value="feature">premium-print-canada-mcna</option>
                                            <option value="feature">premium-print-canada-postmedia</option>
                                            <option value="feature">premium-print-canada-swna</option>
                                            <option value="feature">premium-print-singapore-sph</option>
                                            <option value="feature">public-fb-in-app</option>
                                            <option value="quantity">public-fb-in-app-page-limit</option>
                                            <option value="feature">reach-widget</option>
                                            <option value="quantity">recipientLists</option>
                                            <option value="feature">restrict-nla</option>
                                            <option value="quantity">rssInputs</option>
                                            <option value="quantity">rssOutputs</option>
                                            <option value="quantity">savedSearches</option>
                                            <option value="quantity">scoreModels</option>
                                            <option value="feature">search-list-widget</option>
                                            <option value="feature">sentiment-widget</option>
                                            <option value="feature">sharable-dashboards</option>
                                            <option value="feature">sharable-dashboards-premium</option>
                                            <option value="feature">showInbox</option>
                                            <option value="feature">showOutputs</option>
                                            <option value="feature">showSearch</option>
                                            <option value="feature">socialEchoOnDemand</option>
                                            <option value="feature">socialEchoTop25</option>
                                            <option value="feature">socialPremiumPackage</option>
                                            <option value="feature">social-reach-widget</option>
                                            <option value="feature">social-reddit</option>
                                            <option value="feature">social-twitter-firehose</option>
                                            <option value="feature">socialSearch</option>
                                            <option value="feature">socialStandalone</option>
                                            <option value="feature">source-segment-widget</option>
                                            <option value="feature">sov-widget</option>
                                            <option value="feature">spiderweb-widget</option>
                                            <option value="feature">ssoEnabled</option>
                                            <option value="feature">text-widget</option>
                                            <option value="feature">top-entity-prominence-widget</option>
                                            <option value="feature">top-lang-widget</option>
                                            <option value="feature">top-posters-widget</option>
                                            <option value="feature">top-social-echo-widget</option>
                                            <option value="feature">tveyes-archive</option>
                                            <option value="feature">tveyes-au</option>
                                            <option value="feature">tveyes-ca</option>
                                            <option value="feature">tveyes-de</option>
                                            <option value="feature">tveyes-download</option>
                                            <option value="feature">tveyes-gb</option>
                                            <option value="feature">tveyes-global</option>
                                            <option value="feature">tveyes-ie</option>
                                            <option value="feature">tveyes-jp</option>
                                            <option value="feature">tveyes-us</option>
                                            <option value="feature">tveyes-us-Alabama</option>
                                            <option value="feature">tveyes-us-Alaska</option>
                                            <option value="feature">tveyes-us-Arizona</option>
                                            <option value="feature">tveyes-us-Arkansas</option>
                                            <option value="feature">tveyes-us-California</option>
                                            <option value="feature">tveyes-us-Colorado</option>
                                            <option value="feature">tveyes-us-Connecticut</option>
                                            <option value="feature">tveyes-us-Delaware</option>
                                            <option value="feature">tveyes-us-Florida</option>
                                            <option value="feature">tveyes-us-Georgia</option>
                                            <option value="feature">tveyes-us-Hawaii</option>
                                            <option value="feature">tveyes-us-Idaho</option>
                                            <option value="feature">tveyes-us-Illinois</option>
                                            <option value="feature">tveyes-us-Indiana</option>
                                            <option value="feature">tveyes-us-Iowa</option>
                                            <option value="feature">tveyes-us-Kansas</option>
                                            <option value="feature">tveyes-us-Kentucky</option>
                                            <option value="feature">tveyes-us-Louisiana</option>
                                            <option value="feature">tveyes-us-Maine</option>
                                            <option value="feature">tveyes-us-Maryland</option>
                                            <option value="feature">tveyes-us-Massachusetts</option>
                                            <option value="feature">tveyes-us-Michigan</option>
                                            <option value="feature">tveyes-us-Minnesota</option>
                                            <option value="feature">tveyes-us-Mississippi</option>
                                            <option value="feature">tveyes-us-Missouri</option>
                                            <option value="feature">tveyes-us-Montana</option>
                                            <option value="feature">tveyes-us-Nebraska</option>
                                            <option value="feature">tveyes-us-Nevada</option>
                                            <option value="feature">tveyes-us-New_Hampshire</option>
                                            <option value="feature">tveyes-us-New_Jersey</option>
                                            <option value="feature">tveyes-us-New_Mexico</option>
                                            <option value="feature">tveyes-us-New_York</option>
                                            <option value="feature">tveyes-us-North_Carolina</option>
                                            <option value="feature">tveyes-us-North_Dakota</option>
                                            <option value="feature">tveyes-us-Ohio</option>
                                            <option value="feature">tveyes-us-Oklahoma</option>
                                            <option value="feature">tveyes-us-Oregon</option>
                                            <option value="feature">tveyes-us-Pennsylvania</option>
                                            <option value="feature">tveyes-us-Rhode_Island</option>
                                            <option value="feature">tveyes-us-South_Carolina</option>
                                            <option value="feature">tveyes-us-South_Dakota</option>
                                            <option value="feature">tveyes-us-Tennessee</option>
                                            <option value="feature">tveyes-us-Texas</option>
                                            <option value="feature">tveyes-us-Utah</option>
                                            <option value="feature">tveyes-us-Vermont</option>
                                            <option value="feature">tveyes-us-Virginia</option>
                                            <option value="feature">tveyes-us-Washington</option>
                                            <option value="feature">tveyes-us-West_Virginia</option>
                                            <option value="feature">tveyes-us-Wisconsin</option>
                                            <option value="feature">tveyes-us-Wyoming</option>
                                            <option value="quantity">twitterLimit</option>
                                            <option value="feature">twitterNonCustomer</option>
                                            <option value="feature">twitterPremiumAccess</option>
                                            <option value="quantity">twitterPremiumL</option>
                                            <option value="feature">twitterStandard</option>
                                            <option value="feature">twitterTrial</option>
                                            <option value="quantity">users</option>
                                            <option value="feature">usPremiumContent</option>
                                            <option value="feature">volume-widget</option>
                                            <option value="quantity">widgetsPerDashboard</option>
                                            <option value="feature">worldclickheat-widget</option>
                                    </select>
                                       </div>
                            </div>

                                        {enableChk && (
                                        <div className="form-group row" id="cheBox">
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-10">
                                                <div className="form-check" id="gridCheck1">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck1" name="check" checked={checked} onChange={(e) => {
                                                        setCount(0);
                                                        setChecked(!checked)
                                                    }}/>
                                                        <label className="form-check-label" htmlFor="gridCheck1">
                                                            Check for true ( Uncheck for false )
                                                        </label>
                                                </div>
                                            </div>
                                        </div>
                                            )}

                                         {enableCount && (
                                        <div className="form-group row" id="cheBox" style={{paddingBottom:"20px"}}>
                                            <div className="col-sm-2">{entName}</div>
                                            <div className="col-sm-10">
                                                <div className="form-check" id="gridCheck1">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                        <input className="form-check-input" name="count" style={{width:"25%",paddingBottom:"10px",backgroundColor:"white"}} type="text" onChange={(e) => {
                                                            setChecked(false)
                                                            setCount(e.target.value);
                                                        }} />
                                                </div>
                                            </div>
                                        </div>

                                            )}




                                        <div className="form-group row">
                                            <label htmlFor="inputtext"
                                                   className="col-sm-2 col-form-label">Opportunity ID</label>
                                            <div className="col-sm-10">
                                                <input type="text" style={{backgroundColor: "white"}} className="form-control" id="inputtext" placeholder="Opportunity ID" onChange={(e) => setopId(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-dark">Submit</button>
                                            </div>
                                        </div>
                                {error && (
                                     <div align="center">
                                    <h4 className="alert alert-danger mt-4">{error}</h4>
                                    </div>
                              )}
                        </form>
                  </div>
              </div>

          </div>
{data.data && (
            <div className="container mt-4">
            <div className="card">
                <table border="1" className="table" style={{textAlign:"center"}}>
                  <thead className="thead-dark">
                  <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Opprtunity ID</th>
                      <th scope="col">Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {data.data.map((item, index) => (
                       <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{item.OpId}</td>
                           {item.Message === "Successfully Activated" ?
                              <td style={{color: "black"}}>{item.Message}</td> : <td style={{color: "red"}}>{item.Message}</td>}

                       </tr>
                    ))}
                  </tbody>
              </table>
          </div>
            </div>


    // <div style={{paddingTop:"35px"}} align="center">
    //
    // </div>
)}

          </div>

      ) : (
        <>
          <h2 align="center" style={{paddingTop:"10px", fontFamily: "Roboto"}}>Please log in</h2>
          <Link style={{marginLeft: "48%", paddingTop:"10px", fontFamily: "Roboto"}} to="/login">Log in</Link>
        </>
      )}
    </div>

  );
}