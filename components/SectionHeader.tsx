import Reveal from "./Reveal";

export default function SectionHeader({
  title,
  aside,
}: {
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-6 flex flex-col gap-4 px-4 md:mb-8 md:flex-row md:items-baseline md:justify-between md:px-8">
      <h2 className="label text-fg">{title}</h2>
      {aside}
    </Reveal>
  );
}
