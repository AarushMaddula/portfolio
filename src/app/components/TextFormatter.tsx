const keywords = ["\n", ">"];

let counter = 0;

function tokenizer(text: string) {
  const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`);
  return text.split(regex).filter(token => token !== "").reverse();
}

function parseNewLines(tokens: string[]) {
  let firstToken = tokens.pop();
  if (firstToken !== "\n") {
    console.error(`Text Formatter: expected \\n, got ${firstToken}`);
  } 

  return (
    <br key={counter++}/>
  )
}

function parseBulletPoints(tokens: string[]) {

  const e: React.ReactNode[] = [];

  let token = tokens.pop();

  while (token === ">") {
    e.push(
      <li key={counter++} className="flex gap-2">
        <span className="text-muted">•</span>
        <span>{parseText(tokens)}</span>
      </li>
    )

    token = tokens.pop();
  }

  return (
    <ul key={`list-${counter}`} className="list-none space-y-1 my-1">
      {e}
    </ul>
  )
}

function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, i) => {
    
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-muted">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function parseText(tokens: string[]) {
  return (
    <p key={`line-${counter++}`} className="mb-1 last:mb-0">
      {formatInline(tokens.pop())}
    </p>
  )
}

function parser(tokens: string[]) {
  const elements: React.ReactNode[] = [];

  while (tokens.length > 0) {
    let token = tokens.at(-1);

    switch (token) {
      case "\n":
        elements.push(parseNewLines(tokens));
        break;
      case ">":
        elements.push(parseBulletPoints(tokens));
        break;
      default:
        elements.push(parseText(tokens));
        break;
    }
  }

  return elements;
}

export default function TextFormatter({ text }: { text: string }) {
  const tokens = tokenizer(text);
  const elements: React.ReactNode[] = parser(tokens);

  return <>{elements}</>;
}