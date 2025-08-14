import Image from 'next/image'
import pageData from '@/data/projects/lego-sumo-robot.json';
import Timeline from '../components/Timeline';

export default function Page() {
  return ( 
    <>
      <div className='relative w-full aspect-5/3 object-cover'>
        <Image src={pageData.thumbnail} alt="Lego Sudo Robot" fill/>
      </div>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>

      <Timeline pageData={pageData} />

      <div>
        <h2>Resources</h2>
        
        <ul>
          {pageData.resources.map((resource) => {
            return (
              <li key={resource}>
                <a href={resource} download>{resource}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>      
  )
}