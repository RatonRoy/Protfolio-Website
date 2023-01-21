import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Project.css'
import ProjectListItem from './ProjectListItem/ProjectListItem'
// import demoProjectData from '../../../public/demoProjectData'


const Project = () => {
  const [projects, setProjects] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('demoProjectData.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setIsLoading(false)
      })
  }, [])

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '4rem',
    color: 'green',
  }
  if (isLoading) {
    return (
      <>
        <h1 style={loadingStyle}> Loading..... </h1>
      </>
    )
  }
  return (
    <>
      <ul className='section projects-container'>
        {projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </ul>
    </>
  )
}

export default Project
