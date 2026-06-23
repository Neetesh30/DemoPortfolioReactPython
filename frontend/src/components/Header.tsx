import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* Header start */}
      <header id="sticky-header" className="header position-absolute left-0 top-0 w-100 z-3">
        <div className="d-flex justify-content-between header-inner">
          <div className="header-border-bottom d-flex align-items-center justify-content-between flex-grow-1">
            <a href="/">
              <img src="assets/images/logo/logo-dark.png" alt="logo" />
            </a>

            {/* Contact link */}
            <a href="/contact" className="d-flex align-items-center flex-wrap fw-bold text-dark lh-1 contact-link hover-text-white">
              Let’s Talk
              <span className="animate-arrow-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Button Start */}
          <button id="offcanvas-toggle" className="bg-dark border-0 offcanvas-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={3} y={8} width={18} height={2} fill="white" />
              <rect x={3} y={14} width={18} height={2} fill="white" />
            </svg>
          </button>
          {/* Button End */}
        </div>
      </header>

      {/* offcanvas-menu start */}
      <div id="offcanvas" className="offcanvas offcanvas-end bg-dark d-flex flex-wrap flex-column justify-content-between">
        <div>
          <div className="d-flex flex-wrap justify-content-between align-items-center offcanvas-header">
            <a href="/">
              <img src="assets/images/logo/offcanvas-logo.png" alt="offcanvas logo" />
            </a>
            <button id="offcanvas-close" className="offcanvas-close bg-primary border-0" data-bs-dismiss="offcanvas" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z" fill="white" />
              </svg>
            </button>
          </div>

          <nav className="offcanvas-nav d-flex flex-wrap flex-column justify-content-between">
            <ul className="offcanvas-menu p-0 list-unstyled">
              <li className="offcanvas-menu-item">
                <a href="/" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">
                  Home
                  <span className="d-inline-block animate-arrow-up">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="offcanvas-menu-item">
                <a href="/about" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">About</a>
              </li>
              <li className="offcanvas-menu-item">
                <a href="/projects" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Project</a>
              </li>
              <li className="offcanvas-menu-item">
                <a href="/contact" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <nav className="pb-10">
          <ul className="d-flex flex-wrap gap-x-4 align-items-center offcanvas-social-links p-0 list-unstyled">
            <li>
              <a href="#" className="text-white transition-all" aria-label="social">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all" aria-label="social">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x={3} y={3} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={1.5} />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* offcanvas-menu end */}
    </>
  );
};

export default Header;
