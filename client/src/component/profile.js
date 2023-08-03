import './profile.css';
const ProfileComponent = () => {
  return (
    <div className="Container p-5 ">
      <h1>Profile</h1>
      <img className="img-profile" src="bandit.jpg" alt="profile"></img>
      <h3>Subsin Boriboon</h3>
      <p className="graduated">
        <span style={{ fontWeight: 'bold' }}>Graduated : </span>Chulalongkorn
        University,Faculty of Engineering{' '}
      </p>
      <p className="introduce">
        <span style={{ fontWeight: 'bold' }}>Introduce : </span>LoremDolore sit
        mollit nostrud sit est dolore amet consectetur sit. Amet quis nisi ipsum
        velit. Nisi sit nisi ea ut. Ullamco cupidatat enim ex dolore esse quis
        eiusmod ullamco ut consequat deserunt ullamco magna. Nulla et culpa
        minim eiusmod. Tempor dolore non proident ea eu exercitation commodo. Ea
        deserunt sunt labore nostrud reprehenderit velit ea.
      </p>
      <div className="skill">
        <div className="Container-skill" expand="sm">
          <div>
            <ul>
              <li>Nodejs</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Reactjs</li>
              <li>MongoDB</li>
              <li>Git & Git Hub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
