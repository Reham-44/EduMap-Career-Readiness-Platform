import type { Faculty } from '@/types';

export interface Career {
  id: string;
  title: string;
  faculty: Faculty;
  icon: string;
  shortDesc: string;
  description: string;
  skills: { name: string; required: number }[];
  strengths: string[];
  roadmap: { id: string; title: string; skills: { id: string; name: string; description: string }[] }[];
}

export const careers: Career[] = [
  {
    id: 'accounting',
    title: 'Accounting',
    faculty: 'Commerce',
    icon: 'Calculator',
    shortDesc: 'Financial reporting, auditing, and tax compliance',
    description: 'Master financial record-keeping, reporting, and compliance. Accountants ensure organizations maintain accurate financial data and meet regulatory requirements.',
    skills: [
      { name: 'Accounting Principles', required: 90 },
      { name: 'Excel', required: 85 },
      { name: 'Financial Statements', required: 88 },
      { name: 'Tax', required: 75 },
      { name: 'Auditing', required: 70 },
      { name: 'Problem Solving', required: 75 },
    ],
    strengths: ['Detail-oriented', 'Analytical thinking', 'Integrity', 'Organization'],
    roadmap: [
      {
        id: 'acc-s1',
        title: 'Accounting Fundamentals',
        skills: [
          { id: 'acc-s1-1', name: 'Accounting Principles', description: 'Understand debit/credit, journal entries, and the accounting cycle.' },
          { id: 'acc-s1-2', name: 'Financial Statements', description: 'Prepare balance sheets, income statements, and cash flow statements.' },
          { id: 'acc-s1-3', name: 'Bookkeeping', description: 'Record transactions and maintain ledgers accurately.' },
        ],
      },
      {
        id: 'acc-s2',
        title: 'Advanced Accounting',
        skills: [
          { id: 'acc-s2-1', name: 'Advanced Excel', description: 'Use pivot tables, VLOOKUP, and financial formulas.' },
          { id: 'acc-s2-2', name: 'Tax Accounting', description: 'Understand Egyptian tax law and VAT calculations.' },
          { id: 'acc-s2-3', name: 'Auditing', description: 'Learn audit procedures and internal controls.' },
        ],
      },
      {
        id: 'acc-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'acc-s3-1', name: 'Financial Review Project', description: 'Complete a small business financial review challenge.' },
          { id: 'acc-s3-2', name: 'Tax Filing Case', description: 'Prepare a mock tax filing for a company.' },
        ],
      },
      {
        id: 'acc-s4',
        title: 'Career Ready',
        skills: [
          { id: 'acc-s4-1', name: 'CV', description: 'Build an accounting-focused CV.' },
          { id: 'acc-s4-2', name: 'Interview Prep', description: 'Practice common accounting interview questions.' },
          { id: 'acc-s4-3', name: 'Portfolio', description: 'Compile your accounting projects into a portfolio.' },
        ],
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    faculty: 'Commerce',
    icon: 'TrendingUp',
    shortDesc: 'Financial analysis, modeling, and investment',
    description: 'Analyze financial data, build models, and support investment decisions. Finance professionals help organizations manage money and plan for growth.',
    skills: [
      { name: 'Financial Analysis', required: 88 },
      { name: 'Excel', required: 85 },
      { name: 'Financial Modeling', required: 80 },
      { name: 'Accounting', required: 70 },
      { name: 'Problem Solving', required: 78 },
      { name: 'Communication', required: 72 },
    ],
    strengths: ['Analytical thinking', 'Business acumen', 'Quantitative skills', 'Decision-making'],
    roadmap: [
      {
        id: 'fin-s1',
        title: 'Finance Fundamentals',
        skills: [
          { id: 'fin-s1-1', name: 'Financial Analysis', description: 'Analyze financial statements and key ratios.' },
          { id: 'fin-s1-2', name: 'Accounting Basics', description: 'Understand how financial statements connect.' },
          { id: 'fin-s1-3', name: 'Excel', description: 'Master financial formulas and data analysis.' },
        ],
      },
      {
        id: 'fin-s2',
        title: 'Financial Modeling',
        skills: [
          { id: 'fin-s2-1', name: 'Financial Modeling', description: 'Build DCF, LBO, and scenario models.' },
          { id: 'fin-s2-2', name: 'Investment Analysis', description: 'Evaluate investment opportunities and risk.' },
          { id: 'fin-s2-3', name: 'Advanced Excel', description: 'Use complex models, macros, and dashboards.' },
        ],
      },
      {
        id: 'fin-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'fin-s3-1', name: 'Investment Analysis Case', description: 'Analyze a company and recommend investment.' },
          { id: 'fin-s3-2', name: 'Financial Model Project', description: 'Build a full financial model from scratch.' },
        ],
      },
      {
        id: 'fin-s4',
        title: 'Career Ready',
        skills: [
          { id: 'fin-s4-1', name: 'CV', description: 'Build a finance-focused CV.' },
          { id: 'fin-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for finance roles.' },
          { id: 'fin-s4-3', name: 'Interview Prep', description: 'Practice finance interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    faculty: 'Commerce',
    icon: 'Megaphone',
    shortDesc: 'Digital marketing, brand strategy, and content',
    description: 'Create marketing campaigns, analyze engagement, and build brand strategies. Marketers connect products with audiences through data-driven campaigns.',
    skills: [
      { name: 'Digital Marketing', required: 85 },
      { name: 'Market Research', required: 78 },
      { name: 'Content Strategy', required: 80 },
      { name: 'Social Media', required: 82 },
      { name: 'Communication', required: 85 },
      { name: 'Excel', required: 65 },
    ],
    strengths: ['Creativity', 'Communication', 'Strategic thinking', 'Adaptability'],
    roadmap: [
      {
        id: 'mkt-s1',
        title: 'Marketing Fundamentals',
        skills: [
          { id: 'mkt-s1-1', name: 'Marketing Principles', description: 'Understand the 4Ps, STP, and customer journey.' },
          { id: 'mkt-s1-2', name: 'Market Research', description: 'Conduct surveys, analyze competitors, and segment markets.' },
          { id: 'mkt-s1-3', name: 'Content Strategy', description: 'Plan and create content for different channels.' },
        ],
      },
      {
        id: 'mkt-s2',
        title: 'Digital Marketing',
        skills: [
          { id: 'mkt-s2-1', name: 'Social Media Marketing', description: 'Run campaigns on Facebook, Instagram, and LinkedIn.' },
          { id: 'mkt-s2-2', name: 'SEO & SEM', description: 'Understand search optimization and paid ads.' },
          { id: 'mkt-s2-3', name: 'Analytics', description: 'Use Google Analytics and social media insights.' },
        ],
      },
      {
        id: 'mkt-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'mkt-s3-1', name: 'Digital Engagement Challenge', description: 'Analyze and improve a brand social media presence.' },
          { id: 'mkt-s3-2', name: 'Campaign Project', description: 'Design and present a full marketing campaign.' },
        ],
      },
      {
        id: 'mkt-s4',
        title: 'Career Ready',
        skills: [
          { id: 'mkt-s4-1', name: 'CV', description: 'Build a marketing-focused CV.' },
          { id: 'mkt-s4-2', name: 'Portfolio', description: 'Showcase campaigns and content you created.' },
          { id: 'mkt-s4-3', name: 'Interview Prep', description: 'Practice marketing interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'hr',
    title: 'Human Resources',
    faculty: 'Commerce',
    icon: 'Users',
    shortDesc: 'Recruitment, employee relations, and HR management',
    description: 'Manage recruitment, employee development, and workplace culture. HR professionals are the bridge between organizations and their people.',
    skills: [
      { name: 'Recruitment', required: 82 },
      { name: 'Communication', required: 88 },
      { name: 'Employee Relations', required: 78 },
      { name: 'HR Systems', required: 70 },
      { name: 'Problem Solving', required: 72 },
      { name: 'Organization', required: 80 },
    ],
    strengths: ['Communication', 'Empathy', 'Organization', 'Conflict resolution'],
    roadmap: [
      {
        id: 'hr-s1',
        title: 'HR Fundamentals',
        skills: [
          { id: 'hr-s1-1', name: 'HR Principles', description: 'Understand the employee lifecycle and HR functions.' },
          { id: 'hr-s1-2', name: 'Recruitment', description: 'Learn sourcing, screening, and interviewing.' },
          { id: 'hr-s1-3', name: 'Communication', description: 'Develop professional communication skills.' },
        ],
      },
      {
        id: 'hr-s2',
        title: 'Advanced HR',
        skills: [
          { id: 'hr-s2-1', name: 'Employee Relations', description: 'Handle disputes, performance, and engagement.' },
          { id: 'hr-s2-2', name: 'HR Systems', description: 'Use HRIS tools and manage employee data.' },
          { id: 'hr-s2-3', name: 'Labor Law Basics', description: 'Understand Egyptian labor law fundamentals.' },
        ],
      },
      {
        id: 'hr-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'hr-s3-1', name: 'Recruitment Challenge', description: 'Shortlist candidates for a role.' },
          { id: 'hr-s3-2', name: 'HR Policy Project', description: 'Draft an HR policy for a mock company.' },
        ],
      },
      {
        id: 'hr-s4',
        title: 'Career Ready',
        skills: [
          { id: 'hr-s4-1', name: 'CV', description: 'Build an HR-focused CV.' },
          { id: 'hr-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for HR roles.' },
          { id: 'hr-s4-3', name: 'Interview Prep', description: 'Practice HR interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    faculty: 'Commerce',
    icon: 'BarChart3',
    shortDesc: 'Data analysis, visualization, and business intelligence',
    description: 'Analyze business data, build dashboards, and drive data-informed decisions. Business Analytics professionals turn raw data into actionable insights.',
    skills: [
      { name: 'Excel', required: 85 },
      { name: 'Power BI', required: 82 },
      { name: 'SQL', required: 78 },
      { name: 'Data Analysis', required: 88 },
      { name: 'Statistics', required: 75 },
      { name: 'Problem Solving', required: 80 },
    ],
    strengths: ['Analytical thinking', 'Quantitative skills', 'Problem solving', 'Business acumen'],
    roadmap: [
      {
        id: 'ba-s1',
        title: 'Data Fundamentals',
        skills: [
          { id: 'ba-s1-1', name: 'Excel', description: 'Master data analysis with pivot tables and formulas.' },
          { id: 'ba-s1-2', name: 'Statistics', description: 'Understand descriptive and inferential statistics.' },
          { id: 'ba-s1-3', name: 'Data Analysis', description: 'Learn data cleaning and exploratory analysis.' },
        ],
      },
      {
        id: 'ba-s2',
        title: 'Analytics Tools',
        skills: [
          { id: 'ba-s2-1', name: 'SQL', description: 'Query databases and extract insights.' },
          { id: 'ba-s2-2', name: 'Power BI', description: 'Build interactive dashboards and reports.' },
          { id: 'ba-s2-3', name: 'Advanced Excel', description: 'Use Power Query and data modeling.' },
        ],
      },
      {
        id: 'ba-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'ba-s3-1', name: 'Sales Analysis Challenge', description: 'Analyze sales data and identify decline causes.' },
          { id: 'ba-s3-2', name: 'Dashboard Project', description: 'Build a full business intelligence dashboard.' },
        ],
      },
      {
        id: 'ba-s4',
        title: 'Career Ready',
        skills: [
          { id: 'ba-s4-1', name: 'CV', description: 'Build an analytics-focused CV.' },
          { id: 'ba-s4-2', name: 'Portfolio', description: 'Showcase dashboards and analysis projects.' },
          { id: 'ba-s4-3', name: 'Interview Prep', description: 'Practice analytics interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    faculty: 'Commerce',
    icon: 'Briefcase',
    shortDesc: 'Requirements analysis, process improvement, and stakeholder management',
    description: 'Bridge business and technology by gathering requirements, mapping processes, and driving improvements. Business Analysts are problem-solvers at the heart of organizations.',
    skills: [
      { name: 'Excel', required: 90 },
      { name: 'SQL', required: 75 },
      { name: 'Power BI', required: 70 },
      { name: 'Requirements Gathering', required: 85 },
      { name: 'Process Mapping', required: 80 },
      { name: 'Problem Solving', required: 82 },
    ],
    strengths: ['Analytical thinking', 'Business thinking', 'Communication', 'Problem solving'],
    roadmap: [
      {
        id: 'bus-s1',
        title: 'Business Fundamentals',
        skills: [
          { id: 'bus-s1-1', name: 'Business Processes', description: 'Understand how businesses operate end-to-end.' },
          { id: 'bus-s1-2', name: 'Problem Solving', description: 'Learn structured problem-solving frameworks.' },
          { id: 'bus-s1-3', name: 'Business Communication', description: 'Communicate clearly with stakeholders.' },
        ],
      },
      {
        id: 'bus-s2',
        title: 'Data Skills',
        skills: [
          { id: 'bus-s2-1', name: 'Excel', description: 'Master data analysis and reporting.' },
          { id: 'bus-s2-2', name: 'Advanced Excel', description: 'Use pivot tables, Power Query, and dashboards.' },
          { id: 'bus-s2-3', name: 'SQL', description: 'Query databases for business data.' },
          { id: 'bus-s2-4', name: 'Power BI', description: 'Build dashboards for stakeholders.' },
        ],
      },
      {
        id: 'bus-s3',
        title: 'Analysis Skills',
        skills: [
          { id: 'bus-s3-1', name: 'Requirements Gathering', description: 'Elicit and document business requirements.' },
          { id: 'bus-s3-2', name: 'Process Mapping', description: 'Map current and future state processes.' },
          { id: 'bus-s3-3', name: 'KPI Analysis', description: 'Define and track key performance indicators.' },
          { id: 'bus-s3-4', name: 'BRD / FRD', description: 'Write Business and Functional Requirement Documents.' },
        ],
      },
      {
        id: 'bus-s4',
        title: 'Practical Experience',
        skills: [
          { id: 'bus-s4-1', name: 'Business Case', description: 'Build a business case for a new initiative.' },
          { id: 'bus-s4-2', name: 'Data Analysis Project', description: 'Analyze data and present findings.' },
          { id: 'bus-s4-3', name: 'Real Company Challenge', description: 'Solve a real business process problem.' },
        ],
      },
      {
        id: 'bus-s5',
        title: 'Career Ready',
        skills: [
          { id: 'bus-s5-1', name: 'CV', description: 'Build a BA-focused CV highlighting analysis skills.' },
          { id: 'bus-s5-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for BA roles.' },
          { id: 'bus-s5-3', name: 'Interview Preparation', description: 'Practice BA interview questions and case studies.' },
          { id: 'bus-s5-4', name: 'Portfolio', description: 'Compile your BA projects into a portfolio.' },
        ],
      },
    ],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Operations',
    faculty: 'Commerce',
    icon: 'Truck',
    shortDesc: 'Logistics, inventory, and operations management',
    description: 'Optimize supply chains, manage inventory, and improve operations. Supply Chain professionals keep goods and services flowing efficiently.',
    skills: [
      { name: 'Inventory Management', required: 82 },
      { name: 'Excel', required: 80 },
      { name: 'Supply Chain', required: 85 },
      { name: 'Logistics', required: 78 },
      { name: 'Problem Solving', required: 75 },
      { name: 'Process Improvement', required: 72 },
    ],
    strengths: ['Analytical thinking', 'Organization', 'Problem solving', 'Process thinking'],
    roadmap: [
      {
        id: 'sc-s1',
        title: 'Supply Chain Fundamentals',
        skills: [
          { id: 'sc-s1-1', name: 'Supply Chain Basics', description: 'Understand the end-to-end supply chain.' },
          { id: 'sc-s1-2', name: 'Inventory Management', description: 'Learn inventory models and replenishment.' },
          { id: 'sc-s1-3', name: 'Excel', description: 'Master data analysis for operations.' },
        ],
      },
      {
        id: 'sc-s2',
        title: 'Operations Management',
        skills: [
          { id: 'sc-s2-1', name: 'Logistics', description: 'Understand transportation and distribution.' },
          { id: 'sc-s2-2', name: 'Process Improvement', description: 'Apply lean and six sigma principles.' },
          { id: 'sc-s2-3', name: 'Forecasting', description: 'Forecast demand and plan accordingly.' },
        ],
      },
      {
        id: 'sc-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'sc-s3-1', name: 'Inventory Optimization Challenge', description: 'Analyze and optimize inventory strategy.' },
          { id: 'sc-s3-2', name: 'Process Improvement Project', description: 'Improve a supply chain process.' },
        ],
      },
      {
        id: 'sc-s4',
        title: 'Career Ready',
        skills: [
          { id: 'sc-s4-1', name: 'CV', description: 'Build a supply chain-focused CV.' },
          { id: 'sc-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for supply chain roles.' },
          { id: 'sc-s4-3', name: 'Interview Prep', description: 'Practice supply chain interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'banking-fintech',
    title: 'Banking & FinTech',
    faculty: 'Commerce',
    icon: 'Landmark',
    shortDesc: 'Banking operations, financial technology, and digital finance',
    description: 'Navigate the world of banking and financial technology. From traditional banking to digital payments and FinTech innovation.',
    skills: [
      { name: 'Financial Analysis', required: 80 },
      { name: 'Excel', required: 82 },
      { name: 'Banking Operations', required: 85 },
      { name: 'FinTech', required: 75 },
      { name: 'Problem Solving', required: 72 },
      { name: 'Communication', required: 75 },
    ],
    strengths: ['Analytical thinking', 'Business acumen', 'Adaptability', 'Quantitative skills'],
    roadmap: [
      {
        id: 'bk-s1',
        title: 'Banking Fundamentals',
        skills: [
          { id: 'bk-s1-1', name: 'Banking Operations', description: 'Understand retail and corporate banking.' },
          { id: 'bk-s1-2', name: 'Financial Analysis', description: 'Analyze financial data for banking.' },
          { id: 'bk-s1-3', name: 'Excel', description: 'Master financial data analysis.' },
        ],
      },
      {
        id: 'bk-s2',
        title: 'FinTech & Digital Finance',
        skills: [
          { id: 'bk-s2-1', name: 'FinTech Basics', description: 'Understand digital payments, wallets, and lending.' },
          { id: 'bk-s2-2', name: 'Digital Banking', description: 'Learn about digital transformation in banking.' },
          { id: 'bk-s2-3', name: 'Risk Management', description: 'Understand credit and operational risk.' },
        ],
      },
      {
        id: 'bk-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'bk-s3-1', name: 'FinTech Case Study', description: 'Analyze a FinTech business model.' },
          { id: 'bk-s3-2', name: 'Credit Analysis Project', description: 'Assess a loan application.' },
        ],
      },
      {
        id: 'bk-s4',
        title: 'Career Ready',
        skills: [
          { id: 'bk-s4-1', name: 'CV', description: 'Build a banking-focused CV.' },
          { id: 'bk-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for banking roles.' },
          { id: 'bk-s4-3', name: 'Interview Prep', description: 'Practice banking interview questions.' },
        ],
      },
    ],
  },
  // LAW CAREERS
  {
    id: 'legal-practice',
    title: 'Legal Practice',
    faculty: 'Law',
    icon: 'Scale',
    shortDesc: 'Litigation, court representation, and case management',
    description: 'Represent clients in court, analyze cases, and navigate litigation. Legal Practice is the traditional path for lawyers.',
    skills: [
      { name: 'Legal Research', required: 88 },
      { name: 'Case Analysis', required: 90 },
      { name: 'Legal Writing', required: 85 },
      { name: 'Communication', required: 82 },
      { name: 'Critical Thinking', required: 85 },
      { name: 'Egyptian Law', required: 88 },
    ],
    strengths: ['Critical thinking', 'Communication', 'Analytical skills', 'Persuasion'],
    roadmap: [
      {
        id: 'lp-s1',
        title: 'Legal Fundamentals',
        skills: [
          { id: 'lp-s1-1', name: 'Egyptian Law', description: 'Understand civil, criminal, and procedural law.' },
          { id: 'lp-s1-2', name: 'Case Analysis', description: 'Analyze legal cases and identify key issues.' },
          { id: 'lp-s1-3', name: 'Legal Writing', description: 'Draft legal documents and memoranda.' },
        ],
      },
      {
        id: 'lp-s2',
        title: 'Litigation Skills',
        skills: [
          { id: 'lp-s2-1', name: 'Legal Research', description: 'Research precedents and statutes.' },
          { id: 'lp-s2-2', name: 'Court Procedures', description: 'Understand court filing and hearing processes.' },
          { id: 'lp-s2-3', name: 'Advocacy', description: 'Develop courtroom advocacy skills.' },
        ],
      },
      {
        id: 'lp-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'lp-s3-1', name: 'Case Analysis Challenge', description: 'Analyze a fictional legal case.' },
          { id: 'lp-s3-2', name: 'Mock Trial Project', description: 'Prepare and present a mock case.' },
        ],
      },
      {
        id: 'lp-s4',
        title: 'Career Ready',
        skills: [
          { id: 'lp-s4-1', name: 'CV', description: 'Build a legal practice-focused CV.' },
          { id: 'lp-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for legal roles.' },
          { id: 'lp-s4-3', name: 'Interview Prep', description: 'Practice legal interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'corporate-legal',
    title: 'Corporate Legal',
    faculty: 'Law',
    icon: 'Building2',
    shortDesc: 'Corporate law, contracts, and M&A',
    description: 'Advise companies on legal matters, draft contracts, and handle corporate transactions. Corporate lawyers work at the intersection of law and business.',
    skills: [
      { name: 'Contract Law', required: 88 },
      { name: 'Corporate Law', required: 85 },
      { name: 'Legal Writing', required: 82 },
      { name: 'Legal Research', required: 80 },
      { name: 'Business Acumen', required: 78 },
      { name: 'Communication', required: 80 },
    ],
    strengths: ['Analytical thinking', 'Business acumen', 'Detail-oriented', 'Negotiation'],
    roadmap: [
      {
        id: 'cl-s1',
        title: 'Corporate Law Fundamentals',
        skills: [
          { id: 'cl-s1-1', name: 'Corporate Law', description: 'Understand company formation and governance.' },
          { id: 'cl-s1-2', name: 'Contract Law', description: 'Master contract drafting and review.' },
          { id: 'cl-s1-3', name: 'Legal Writing', description: 'Draft corporate legal documents.' },
        ],
      },
      {
        id: 'cl-s2',
        title: 'Advanced Corporate',
        skills: [
          { id: 'cl-s2-1', name: 'M&A Basics', description: 'Understand mergers and acquisitions.' },
          { id: 'cl-s2-2', name: 'Corporate Compliance', description: 'Ensure companies meet legal requirements.' },
          { id: 'cl-s2-3', name: 'Negotiation', description: 'Develop contract negotiation skills.' },
        ],
      },
      {
        id: 'cl-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'cl-s3-1', name: 'Contract Review Challenge', description: 'Review and identify risks in a contract.' },
          { id: 'cl-s3-2', name: 'Corporate Setup Project', description: 'Draft corporate documents for a new company.' },
        ],
      },
      {
        id: 'cl-s4',
        title: 'Career Ready',
        skills: [
          { id: 'cl-s4-1', name: 'CV', description: 'Build a corporate legal CV.' },
          { id: 'cl-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for corporate law.' },
          { id: 'cl-s4-3', name: 'Interview Prep', description: 'Practice corporate legal interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'compliance-risk',
    title: 'Compliance & Risk',
    faculty: 'Law',
    icon: 'ShieldCheck',
    shortDesc: 'Regulatory compliance, risk management, and governance',
    description: 'Ensure organizations comply with laws and manage risk. Compliance professionals protect companies from legal and regulatory issues.',
    skills: [
      { name: 'Regulatory Knowledge', required: 88 },
      { name: 'Risk Assessment', required: 85 },
      { name: 'Legal Research', required: 80 },
      { name: 'Audit', required: 75 },
      { name: 'Communication', required: 78 },
      { name: 'Critical Thinking', required: 82 },
    ],
    strengths: ['Detail-oriented', 'Analytical thinking', 'Integrity', 'Risk awareness'],
    roadmap: [
      {
        id: 'cr-s1',
        title: 'Compliance Fundamentals',
        skills: [
          { id: 'cr-s1-1', name: 'Regulatory Frameworks', description: 'Understand key regulations in Egypt.' },
          { id: 'cr-s1-2', name: 'Risk Assessment', description: 'Identify and assess compliance risks.' },
          { id: 'cr-s1-3', name: 'Legal Research', description: 'Research regulations and requirements.' },
        ],
      },
      {
        id: 'cr-s2',
        title: 'Risk Management',
        skills: [
          { id: 'cr-s2-1', name: 'Risk Management', description: 'Build risk frameworks and mitigation plans.' },
          { id: 'cr-s2-2', name: 'Internal Audit', description: 'Conduct compliance audits.' },
          { id: 'cr-s2-3', name: 'Compliance Programs', description: 'Design and implement compliance programs.' },
        ],
      },
      {
        id: 'cr-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'cr-s3-1', name: 'Compliance Risk Assessment', description: 'Assess compliance risks for a company.' },
          { id: 'cr-s3-2', name: 'Compliance Program Project', description: 'Design a compliance program.' },
        ],
      },
      {
        id: 'cr-s4',
        title: 'Career Ready',
        skills: [
          { id: 'cr-s4-1', name: 'CV', description: 'Build a compliance-focused CV.' },
          { id: 'cr-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for compliance roles.' },
          { id: 'cr-s4-3', name: 'Interview Prep', description: 'Practice compliance interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'legal-research',
    title: 'Legal Research',
    faculty: 'Law',
    icon: 'Search',
    shortDesc: 'Legal research, precedent analysis, and legal scholarship',
    description: 'Conduct deep legal research, analyze precedents, and support legal teams. Legal researchers are the backbone of strong legal arguments.',
    skills: [
      { name: 'Legal Research', required: 92 },
      { name: 'Legal Writing', required: 85 },
      { name: 'Case Analysis', required: 85 },
      { name: 'Critical Thinking', required: 88 },
      { name: 'Egyptian Law', required: 82 },
      { name: 'Communication', required: 72 },
    ],
    strengths: ['Research skills', 'Critical thinking', 'Writing', 'Persistence'],
    roadmap: [
      {
        id: 'lr-s1',
        title: 'Research Fundamentals',
        skills: [
          { id: 'lr-s1-1', name: 'Legal Research Methods', description: 'Master legal research databases and methods.' },
          { id: 'lr-s1-2', name: 'Case Analysis', description: 'Analyze cases and identify relevant law.' },
          { id: 'lr-s1-3', name: 'Legal Writing', description: 'Write research memos and summaries.' },
        ],
      },
      {
        id: 'lr-s2',
        title: 'Advanced Research',
        skills: [
          { id: 'lr-s2-1', name: 'Precedent Analysis', description: 'Analyze and apply legal precedents.' },
          { id: 'lr-s2-2', name: 'Statutory Interpretation', description: 'Interpret statutes and regulations.' },
          { id: 'lr-s2-3', name: 'Comparative Law', description: 'Compare legal systems and frameworks.' },
        ],
      },
      {
        id: 'lr-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'lr-s3-1', name: 'Legal Research Challenge', description: 'Research a fictional legal problem.' },
          { id: 'lr-s3-2', name: 'Research Memo Project', description: 'Prepare a structured legal research summary.' },
        ],
      },
      {
        id: 'lr-s4',
        title: 'Career Ready',
        skills: [
          { id: 'lr-s4-1', name: 'CV', description: 'Build a legal research-focused CV.' },
          { id: 'lr-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for research roles.' },
          { id: 'lr-s4-3', name: 'Interview Prep', description: 'Practice legal research interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'hr-labor-law',
    title: 'HR & Labor Law',
    faculty: 'Law',
    icon: 'Users',
    shortDesc: 'Labor law, employee relations, and workplace compliance',
    description: 'Specialize in labor law, employee rights, and workplace compliance. A unique path combining legal expertise with people management.',
    skills: [
      { name: 'Labor Law', required: 90 },
      { name: 'Legal Research', required: 78 },
      { name: 'Communication', required: 85 },
      { name: 'Employee Relations', required: 80 },
      { name: 'Legal Writing', required: 75 },
      { name: 'Problem Solving', required: 72 },
    ],
    strengths: ['Communication', 'Empathy', 'Legal knowledge', 'Conflict resolution'],
    roadmap: [
      {
        id: 'hl-s1',
        title: 'Labor Law Fundamentals',
        skills: [
          { id: 'hl-s1-1', name: 'Egyptian Labor Law', description: 'Master the Egyptian labor law code.' },
          { id: 'hl-s1-2', name: 'Employee Rights', description: 'Understand employee rights and obligations.' },
          { id: 'hl-s1-3', name: 'Legal Writing', description: 'Draft employment contracts and policies.' },
        ],
      },
      {
        id: 'hl-s2',
        title: 'HR Legal Skills',
        skills: [
          { id: 'hl-s2-1', name: 'Dispute Resolution', description: 'Handle employee disputes legally.' },
          { id: 'hl-s2-2', name: 'Employment Contracts', description: 'Draft and review employment contracts.' },
          { id: 'hl-s2-3', name: 'Workplace Compliance', description: 'Ensure workplace policies comply with law.' },
        ],
      },
      {
        id: 'hl-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'hl-s3-1', name: 'Employee Dispute Case', description: 'Analyze a fictional employee dispute.' },
          { id: 'hl-s3-2', name: 'Employment Policy Project', description: 'Draft a compliant employment policy.' },
        ],
      },
      {
        id: 'hl-s4',
        title: 'Career Ready',
        skills: [
          { id: 'hl-s4-1', name: 'CV', description: 'Build an HR & labor law CV.' },
          { id: 'hl-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for HR legal roles.' },
          { id: 'hl-s4-3', name: 'Interview Prep', description: 'Practice HR legal interview questions.' },
        ],
      },
    ],
  },
  {
    id: 'legal-tech',
    title: 'Legal Tech',
    faculty: 'Law',
    icon: 'Cpu',
    shortDesc: 'Legal technology, document automation, and legal operations',
    description: 'Bridge law and technology. Legal Tech professionals use technology to streamline legal processes and improve access to justice.',
    skills: [
      { name: 'Legal Tech Tools', required: 85 },
      { name: 'Legal Research', required: 75 },
      { name: 'Document Analysis', required: 82 },
      { name: 'Technology', required: 80 },
      { name: 'Problem Solving', required: 78 },
      { name: 'Communication', required: 72 },
    ],
    strengths: ['Technology skills', 'Adaptability', 'Problem solving', 'Legal knowledge'],
    roadmap: [
      {
        id: 'lt-s1',
        title: 'Legal Tech Fundamentals',
        skills: [
          { id: 'lt-s1-1', name: 'Legal Technology', description: 'Understand legal tech tools and platforms.' },
          { id: 'lt-s1-2', name: 'Document Analysis', description: 'Analyze and organize legal documents.' },
          { id: 'lt-s1-3', name: 'Legal Research', description: 'Use digital research tools effectively.' },
        ],
      },
      {
        id: 'lt-s2',
        title: 'Advanced Legal Tech',
        skills: [
          { id: 'lt-s2-1', name: 'Document Automation', description: 'Automate legal document generation.' },
          { id: 'lt-s2-2', name: 'Legal Operations', description: 'Optimize legal department operations.' },
          { id: 'lt-s2-3', name: 'Data Privacy', description: 'Understand data protection regulations.' },
        ],
      },
      {
        id: 'lt-s3',
        title: 'Practical Experience',
        skills: [
          { id: 'lt-s3-1', name: 'Legal Document Analysis Challenge', description: 'Analyze and organize legal documents.' },
          { id: 'lt-s3-2', name: 'Legal Tech Project', description: 'Design a legal tech solution.' },
        ],
      },
      {
        id: 'lt-s4',
        title: 'Career Ready',
        skills: [
          { id: 'lt-s4-1', name: 'CV', description: 'Build a legal tech CV.' },
          { id: 'lt-s4-2', name: 'LinkedIn', description: 'Optimize your LinkedIn for legal tech roles.' },
          { id: 'lt-s4-3', name: 'Interview Prep', description: 'Practice legal tech interview questions.' },
        ],
      },
    ],
  },
];

export const getCareerById = (id: string): Career | undefined => careers.find((c) => c.id === id);
export const getCareersByFaculty = (faculty: Faculty): Career[] => careers.filter((c) => c.faculty === faculty);
