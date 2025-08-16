export default function Header({ title, description }: { title: string, description: string }) {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-highlight'>{title}</h1>
      <p className='text-sm text-muted mb-6'>{description}</p>
    </div>
  );
}