import React from "react";


const Hero : React.FC = () =>

{
    return (
        <>
          {/*-- offcanvas-menu start */}
        <div id="offcanvas" className="offcanvas offcanvas-end bg-dark d-flex flex-wrap flex-column justify-content-between">
            {/*-- close button start */}

            <div>
                <div className="d-flex flex-wrap justify-content-between align-items-center offcanvas-header">
                    <a href="index.html">
                        <img src="assets/images/logo/offcanvas-logo.pngsw" alt="" />
                    </a>
                    <button id="offcanvas-close" className="offcanvas-close bg-primary border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                        
                    </button>
                </div>

                {/*-- close button end */}

                {/*-- offcanvas-menu start */}

                <nav className="offcanvas-nav d-flex flex-wrap flex-column justify-content-between">
                    <ul className="offcanvas-menu p-0 list-unstyled">
                        <li className="offcanvas-menu-item">
                            <a href="index.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Home
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>
                        <li className="offcanvas-menu-item">
                            <a href="about.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">About
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>

                        </li>
                        <li className="offcanvas-menu-item">
                            <a href="projects.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Project
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>
                        <li className="offcanvas-menu-item">
                            <a href="project-details.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Project
                                details
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>
                        <li className="offcanvas-menu-item">
                            <a href="blog.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Blog
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>
                        <li className="offcanvas-menu-item">
                            <a href="blog-details.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Blog
                                Details
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>

                        <li className="offcanvas-menu-item">
                            <a href="contact.html" className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link">Contact
                                <span className="d-inline-block animate-arrow-up">
              
            </span>
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>


            <nav className="pb-10">
                <ul className="d-flex flex-wrap gap-x-4 align-items-center offcanvas-social-links p-0  list-unstyled">
                    <li><a href="#" className="text-white transition-all">
                            

                        </a></li>
                    <li><a href="#" className="text-white transition-all">
                        </a></li>
                    <li><a href="#" className="text-white transition-all">
                        </a></li>
                    <li><a href="#" className="text-white transition-all">
                        </a></li>

                </ul>
            </nav>
        </div>
        {/*-- offcanvas-menu end */}

        {/*-- Header end */}

        {/*-- Hero section start */}
        <section className="bg-secondary position-relative pt-140 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content-wrapper">
                            <span className="font-Syne text-dark fw-bold lh-1 text-2xl d-flex flex-wrap align-items-center hello-iam" data-aos="efade-right" data-aos-delay="300">
            <span>
              
            </span>

                            Hello, I’m
                            <img src="assets/images/icon/victory.png" alt="icon" />
                            </span>
                            <h1 className="hero-title font-Syne fw-bold position-relative z-1 circle-shape" data-aos="efade-right" data-aos-delay="400">
                                Mark
                                {/*-- <br /> Henry */}
                            </h1>
                            <h2 className="hero-title font-Syne fw-bold mb-20" data-aos="efade-right" data-aos-delay="600">
                                Henry</h2>
                            <p className="font-Syne fw-bold text-lg leading-tight iam-designer mb-30" data-aos="efade-right" data-aos-delay="800">Product
                                Designer |
                                Based in
                                Germany</p>

                            <div className="d-flex flex-wrap hero-btn-wraper">
                                {/*-- Link Start */}
                                <span data-aos="efade-right" data-aos-delay="1000">
              <a href="contact.html" className="d-flex align-items-center flex-wrap btn-primary">Let’s
                Talk
                <span className="animate-arrow-up">
                  
                </span>
                                </a>
                                </span>
                                {/*-- Link End */}

                                {/*-- Link Start */}
                                <span data-aos="efade-right" data-aos-delay="1200">
              <a href="projects.html" className="d-flex align-items-center flex-wrap btn-primary-outline">
                My Work
                <span className="animate-arrow-up">
                  
                </span>
                                </a>
                                </span>
                                {/*-- Link End */}
                            </div>

                            <div className="d-flex flex-wrap align-items-center" data-aos="efade-right" data-aos-delay="1400">
                                <div className="d-flex flex-wrap align-items-center">
                                    <span className="font-Syne text-dark fw-bold text-counter lh-1">
                                    <span className="counter">1.2</span>k+</span>

                                    <span className="text-worldwide text-lg">Worldwide client</span>
                                    <span className="mx-8"></span>
                                </div>

                                <div className="social-links">
                                    <ul className="d-flex flex-wrap align-items-center list-unstyled">
                                        <li><a href="#" className="text-dark">
                                                

                                            </a></li>
                                        <li><a href="#" className="text-dark">
                                            </a></li>
                                        <li><a href="#" className="text-dark">
                                            </a></li>
                                        <li><a href="#" className="text-dark">
                                            </a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block">
                <img className="position-absolute top-0 end-0 hero-image" data-aos="efade-left" src="assets/images/hero/hero.png" alt="hero Image" />

                <a href="contact.html" className="contact-spin">
                    
                </a>

            </div>

        </section>
        {/*-- Hero section end */}

        {/*-- Service start */}
        <section className="py-120 bg-dark">
            <div className="container">

                <div className="row mb-12 align-items-center" data-aos="efade-up" data-aos-delay="400">
                    <div className="col-12 col-lg-6">
                        <div className="fw-bold font-Syne lh-1 d-flex flex-wrap flex-column gap-y-2">
                            <span className="text-warning text-xl">Services</span>
                            <h3 className="text-white section-title position-relative circle-shape">
                                My specialties
                            </h3>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <p className="paragraph">
                            Synergistically seize front-end methods of empowerment without extensive core competencies.
                            Progressively repurpose alternative platforms </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-8">
                        <div className="row row-gap-24">

                            {/*-- service Item */}
                            <div className="col-12 col-sm-6 col-md-4">

                                <div className="service-card" data-aos="efade-up" data-aos-delay="500">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                                        

                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            Mobile Apps <br/> design

                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>

                            {/*-- service Item End */}

                            {/*-- service Item */}

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="service-card" data-aos="efade-up" data-aos-delay="700">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">

                                        



                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            UI/UX <br/> design

                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>

                            {/*-- service Item End */}

                            {/*-- service Item */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="service-card" data-aos="efade-up" data-aos-delay="900">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                                        


                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            Website <br/> design

                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>


                            {/*-- service Item End */}

                            {/*-- service Item */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="service-card" data-aos="efade-up" data-aos-delay="1100">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                                        


                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            Webflow <br/> development

                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>

                            {/*-- service Item End */}

                            {/*-- service Item */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="service-card" data-aos="efade-up" data-aos-delay="1300">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                                        


                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            Brand <br/> identity
                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>

                            {/*-- service Item End */}

                            {/*-- service Item */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="service-card" data-aos="efade-up" data-aos-delay="1500">
                                    {/*-- Icon */}
                                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                                        


                                    </div>

                                    {/*-- Icon End */}
                                    <h4>
                                        <a href="projects.html" className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link">
                                            Interaction <br/> design
                                            <span className="animate-arrow-up">
                                        

                                    </span>
                                        </a>
                                    </h4>
                                </div>

                            </div>

                            {/*-- service Item End */}

                        </div>
                    </div>


                    <div className="col-12 col-xl-4" data-aos="ezoom-in" data-aos-delay="1000">
                        <div className="d-flex flex-wrap flex-column justify-content-between service-contact-card">
                            <div className="d-flex flex-wrap justify-content-end">
                                <a href="contact.html" className="animate-arrow-up">
                                    
                                </a>
                            </div>

                            <div className="d-flex flex-column flex-wrap gap-y-2">
                                <span className="text-warning text-lg fw-normal lh-1">SAY HELLO!</span>
                                <h4 className="text-white text-2xl fw-bold font-Syne lh-1 say-hello-email">hello@henry.com
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/*-- Service end */}

        {/*-- About Us Sectin Start */}
        <section className="about-section pb-120 bg-dark" data-aos="ezoom-out" data-aos-delay="800">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="position-relative">
                            <img src="assets/images/about/about-white.png" alt="" />
                            <div className="d-flex flex-wrap flex-column position-absolute years-of-experience">
                                <span className="years-experience-of-number text-white fw-bold font-Syne leading-none d-inline-block position-relative">12+</span>
                                <span className="strock-text">Years of <br/> experience</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 about-grid-space-right">

                        <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
                            <span className="text-warning text-xl">Hello I’m</span>
                            <h3 className="section-title circle-shape text-white position-relative">
                                Mark Henry, Product Designer
                            </h3>

                            <h4 className="based-in-german-title text-white">Based in German</h4>
                            <p className="paragraph mb-5">That is where I come in. A lover of words, a wrangler of copy. Here to create
                                copy
                                that not only
                                reflects who you are and what you stand for, but words that truly land with those that read them,
                                calling your audience in and making them .</p>
                            <ul className="award-lists d-flex flex-wrap p-0 list-unstyled">
                                <li className="award-lists-item">

                                    <span className="text-white text-32 fw-bold font-Syne position-relative">08</span>
                                    <p className="paragraph">Award winner</p>
                                </li>
                                <li className="award-lists-item">

                                    <span className="text-white text-32 fw-bold font-Syne position-relative">1.2k</span>
                                    <p className="paragraph">Worldwide client</p>
                                </li>
                                <li className="award-lists-item">

                                    <span className="text-white text-32 fw-bold font-Syne position-relative">3.5k</span>
                                    <p className="paragraph">Job done successfully</p>
                                </li>
                            </ul>

                            <div className="d-flex flex-wrap">
                                <a href="contact.html" className="d-flex flex-wrap align-items-center btn-primary">Download my resume
                                    <span className="d-inline-block animate-arrow-up">
                        
                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*-- About Us Sectin End */}




        {/*-- tabs start */}
        <section className="featured-properties dark-paragraph">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-5 col-2xl-4" data-aos="efade-up" data-aos-delay="300">

                        <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 mb-4">
                            <span className="text-warning text-xl">Resume</span>
                            <h3 className="section-title circle-shape text-white position-relative">
                                All over my details find here...
                            </h3>

                        </div>
                        <div className="tabs nav nav-pills flex-wrap flex-lg-column">
                            <button data-bs-toggle="pill" data-bs-target="#about_me_tab" className="tab-btn justify-content-between align-items-center d-inline-flex active">
                                About me
                                <span className="inline-block animate-arrow-up">
                            
                        </span>
                            </button>
                            <button className="tab-btn tab-btn justify-content-between align-items-center d-inline-flex" data-bs-toggle="pill" data-bs-target="#experience_tab">
                                Experience
                                <span className="inline-block animate-arrow-up">
                            
                        </span>
                            </button>
                            <button className="tab-btn tab-btn justify-content-between align-items-center d-inline-flex" data-bs-toggle="pill" data-bs-target="#education_tab">
                                Education
                                <span className="inline-block animate-arrow-up">
                            
                        </span>
                            </button>
                            <button className="tab-btn tab-btn justify-content-between align-items-center d-inline-flex" data-bs-toggle="pill" data-bs-target="#skills_tab">
                                Skills
                                <span className="inline-block animate-arrow-up">
                            
                        </span>
                            </button>
                            <button className="tab-btn tab-btn justify-content-between align-items-center d-inline-flex" data-bs-toggle="pill" data-bs-target="#awards_tab">
                                Awards
                                <span className="inline-block animate-arrow-up">
                            
                        </span>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 col-2xl-8 featured-properties-space-left" data-aos="efade-up" data-aos-delay="600">
                        <div className="tab-content">

                            <div id="about_me_tab" className="tab-pane fade show active position-relative">
                                <div className="tab-contents">
                                    <h4 className="text-white text-2xl based-in-german-title-tab fw-bold font-Syne">Based in German
                                    </h4>
                                    <p className="paragraph mb-7">Mark Henry, <span className="text-white">Product Designer</span>,
                                        based
                                        in
                                        German. That is where I come in. A
                                        lover of words, a wrangler of copy. Here to create copy that not only reflects who you
                                        are
                                        and what you stand for,</p>
                                    <p className="paragraph mb-14">but words that truly land with those that read them, calling your
                                        audience
                                        in and making them want more.</p>

                                    <ul className="flex-column gap-3 d-inline-flex list-unstyled p-0">
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Name</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        Mark Henry</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Nationality</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        Germany</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Phone</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        +(2) 870 174 302</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Email</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        hello@henry.com</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Experience</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        12+ years</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Freelance</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        Available</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Skype</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        henry.halk23</span>
                                        </li>
                                        <li className="gap-10 d-inline-flex align-items-center">
                                            <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                                        Language</span>
                                            <span className="text-white text-2xl fw-bold font-Syne leading-8">
                                        German, English</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div id="experience_tab" className="tab-pane fade position-relative">
                                <h4 className="text-white text-2xl based-in-german-title-tab fw-bold font-Syne">Experience</h4>

                                <div className="tab-contents tab-contents-experience gap-x-4 gap-y-5">

                                    <div className="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/216
                                    –
                                    Running</span>
                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">Lead digital
                                                marketer
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/2008
                                    – 07/2011</span>
                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">JavaScript
                                                developer
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/2008
                                    – 07/2011</span>
                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">Product
                                                designer
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/2008
                                    – 07/2011</span>
                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">UX researcher
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="education_tab" className="tab-pane fade">
                                <h4 className="text-white text-2xl based-in-german-title-tab fw-bold font-Syne">Education</h4>

                                <div className="education-tab-contents">

                                    <div className="education-tab-item d-flex flex-wrap">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">003/2008
                                    –
                                    07/2011</span>
                                        <div className="flex-1">
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">BA Business
                                                Management
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="education-tab-item d-flex flex-wrap">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/2008
                                    – 07/2011</span>
                                        <div className="flex-1">
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">BA Business
                                                Management
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="education-tab-item d-flex flex-wrap">
                                        <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">03/2008
                                    – 07/2011</span>
                                        <div className="flex-1">
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Axtra</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-2xl text-white">BA Business
                                                Management
                                            </h4>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div id="skills_tab" className="tab-pane fade">
                                <h4 className="text-white text-2xl based-in-german-title-tab fw-bold font-Syne">Skills</h4>

                                <div className="skills-tab-contents">

                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/vs-code.png" alt="icons"> */}
                                        

                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">React JS</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(90%)</p>
                                        </div>
                                    </div>


                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/figma.png" alt="icons"> */}
                                        

                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">Figma</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(70%)</p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/framer.png" alt="icons"> */}
                                        

                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">WordPress</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(80%)</p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/framer.png" alt="icons"> */}
                                        

                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">Sketch</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(80%)</p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/framer.png" alt="icons"> */}
                                        
                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">WordPress</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(40%)</p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                                        {/*-- <img className="items-start" src="assets/images/skills/framer.png" alt="icons"> */}
                                        
                                        <div className="flex flex-wrap gap-1 flex-1 flex-col">
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">Sketch</h4>
                                            <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">(60%)</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div id="awards_tab" className="tab-pane fade">
                                <h4 className="text-white text-2xl based-in-german-title-tab fw-bold font-Syne">Awards</h4>

                                <div className="awards-tab-contents">

                                    <div className="d-flex flex-wrap flex-column awards-tab-item">

                                        <div className="d-flex align-items-start justify-content-between">
                                            {/*-- <img src="assets/images/awards/w-dot.png" alt="icons"> */}
                                            

                                            <span className="fw-normal text-sm font-Inter text-black-text-800">2018</span>
                                        </div>

                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Winner</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">01X
                                                Developer Award
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap flex-column awards-tab-item">

                                        <div className="d-flex align-items-start justify-content-between">
                                            <img src="assets/images/awards/webby.png" alt="icons"/>
                                            
                                            <span className="fw-normal text-sm font-Inter text-black-text-800">2018</span>
                                        </div>

                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Winner</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">01X
                                                Developer Award
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap flex-column awards-tab-item">

                                        <div className="d-flex align-items-start justify-content-between">
                                             <img src="assets/images/awards/fwa.png" alt="icons"/>
                                           
                                            <span className="fw-normal text-sm font-Inter text-black-text-800">2018</span>
                                        </div>

                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Winner</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">01X
                                                Developer Award
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap flex-column awards-tab-item">

                                        <div className="d-flex align-items-start justify-content-between">
                                            <img src="assets/images/awards/wordpress.png" alt="icons"/>
                                            <span className="fw-normal text-sm font-Inter text-black-text-800">2018</span>
                                        </div>

                                        <div>
                                            <p className="dot text-lg fw-normal font-sans leading-7 text-white position-relative">
                                                Winner</p>
                                            <h4 className="fw-bold font-Syne leading-normal text-xl text-white">01X
                                                Developer Award
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <span className="d-flex justify-content-end mt-14 -mr-3">
                        </span>
                    </div>
                </div>
            </div>
        </section>
        {/*-- tabs end */}


        {/*-- Portfolio Section Start */}
        <section className="bg-secondary py-120">
            <div className="container">
                <div className="row">
                    <div className="col-12" data-aos="efade-up" data-aos-delay="400">
                        <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
                            <span className="text-warning text-xl">Portfolio</span>
                            <h3 className="section-title text-dark">
                                My recent <span className="position-relative circle-shape portfolio-shape">w</span>ork
                            </h3>
                        </div>
                    </div>

                    <div className="col-12 col-md-6" data-aos="efade-up" data-aos-delay="600">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img src="assets/images/projects/project1.png" alt="project1" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <div className="d-flex flex-wrap gap-2">
                                <a className="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link" href="projects.html">APP</a>
                                <a className="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div className="d-flex flex-wrap align-items-center justify-content-between text-dark portfolio-title">
                                <h4 className="fw-bold font-Syne text-center leading-10 portfolio-link">
                                    <a className="transition-all" href="project-details.html">Basinik Finance App</a>
                                </h4>
                                <a className="animate-arrow-up" href="project-details.html">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6" data-aos="efade-up" data-aos-delay="800">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img src="assets/images/projects/project2.png" alt="project1" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <div className="d-flex flex-wrap gap-2">
                                <a className="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link" href="projects.html">APP</a>
                                <a className="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link" href="projects.html">DEVELOPMENT</a>

                            </div>
                            <div className="d-flex flex-wrap align-items-center justify-content-between text-dark portfolio-title">
                                <h4 className="fw-bold font-Syne text-center leading-10 portfolio-link">
                                    <a className="transition-all" href="project-details.html">Oxilex Dashboard design</a>
                                </h4>
                                <a className="animate-arrow-up" href="project-details.html">
                                  
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-12 mt-12" data-aos="efade-up" data-aos-delay="600">
                    <div className="d-flex">
                        <a href="projects.html" className="d-flex align-items-center justify-content-center flex-wrap btn-primary flex-grow-1">
                            View All Project
                            <span className="inline-block ml-3 animate-arrow-up">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*-- Portfolio Section End */}




        {/*-- Testimonial section Start */}
        <section className="bg-dark py-120 testimonial" data-aos="efade-up" data-aos-delay="400">
            <div className="testimonial-space-left px-8">
                <div className="d-flex flex-column testimonial-gap flex-xl-row">

                    <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 mb-10 testimonial-title-section">
                        <span className="text-warning text-xl">Testimonial</span>
                        <h3 className="d-inline-block section-title text-white">
                            <span className="position-relative circle-shape testimonial-shape">Cl</span>ient
                            <br className="hidden d-xl-inline-block" /> feedback
                        </h3>
                    </div>


                    <div className="swiper w-100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <span className="d-inline-block qotation-icon">
                                </span>
                                <p className="testimonial-texts fw-bold font-Syne">
                                    “Energistically
                                    build
                                    alternative scenarios
                                    via cross-unit applications. Credibly exploit
                                    one-to-one strategic theme areas and clicks-and-mortar services”</p>
                                <h4 className="d-flex flex-wrap align-items-center gap-4 text-white testimonial-qotation-name font-Syne">
                                    <span>
                                    </span> Jhon Smith
                                </h4>
                            </div>
                            <div className="swiper-slide">
                                <span className="d-inline-block qotation-icon">
                                    
                                </span>
                                <p className="testimonial-texts fw-bold font-Syne">
                                    “Energistically
                                    build
                                    “Unleash energistically build alternative scenarios via cross-unit build
                                    efficient
                                    initiatives for distinctive vortals. Synergistically strategize via adaptiv“
                                </p>
                                <h4 className="d-flex flex-wrap align-items-center gap-4 text-white testimonial-qotation-name font-Syne">
                                    <span>
                                        
                                    </span> Jhon Smith
                                </h4>
                            </div>
                            <div className="swiper-slide">
                                <span className="d-inline-block qotation-icon">
                                    
                                    <p className="testimonial-texts fw-bold font-Syne">
                                        “Energistically
                                        build
                                        “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra
                                        nisi. Fusce
                                        et
                                        laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”

                                    </p>
                                    <h4 className="d-flex flex-wrap align-items-center gap-4 text-white testimonial-qotation-name font-Syne">
                                        <span>
                                        </span> Jhon Smith
                                </h4>
                            </span></div>
                            <div className="swiper-slide">
                                <span className="d-inline-block qotation-icon">
                                    
                                </span>
                                <p className="testimonial-texts fw-bold font-Syne">
                                    “Energistically
                                    build
                                    “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra
                                    nisi. Fusce
                                    et
                                    laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”

                                </p>
                                <h4 className="d-flex flex-wrap align-items-center gap-4 text-white testimonial-qotation-name font-Syne">
                                    <span>
                                    </span> Jhon Smith
                                </h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        {/*-- Testimonial section End */}

        {/*-- Brand Section Start*/}

        <div className="bg-dark brandCarousel" data-aos="eflip-down" data-aos-delay="600">
            <div className="container">
                <div className="swiper brand-carousel">

                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white1.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white2.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white3.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white4.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white5.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white6.png" alt=" brandlogo" />
                        </div>
                        <div className="swiper-slide">
                            <img className="mx-auto d-block" src="assets/images/brand/logo-white3.png" alt=" brandlogo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*-- Brand Section End*/}



        {/*-- Blog Section Start */}
        <section className="bg-dark py-120">
            <div className="container">

                <div className="row">
                    <div className="col-12" data-aos="efade-up" data-aos-delay="500">
                        <div className="fw-bold font-Syne text-center leading-none flex flex-wrap flex-column gap-y-2 mb-10">
                            <span className="text-warning text-xl">Blog</span>
                            <h3 className="section-title text-white">
                                My blog
                                <span className="position-relative circle-shape blog-shape">po</span>st
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="blog-grid">

                    {/*-- Blog Item Start */}
                    <div className="blog-item" data-aos="efade-up" data-aos-delay="300">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img className="w-100" src="assets/images/blog/blog1.png" alt="blog image" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <ul className="d-flex flex-wrap text-sm fw-normal font-Inter leading-tight p-0 list-unstyled m-0 p-0 list-unstyled m-0">
                                <li className="blog-meta-item">
                                    <a href="#">UI Design</a>
                                </li>
                                <li className="blog-meta-item">
                                    <a href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div className="d-flex justify-content-between align-items-end text-white blog-title-section">
                                <h4 className="fw-bold font-Syne transition-all leading-8 blog-title">
                                    <a href="blog-details.html">Right-lo-left
                                        behind development in mobile web design</a>
                                </h4>
                                <a href="blog-details.html" className="animate-arrow-up">
                                    

                                </a>
                            </div>
                        </div>
                    </div>
                    {/*-- Blog Item End */}

                    {/*-- Blog Item Start */}
                    <div className="blog-item" data-aos="efade-up" data-aos-delay="500">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img className="w-100" src="assets/images/blog/blog2.png" alt="blog image" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <ul className="d-flex flex-wrap text-sm fw-normal font-Inter leading-tight p-0 list-unstyled m-0">
                                <li className="blog-meta-item">
                                    <a href="#">UI Design</a>
                                </li>
                                <li className="blog-meta-item">
                                    <a href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div className="d-flex justify-content-between align-items-end text-white blog-title-section">
                                <h4 className="fw-bold font-Syne transition-all leading-8 blog-title">
                                    <a href="blog-details.html">Connect
                                        craft: Reading
                                        the smart experience</a>
                                </h4>
                                <a href="blog-details.html" className="animate-arrow-up">
                                    

                                </a>
                            </div>
                        </div>
                    </div>
                    {/*-- Blog Item End */}

                    {/*-- Blog Item Start */}
                    <div className="blog-item" data-aos="efade-up" data-aos-delay="700">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img className="w-100" src="assets/images/blog/blog3.png" alt="blog image" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <ul className="d-flex flex-wrap text-sm fw-normal font-Inter leading-tight p-0 list-unstyled m-0">
                                <li className="blog-meta-item">
                                    <a href="#">UI Design</a>
                                </li>
                                <li className="blog-meta-item">
                                    <a href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div className="d-flex justify-content-between align-items-end text-white blog-title-section">
                                <h4 className="fw-bold font-Syne transition-all leading-8 blog-title">
                                    <a href="blog-details.html">Ecoglow: Sustainable
                                        skincare a brighter tomorrow</a>
                                </h4>
                                <a href="blog-details.html" className="animate-arrow-up">
                                    

                                </a>
                            </div>
                        </div>
                    </div>
                    {/*-- Blog Item End */}

                    {/*-- Blog Item Start */}
                    <div className="blog-item" data-aos="efade-up" data-aos-delay="900">
                        <div className="rounded-20 overflow-hidden mb-6">
                            <img className="w-100" src="assets/images/blog/blog4.png" alt="blog image" />
                        </div>
                        <div className="d-flex flex-wrap flex-column gap-3">
                            <ul className="d-flex flex-wrap text-sm fw-normal font-Inter leading-tight p-0 list-unstyled m-0">
                                <li className="blog-meta-item">
                                    <a href="#">UI Design</a>
                                </li>
                                <li className="blog-meta-item">
                                    <a href="#">03 May 2019</a>
                                </li>

                            </ul>
                            <div className="d-flex justify-content-between align-items-end text-white blog-title-section">
                                <h4 className="fw-bold font-Syne transition-all leading-8 blog-title">
                                    <a href="blog-details.html">Right-lo-left behind
                                        development in mobile web design</a>
                                </h4>
                                <a href="blog-details.html" className="animate-arrow-up">
                                    

                                </a>
                            </div>
                        </div>
                    </div>
                    {/*-- Blog Item End */}

                </div>

            </div>
        </section>
        {/*-- Blog Section End */}


        {/*-- Pricing Section Start */}
        <section className="bg-dark pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-16">
                            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 pricing-title-section" data-aos="efade-up" data-aos-delay="400">
                                <span className="text-warning text-xl">Pricing</span>
                                <h3 className="section-title text-white">
                                    Stay chill and pick your <span className="position-relative circle-shape priceing-shape">pl</span>an
                                </h3>
                            </div>

                            <div className="d-flex contact-for-custom-project" data-aos="efade-up" data-aos-delay="700">
                                <a href="contact.html" className="d-flex align-items-center flex-wrap btn-primary">
                                    Contact for Custom Project
                                    <span className="d-inline-block ml-3 animate-arrow-up">
                                        
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prcing-grid">

                    {/*-- Pricing Item Start */}

                    <div className="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="efade-up" data-aos-delay="500">

                        <div className="d-flex align-items-center justify-content-between">
                            <span className="text-lg fw-normal font-sans leading-none pricing-plan">Basic</span>
                            <span className="fw-bold text-xl font-Syne pricing-rate">$48/h</span>
                        </div>

                        <div className="d-flex flex-wrap justify-content-between align-items-end">
                            <div>
                                <h4 className="fw-bold font-Syne leading-10 text-32 text-white mb-1">20 hrs
                                </h4>
                                <p className="text-lg fw-normal font-sans leading-none pricing-plan">10
                                    hours per
                                    week</p>
                            </div>

                            <a href="#" className="animate-arrow-up">
                                
                            </a>
                        </div>
                    </div>

                    {/*-- Pricing Item End */}
                    {/*-- Pricing Item Start */}

                    <div className="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="efade-up" data-aos-delay="700">

                        <div className="d-flex align-items-center justify-content-between">
                            <span className="text-lg fw-normal font-sans leading-none pricing-plan">Premium</span>
                            <span className="fw-bold text-xl font-Syne pricing-rate">$60/h</span>
                        </div>

                        <div className="d-flex flex-wrap justify-content-between align-items-end">
                            <div>
                                <h4 className="fw-bold font-Syne leading-10 text-32 text-white mb-1">30 hrs
                                </h4>
                                <p className="text-lg fw-normal font-sans leading-none pricing-plan">15
                                    hours per
                                    week</p>
                            </div>

                            <a href="#" className="animate-arrow-up">
                                
                            </a>
                        </div>
                    </div>

                    {/*-- Pricing Item End */}
                    {/*-- Pricing Item Start */}

                    <div className="transition-all d-flex flex-wrap flex-column pricing-item" data-aos="efade-up" data-aos-delay="900">

                        <div className="d-flex align-items-center justify-content-between">
                            <span className="text-lg fw-normal font-sans leading-none pricing-plan">Platinum</span>
                            <span className="fw-bold text-xl font-Syne pricing-rate">$60/h</span>
                        </div>

                        <div className="d-flex flex-wrap justify-content-between align-items-end">
                            <div>
                                <h4 className="fw-bold font-Syne leading-10 text-32 text-white mb-1">20 hrs
                                </h4>
                                <p className="text-lg fw-normal font-sans leading-none pricing-plan">80
                                    hours per
                                    week</p>
                            </div>

                            <a href="#" className="animate-arrow-up">
                                
                            </a>
                        </div>
                    </div>

                    {/*-- Pricing Item End */}

                </div>
            </div>
        </section>
        {/*-- Pricing Section End */}
        </>
    );


}
export default Hero;