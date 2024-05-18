import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Dashboard() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    let { data: projects, error } = await supabase
      .from('projects')
      .select('*')
    setProjects(projects)
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={createNewProject}>Create New Project</button>
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  )
}

const createNewProject = async () => {
  const { data, error } = await supabase
    .from('projects')
    .insert([
      { name: 'New Project', user_id: supabase.auth.user().id }
    ])
  if (error) console.error(error)
  else console.log('Project created:', data)
}
