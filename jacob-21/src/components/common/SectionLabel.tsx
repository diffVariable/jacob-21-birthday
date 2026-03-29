interface SectionLabelProps {
  eyebrow: string;
  title: string;
}

export default function SectionLabel({ eyebrow, title }: SectionLabelProps) {
  return (
    <div className="sec-label-wrap">
      <span className="sec-eyebrow">{eyebrow}</span>
      <p className="sec-title">{title}</p>
    </div>
  );
}
