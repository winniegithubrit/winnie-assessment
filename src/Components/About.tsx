import React, { useState, useEffect } from 'react';
import './About.css'
// Import the JSON data from your 'db.json' file
import jsonData from './db.json';
import jsonData2 from './db2.json';
// interface for team members
interface TeamMember {
    name: string;
    role: string;
    image: string;
  }
  

  interface CultureImages{
    name: string;
    image:string;
    description:string;
  }
  function About() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // Annotate the state variable

    useEffect(() => {
      // Use the imported JSON data directly
      setTeamMembers(jsonData['team-management']);
    }, []);


  return (
<div className='about'>
<div className='darken'></div>
             <img
        className='background-image'
        src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg'
        alt="Background"
      ></img>
<div className='header2'>
        <div className='nav-header light-border'>
          <img
            className='logo'
            src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg'
            alt='logo'
          ></img>
          <div>
        {/* this is the menu and some items for the navbar */}
            <ul className='nav-items'>
              <li><a href='/about'>About us</a></li>
              <li><a href='/'>Social Impact</a></li>
              <li><a href='/invest'>Invest</a></li>
            </ul>
          </div>
        </div>
      </div>



      {/* hero section 1 */}
      <div className='container1'>
        <div className='container1-inner'>
          <p>HOW TO RECOGNIZE AN ELEWA MEMBER</p>
          <h1>Dependable, Creative, Supportive, Open Minded and Fun*</h1>
          <h2>SERIOUS WHEN IT MATTERS</h2>
        </div>
      </div>


      {/* second hero section */}
<div className='care-main'>
      <div className='care-main-inner'> 
            <div className='care'>
                <h1>We Care!</h1>
               
                      </div>
                      <div className='we-care-paragraph'>
                         <p className='paragraph1'>Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>
                        <p className='paragraph2'>Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
                      </div>
                      </div>

                      {/* care images */}
                      <div className='care-images'>
                <div className='content1'>
                <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png' alt='image'></img>
                <h1>Holistic solutions</h1>
                <p>We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
                </div>
                <div className='content2'>
                  <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png' alt="image"></img>
                  <h1>Impact</h1>
                  <p>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
                </div>
                <div className='content3'>
                  <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png' alt='image'></img>
                  <h1>Open data</h1>
                  <p>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
             </div>
       </div>
</div>


    {/* Display team members */}
      <div className="team-management">
        <h1>Team | <span className='manage'>Management</span></h1>
        <div className='inner-team-management'>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h1>{member.name}</h1>
            <p>{member.role}</p>
          </div>
        ))}
        </div>
      </div>


<div className='culture'>
  <div className='inner-culture'>
    <div className='culture-content'>
      <h1>Our Culture & Values</h1>
      <p>Our culture, <span className='code-t'>CODE-(T)</span>, defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.</p>
    </div>
  </div>
  <div className='culture-section'>
    <div className='inner-culture-section'>
      {jsonData2.values.map((value, index) => (
  <div key={index} className='culture-image'>
    <img src={value.image} alt={value.name} />
    <h1>{value.name}</h1>
    <p>{value.description}</p>
  </div>
))}

    </div>
  </div>
</div>

<div className='how-container'>
  <div className='how-inner-container'>
<div className='image'>
<img src='https://www.google.com/maps/d/thumbnail?mid=1fRXoOHVyFgbOH57jM6uVCglR8sU&hl=en_US'></img>
</div>
<div className='how-content'>
<h1>How to get there</h1>
<p>Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.
</p>
<p>Not in town? Teams, Meets or Zoom are our second name. Book an appointment today via contact@elewa.ke!
</p>
<button>Get directions</button>
</div>
  </div>
</div>
 <div className='learn-more'>
  <div className='learn-more-inner'>
<h1>Learn more about<br/>
<span className='elewa'>Elewa's social impact.</span></h1>
  </div>
</div>
 <div className='footer'>
        <div className='footer-inner'>
            <div className='footer-contacts'>
                <div className='Headquartes footer-divs'>
                    <h2>Headquarters</h2>
                    <p>The Promenade, 19 General <br></br> Mathenge Rd <br></br> Nairobi, Kenya</p>
                </div>
                <div className='contacts footer-divs'>
                    <h2>Contacts</h2>
                    <p>T +254 78 92 27 755 <br></br> E info@elewa.ke</p>
                </div>
                <div className='navigation footer-divs'>
                    <h2>Navigation</h2>
                    <p>About us</p>
                    <p>Social<br></br>impact</p>
                    <p>Invest</p>
                    <p>News</p>
                    <p>Contact</p>
                </div>
                <div  className='brands footer-divs'>
                    <h2>Brands</h2>
                    <p>Elewa</p>
                    <p>Italata</p>
                    <p>Venture labs</p>
                </div>
                <div className='privacy footer divs'>
                    <h2>Privacy</h2>
                    <p>Terms and<br></br>conditions</p>
                    <p>Cookie preferences</p>
                </div>
            </div>
            <div className='footer-logo'>
                <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg'></img>
                <div className='social-media-icons'>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg'></img>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg'></img>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg'></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default About