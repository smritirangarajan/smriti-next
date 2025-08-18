export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="container-page flex h-16 items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Smriti Rangarajan</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/smritirangarajan" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="mailto:smriti_rangarajan@berkeley.edu" className="hover:underline">
            Email
          </a>
          <a href="https://www.linkedin.com/in/smriti-rangarajan/" target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}


