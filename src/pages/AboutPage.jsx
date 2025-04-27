import useTitle from '../hooks/useTitle';
import './css/AboutPage.css';

export default function AboutPage() {
  useTitle("About Us - FreelanceFinance");

  return (
    <div className="container">
      {/* Heading */}
      <div className="heading-container">
        <h1>About FreelanceFinance</h1>
        <p>
          We empower freelancers globally with modern, simple, and powerful financial tools to help them succeed.
        </p>
      </div>

      {/* Cards Section */}
      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-lightbulb icon"></i> {/* FontAwesome Icon */}
          </div>
          <h3>Our Idea</h3>
          <p>FreelanceFinance started to solve the chaos freelancers faced in managing money.</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-rocket icon"></i> {/* FontAwesome Icon */}
          </div>
          <h3>Our Launch</h3>
          <p>In 2023, we launched globally — providing budgeting, invoicing, and tax planning tools.</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-globe icon"></i> {/* FontAwesome Icon */}
          </div>
          <h3>Going Global</h3>
          <p>Today, we support freelancers in over 40+ countries, helping them gain financial freedom.</p>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="icon-container">
            <i className="fas fa-users icon"></i> {/* FontAwesome Icon */}
          </div>
          <h3>Our Community</h3>
          <p>We believe in community-driven growth, collaborating directly with freelancers worldwide.</p>
        </div>
      </div>
    </div>
  );
}
