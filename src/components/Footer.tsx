export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="container-page flex h-16 items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Smriti Rangarajan</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/smritirangarajan" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white p-2 shadow hover:scale-105 transition">
            <img src="/assets/logos/github.png" alt="GitHub" className="h-5 w-5" />
          </a>
          <a href="mailto:smriti_rangarajan@berkeley.edu" className="rounded-full border border-black/10 bg-white p-2 shadow hover:scale-105 transition">
            <img src="/email.png" alt="Email" className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/smriti-rangarajan/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white p-2 shadow hover:scale-105 transition">
            <img src="/assets/logos/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}


