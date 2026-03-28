type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title mb-5 text-center">
      {eyebrow && (
        <span className="section-title__eyebrow d-block mb-2">{eyebrow}</span>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="mb-0 mx-auto">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
