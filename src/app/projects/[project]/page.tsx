import Timeline from "../components/Timeline";
import ResourceSection from "../components/ResourceSection";
import Footer from "@/app/components/Footer";
import Header from "../components/Header";
import PageThumbnail from "../components/PageThumbnail";

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const pageData = await import(`@/data/projects/${project}.json`);

  return (
    <>
      <PageThumbnail thumbnail={pageData.thumbnail} />
      <div className="px-4">
        <Header
          title={pageData.title}
          description={pageData.description}
          creators={pageData.creators}
          date={pageData.date}
        />
        <Timeline timeline={pageData.timeline} />
        <ResourceSection resources={pageData.resources} />
        <Footer />
      </div>
    </>
  );
}
