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
        <h2 className="text-3xl font-semibold text-black">{title}</h2>
        {subtitle ? (
          <p className="text-black/70 mt-1">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}


