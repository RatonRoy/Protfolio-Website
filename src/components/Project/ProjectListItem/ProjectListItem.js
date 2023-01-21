import React from 'react'
import './ProjectListItem.css'
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const ProjectListItem = ({ project }) => {
  const { id, type, name, img, description, techs, github_link, live_link } =
    project
  return (
    <>
      <div className='project-container'>
        <header className='project-img'>
          <img src={img} alt=' project img' height='350px' />
        </header>
        <article className='project-info'>
          <h4 className='project-title'> {name} </h4>
          <p> {description} </p>
        </article>
        <footer className='project-footer'>
          <ul className='tech-container'>
            {techs.map((tech) => (
              <li key={Math.random().toString()} className ='tech-list-item' >
                {' '}
                {tech}{' '}
              </li>
            ))}
          </ul>
          <aside className='icon-container'>
            <BsGithub />
            <FaExternalLinkSquareAlt />
          </aside>
        </footer>
      </div>
    </>
  )
}

export default ProjectListItem
