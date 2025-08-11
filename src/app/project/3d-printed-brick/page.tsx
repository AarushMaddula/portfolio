import Image from 'next/image'
import pageData from '@/data/projects/3d-printed-brick.json';
import Timeline from '../components/timeline';

export default function Page() {
  return ( 
    <>
      <div className='relative w-full aspect-5/3 object-cover'>
        <Image src={`/data/projects/3d-printed-brick/${pageData.thumbnail}`} alt="3D Printed Brick" fill/>
      </div>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>

      <Timeline pageData={pageData} />

      <div>
        <h2>Resources</h2>
        
        {pageData.resources.map((resource) => {
          return (
            <div key={resource}>
              <a href={`/projects/3d-printed-brick/${resource}`} download>{resource}</a>
            </div>
          )
        })}
      </div>
    </>      
  )
}