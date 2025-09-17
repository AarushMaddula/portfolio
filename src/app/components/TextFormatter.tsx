export default function TextFormatter({ text }: { text: string }) {
  
  const regex = /(\n|>)/g;
  
  const formatted = text.split(regex).map((part, index) => {
    switch (part) {
      case "\n":
        return <br key={index} />;
      case ">":
        return <span key={index} className="mr-2">{"•"}</span>;
      default:
        return part; 
    }
  });

  return (
    <>
      {formatted}
    </>
  )
}