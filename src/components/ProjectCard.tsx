type ProjectCard = {
  title: string
  description: string
  thumbnailPath: string
  tags: string[]
}

function ProjectCard({title, description, thumbnailPath, tags}: ProjectCard) {
  return (
    <div>
      <img src={thumbnailPath}/>
      <h1>{title}</h1>
      <div>{description}</div>
      {tags.map(tag => {
        return (
          <div className="px-4 py-2 rounded-md">{tag}</div>
        )
      })}
    </div>
    
  )
}

export default ProjectCard;