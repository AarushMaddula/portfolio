type ProjectCard = {
  title: string
  description: string
  thumbnail: string
  tags: string[]
}

function ProjectCard({title, description, thumbnail, tags}: ProjectCard) {
  return (
    <div>
      <img src={thumbnail}/>
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