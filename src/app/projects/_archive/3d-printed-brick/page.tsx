import pageData from '@/data/projects/3d-printed-brick.json';
import Timeline from '../../components/Timeline';
import ResourceSection from '../../components/ResourceSection';
import Footer from '@/app/components/Footer';
import Header from '../../components/Header';
import PageThumbnail from '../../components/PageThumbnail';

export default function Page() {
  return ( 
    <>
      <PageThumbnail thumbnail={pageData.thumbnail} />
      <div className=''>
        <Header title={pageData.title} description={pageData.description} />
        <Timeline timeline={pageData.timeline} />
        <ResourceSection resources={pageData.resources} />
        <Footer/>
      </div>   
    </>      
  )
}