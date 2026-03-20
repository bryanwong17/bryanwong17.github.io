// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "List of publications in chronological order. (*) denotes equal contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV up-to-date as of 2026.03",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-one-year-early-with-a-b-s-in-computer-science-from-ntust",
          title: 'Graduated one year early with a B.S. in Computer Science from NTUST.',
          description: "",
          section: "News",},{id: "news-started-the-m-s-program-at-the-graduate-school-of-data-science-gsds-kaist",
          title: 'Started the M.S. program at the Graduate School of Data Science (GSDS), KAIST....',
          description: "",
          section: "News",},{id: "news-a-paper-on-gender-pay-gap-analysis-was-accepted-at-ic2s2-2022-and-kcc-2022",
          title: 'A paper on gender pay-gap analysis was accepted at IC2S2 2022 and KCC...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-master-s-thesis",
          title: 'Successfully defended my Master’s thesis.',
          description: "",
          section: "News",},{id: "news-started-the-ph-d-program-at-the-graduate-school-of-data-science-gsds-kaist",
          title: 'Started the Ph.D. program at the Graduate School of Data Science (GSDS), KAIST....',
          description: "",
          section: "News",},{id: "news-a-paper-on-predicted-loss-active-learning-was-accepted-at-bmc-medical-imaging",
          title: 'A paper on predicted-loss active learning was accepted at BMC Medical Imaging.',
          description: "",
          section: "News",},{id: "news-two-papers-rethinking-mil-fe-and-time-series-mil-were-accepted-at-ieee-isbi-2025",
          title: 'Two papers, Rethinking MIL FE and Time Series MIL, were accepted at IEEE...',
          description: "",
          section: "News",},{id: "news-one-paper-rmts-was-accepted-at-naacl-findings-2025",
          title: 'One paper, RMTS, was accepted at NAACL Findings 2025.',
          description: "",
          section: "News",},{id: "news-new-preprint-few-shot-learning-from-gigapixel-images-via-hierarchical-vision-language-alignment-and-modeling",
          title: 'New preprint: Few-Shot Learning from Gigapixel Images via Hierarchical Vision-Language Alignment and Modeling....',
          description: "",
          section: "News",},{id: "news-one-paper-micromil-was-accepted-at-miccai-2025",
          title: 'One paper, MicroMIL, was accepted at MICCAI 2025.',
          description: "",
          section: "News",},{id: "news-selected-as-a-student-volunteer-at-miccai-2025-held-in-daejeon-south-korea-kr",
          title: 'Selected as a student volunteer at MICCAI 2025, held in Daejeon, South Korea...',
          description: "",
          section: "News",},{id: "news-one-paper-mf2vec-was-accepted-at-cikm-2025",
          title: 'One paper, MF2Vec, was accepted at CIKM 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-lokt-was-accepted-at-emnlp-findings-2025",
          title: 'One paper, LOKT, was accepted at EMNLP Findings 2025.',
          description: "",
          section: "News",},{id: "news-attending-and-presenting-micromil-at-miccai-2025-in-daejeon-south-korea-kr",
          title: 'Attending and presenting MicroMIL at MICCAI 2025 in Daejeon, South Korea :kr:.',
          description: "",
          section: "News",},{id: "news-one-paper-on-hierarchical-vision-language-mil-for-gigapixel-medical-images-hive-mil-was-accepted-at-neurips-2025",
          title: 'One paper on hierarchical vision-language MIL for gigapixel medical images, HiVE-MIL, was accepted...',
          description: "",
          section: "News",},{id: "news-awarded-the-daewoong-foundation-global-scholarship-program-nov-2025-feb-2026-supporting-outstanding-international-students-in-south-korea",
          title: 'Awarded the Daewoong Foundation Global Scholarship Program (Nov. 2025-Feb. 2026), supporting outstanding international...',
          description: "",
          section: "News",},{id: "news-attending-and-presenting-hive-mil-at-neurips-2025-in-san-diego-california-united-states-us",
          title: 'Attending and presenting HiVE-MIL at NeurIPS 2025 in San Diego, California, United States...',
          description: "",
          section: "News",},{id: "news-awarded-the-outstanding-award-best-runner-up-from-the-graduate-school-of-data-science-gsds-kaist-based-on-the-2025-annual-research-performance-evaluation",
          title: 'Awarded the Outstanding Award (Best Runner-up) from the Graduate School of Data Science...',
          description: "",
          section: "News",},{id: "news-awarded-the-a-star-research-attachment-programme-arap-to-support-my-14-month-visiting-ph-d-research-jun-2026-aug-2027-under-the-supervision-of-dr-xun-xu",
          title: 'Awarded the A*STAR Research Attachment Programme (ARAP) to support my 14-month visiting Ph.D....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%72%79%61%6E.%77%6F%6E%67@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bryanwong17", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bryanwongg", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4RmNmQcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
