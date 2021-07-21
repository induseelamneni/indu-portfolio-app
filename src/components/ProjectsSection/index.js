import {Component} from 'react'
import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here
class ProjectsSection extends Component {
  renderProjects = () =>
    projectsData.map(project => (
      <li className="project-list-item" key={project.id}>
        <img src={project.imageUrl} alt="work" className="project-image" />
        <p className="project-name">{project.name}</p>
      </li>
    ))

  render() {
    return (
      <div>
        <h1 className="projects">My Work</h1>
        <ul className="project-container">{this.renderProjects()}</ul>
      </div>
    )
  }
}

export default ProjectsSection
