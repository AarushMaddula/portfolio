export default function Header({ title, description }: { title: string, description: string }) {
  return (
    <div className="pt-4 pb-6">
      <h1 className='text-3xl font-bold mb-4 text-highlight'>{title}</h1>
      <div className="relative">
        <div className="absolute w-full h-full bg-accent/10 blur-3xl rounded-2xl -z-10"></div>
        <p className='text-sm text-muted'>{description}</p>
      </div>
    </div>
  );
}