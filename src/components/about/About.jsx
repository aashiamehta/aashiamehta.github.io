import "./about.css";

const About = () => {
  return (
    <div className="parent">
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">About Me</h1>
          <p className="pl-desc">
            I am currently pursuing a part-time Master's degree in Computer Science at Georgia Institute of Technology.
            I graduated from the University of Michigan in Ann Arbor with a Bachelor's degree in Computer Science
            and a minor in Applied Statistics in 2020.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h2 className="pl-subtitle">Hobbies</h2>
          <p className="pl-subtitle-2">You can find me:</p>
						<ul class="no-bullets">
						  <li>Reading self-improvement books</li>
						  <li>Swimming in the ocean</li>
							<li>Hiking</li>
              <li>Knitting a sweater</li>
						</ul>
        </div>
        <div class="column">
          <h2 className="pl-subtitle">Experience</h2>
          <p className="pl-subtitle-2">Here are some of my previous roles:</p>
            <ul class="no-bullets">
              <li>Facebook Software Engineering Intern</li>
              <li>Google Engineering Practicum Intern</li>
              <li>University of Michigan Instructional Aide Staff Member (EECS 183/280)</li>
              <li>Director of MHacks</li>
            </ul>
        </div>
        <div class="column">
          <h2 className="pl-subtitle">Books</h2>
          <p className="pl-subtitle-2">Some of my favorite books are:</p>
						<ul class="no-bullets">
						  <li><i>Atomic Habits</i> by James Clear</li>
							<li><i>The Success Principles</i> by Jack Canfield</li>
							<li><i>I Will Teach You To Be Rich</i> by Ramit Sethi</li>
              <li><i>The Life-Changing Magic of Tidying Up</i> by Marie Kondo</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
