import { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page my-12">
      <div className="mb-6">
        <div className="bar-title">{title}</div>
        {subtitle ? <p className="text-black/70 mt-3">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}


