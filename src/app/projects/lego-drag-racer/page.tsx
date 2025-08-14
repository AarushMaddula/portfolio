import Image from 'next/image'
import pageData from '@/data/projects/lego-drag-racer.json';
import Timeline from '../components/Timeline';

export default function Page() {
  return ( 
    <>
      <div className='relative w-full aspect-5/3 object-cover'>
        <Image src={pageData.thumbnail} alt="3D Printed Brick" fill/>
      </div>
      <h1 className=''>{pageData.title}</h1>
      <p className=''>{pageData.description}</p>

      <Timeline pageData={pageData} />

      <div>
        <h2>Resources</h2>
        
        {pageData.resources.map((resource) => {
          return (
            <div key={resource}>
              <a href={resource} download>{resource}</a>
            </div>
          )
        })}
      </div>
    </>      
  )
}