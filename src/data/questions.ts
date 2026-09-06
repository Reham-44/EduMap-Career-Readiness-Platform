import type { AssessmentQuestion, Faculty } from '@/types';

export const commerceQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    text: 'What type of work would you enjoy most?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Analyzing financial information', weights: { accounting: 3, finance: 3, 'business-analyst': 2 } },
      { label: 'B', text: 'Creating marketing campaigns', weights: { marketing: 3, 'business-analytics': 1 } },
      { label: 'C', text: 'Working with employees', weights: { hr: 3, 'hr-labor-law': 2 } },
      { label: 'D', text: 'Analyzing business data', weights: { 'business-analytics': 3, 'business-analyst': 3 } },
    ],
  },
  {
    id: 2,
    text: 'Which task sounds most interesting to you?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Preparing financial statements', weights: { accounting: 3, finance: 2 } },
      { label: 'B', text: 'Creating a social media strategy', weights: { marketing: 3 } },
      { label: 'C', text: 'Recruiting candidates', weights: { hr: 3 } },
      { label: 'D', text: 'Building a business dashboard', weights: { 'business-analytics': 3, 'business-analyst': 2 } },
    ],
  },
  {
    id: 3,
    text: 'How comfortable are you with numbers and quantitative work?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Very comfortable — I love working with data', weights: { accounting: 2, finance: 3, 'business-analytics': 3, 'business-analyst': 2, 'banking-fintech': 2 } },
      { label: 'B', text: 'Somewhat comfortable', weights: { 'business-analyst': 2, 'supply-chain': 2, 'banking-fintech': 1 } },
      { label: 'C', text: 'I prefer working with people over numbers', weights: { hr: 3, marketing: 2 } },
      { label: 'D', text: 'I struggle with numbers', weights: { marketing: 2, hr: 2 } },
    ],
  },
  {
    id: 4,
    text: 'How interested are you in technology and data tools?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Very interested — I want to work with data tools', weights: { 'business-analytics': 3, 'business-analyst': 2, 'banking-fintech': 2 } },
      { label: 'B', text: 'Somewhat interested', weights: { 'business-analyst': 2, 'supply-chain': 2, finance: 1 } },
      { label: 'C', text: 'Neutral', weights: { accounting: 1, hr: 1, marketing: 1 } },
      { label: 'D', text: 'Not very interested', weights: { hr: 2, marketing: 2 } },
    ],
  },
  {
    id: 5,
    text: 'How comfortable are you presenting ideas to others?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Very comfortable — I enjoy presenting', weights: { marketing: 3, 'business-analyst': 2, hr: 2, 'banking-fintech': 1 } },
      { label: 'B', text: 'Somewhat comfortable', weights: { 'business-analyst': 2, finance: 1, 'supply-chain': 1 } },
      { label: 'C', text: 'I prefer written communication', weights: { accounting: 2, 'business-analytics': 2, finance: 1 } },
      { label: 'D', text: 'I prefer working behind the scenes', weights: { accounting: 2, 'business-analytics': 2, 'supply-chain': 2 } },
    ],
  },
  {
    id: 6,
    text: 'Which work environment appeals to you most?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'A corporate finance department', weights: { accounting: 2, finance: 3, 'banking-fintech': 2 } },
      { label: 'B', text: 'A creative marketing agency', weights: { marketing: 3 } },
      { label: 'C', text: 'An HR department helping people', weights: { hr: 3 } },
      { label: 'D', text: 'A data-driven tech company', weights: { 'business-analytics': 3, 'business-analyst': 2, 'banking-fintech': 1 } },
    ],
  },
  {
    id: 7,
    text: 'What is more important to you in a career?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Accuracy and attention to detail', weights: { accounting: 3, finance: 2, 'supply-chain': 1 } },
      { label: 'B', text: 'Creativity and innovation', weights: { marketing: 3, 'banking-fintech': 1 } },
      { label: 'C', text: 'Helping and developing people', weights: { hr: 3 } },
      { label: 'D', text: 'Solving complex problems with data', weights: { 'business-analytics': 3, 'business-analyst': 3 } },
    ],
  },
  {
    id: 8,
    text: 'How do you feel about working with spreadsheets and data analysis?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'I enjoy it and want to do more', weights: { accounting: 2, finance: 2, 'business-analytics': 3, 'business-analyst': 2, 'supply-chain': 1 } },
      { label: 'B', text: 'I can do it when needed', weights: { 'business-analyst': 2, 'banking-fintech': 1, hr: 1 } },
      { label: 'C', text: 'I prefer other types of work', weights: { marketing: 2, hr: 2 } },
      { label: 'D', text: 'I avoid it when possible', weights: { marketing: 2, hr: 2 } },
    ],
  },
  {
    id: 9,
    text: 'Which would you rather do?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Manage a company budget', weights: { finance: 3, accounting: 2, 'banking-fintech': 2 } },
      { label: 'B', text: 'Launch a new product campaign', weights: { marketing: 3 } },
      { label: 'C', text: 'Resolve a workplace conflict', weights: { hr: 3 } },
      { label: 'D', text: 'Optimize a business process', weights: { 'business-analyst': 3, 'supply-chain': 2, 'business-analytics': 2 } },
    ],
  },
  {
    id: 10,
    text: 'How interested are you in the banking and financial technology sector?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Very interested', weights: { 'banking-fintech': 3, finance: 2 } },
      { label: 'B', text: 'Somewhat interested', weights: { finance: 2, accounting: 1, 'business-analyst': 1 } },
      { label: 'C', text: 'Neutral', weights: { 'business-analyst': 1, 'supply-chain': 1 } },
      { label: 'D', text: 'Not interested', weights: { marketing: 2, hr: 2 } },
    ],
  },
  {
    id: 11,
    text: 'How do you feel about managing logistics and physical operations?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'It sounds exciting', weights: { 'supply-chain': 3 } },
      { label: 'B', text: 'It could be interesting', weights: { 'supply-chain': 2, 'business-analyst': 1 } },
      { label: 'C', text: 'Neutral', weights: { accounting: 1, finance: 1 } },
      { label: 'D', text: 'Not my area of interest', weights: { marketing: 2, hr: 2, 'business-analytics': 1 } },
    ],
  },
  {
    id: 12,
    text: 'Which skill would you most want to develop?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Financial modeling and valuation', weights: { finance: 3, 'banking-fintech': 2, accounting: 1 } },
      { label: 'B', text: 'Digital marketing and analytics', weights: { marketing: 3 } },
      { label: 'C', text: 'Employee development and coaching', weights: { hr: 3 } },
      { label: 'D', text: 'Data visualization and SQL', weights: { 'business-analytics': 3, 'business-analyst': 2 } },
    ],
  },
  {
    id: 13,
    text: 'How do you approach a new problem?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'I break it down into detailed steps', weights: { accounting: 2, 'business-analyst': 3, 'supply-chain': 2 } },
      { label: 'B', text: 'I brainstorm creative solutions', weights: { marketing: 3, 'banking-fintech': 1 } },
      { label: 'C', text: 'I consult others and collaborate', weights: { hr: 3 } },
      { label: 'D', text: 'I analyze the data first', weights: { 'business-analytics': 3, finance: 2 } },
    ],
  },
  {
    id: 14,
    text: 'What kind of impact do you want to make?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Ensure financial accuracy and compliance', weights: { accounting: 3, finance: 1, 'banking-fintech': 1 } },
      { label: 'B', text: 'Grow a brand and reach customers', weights: { marketing: 3 } },
      { label: 'C', text: 'Build a positive workplace culture', weights: { hr: 3 } },
      { label: 'D', text: 'Drive data-informed decisions', weights: { 'business-analytics': 3, 'business-analyst': 2 } },
    ],
  },
  {
    id: 15,
    text: 'How interested are you in understanding how a whole business operates?',
    faculty: 'Commerce',
    options: [
      { label: 'A', text: 'Very interested — I want the big picture', weights: { 'business-analyst': 3, 'supply-chain': 2, 'banking-fintech': 1 } },
      { label: 'B', text: 'I prefer to specialize in one area', weights: { accounting: 2, finance: 2, marketing: 2, hr: 2 } },
      { label: 'C', text: 'I want to focus on people', weights: { hr: 3 } },
      { label: 'D', text: 'I want to focus on data and analysis', weights: { 'business-analytics': 3 } },
    ],
  },
];

export const lawQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    text: 'What type of legal work interests you most?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Court and litigation', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'Corporate contracts', weights: { 'corporate-legal': 3 } },
      { label: 'C', text: 'Compliance and regulations', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'Legal research', weights: { 'legal-research': 3, 'legal-tech': 1 } },
    ],
  },
  {
    id: 2,
    text: 'Which activity sounds most interesting to you?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Analyzing a case', weights: { 'legal-practice': 3, 'legal-research': 2 } },
      { label: 'B', text: 'Reviewing a contract', weights: { 'corporate-legal': 3 } },
      { label: 'C', text: 'Identifying regulatory risks', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'Researching legal precedents', weights: { 'legal-research': 3, 'legal-practice': 1 } },
    ],
  },
  {
    id: 3,
    text: 'How interested are you in the business side of law?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very interested — I want to work with companies', weights: { 'corporate-legal': 3, 'compliance-risk': 2 } },
      { label: 'B', text: 'Somewhat interested', weights: { 'hr-labor-law': 2, 'legal-tech': 2 } },
      { label: 'C', text: 'Neutral', weights: { 'legal-research': 2, 'legal-practice': 1 } },
      { label: 'D', text: 'I prefer pure legal practice', weights: { 'legal-practice': 3 } },
    ],
  },
  {
    id: 4,
    text: 'How comfortable are you with detailed document analysis?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very comfortable — I enjoy detailed work', weights: { 'corporate-legal': 3, 'compliance-risk': 2, 'legal-research': 2 } },
      { label: 'B', text: 'Somewhat comfortable', weights: { 'legal-practice': 2, 'hr-labor-law': 2 } },
      { label: 'C', text: 'I prefer broader analysis', weights: { 'legal-practice': 2, 'legal-tech': 2 } },
      { label: 'D', text: 'I prefer working with people', weights: { 'hr-labor-law': 3 } },
    ],
  },
  {
    id: 5,
    text: 'How interested are you in technology and legal tech tools?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very interested — I want to work with legal tech', weights: { 'legal-tech': 3 } },
      { label: 'B', text: 'Somewhat interested', weights: { 'corporate-legal': 1, 'legal-research': 1 } },
      { label: 'C', text: 'Neutral', weights: { 'compliance-risk': 1, 'legal-practice': 1 } },
      { label: 'D', text: 'I prefer traditional legal work', weights: { 'legal-practice': 2, 'legal-research': 2 } },
    ],
  },
  {
    id: 6,
    text: 'Which work environment appeals to you most?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'A law firm handling court cases', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'A corporate legal department', weights: { 'corporate-legal': 3, 'compliance-risk': 1 } },
      { label: 'C', text: 'A compliance and risk team', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'A legal tech startup', weights: { 'legal-tech': 3 } },
    ],
  },
  {
    id: 7,
    text: 'What is more important to you in a legal career?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Advocating for clients in court', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'Protecting companies from legal risks', weights: { 'corporate-legal': 2, 'compliance-risk': 3 } },
      { label: 'C', text: 'Producing thorough legal research', weights: { 'legal-research': 3 } },
      { label: 'D', text: 'Innovating with legal technology', weights: { 'legal-tech': 3 } },
    ],
  },
  {
    id: 8,
    text: 'How do you feel about employee rights and workplace law?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very interested — I want to protect workers', weights: { 'hr-labor-law': 3 } },
      { label: 'B', text: 'Somewhat interested', weights: { 'corporate-legal': 1, 'compliance-risk': 1 } },
      { label: 'C', text: 'Neutral', weights: { 'legal-research': 1, 'legal-tech': 1 } },
      { label: 'D', text: 'I prefer other areas of law', weights: { 'legal-practice': 2, 'corporate-legal': 2 } },
    ],
  },
  {
    id: 9,
    text: 'Which would you rather do?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Prepare a case for court', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'Negotiate a corporate deal', weights: { 'corporate-legal': 3 } },
      { label: 'C', text: 'Conduct a compliance audit', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'Build a legal research database', weights: { 'legal-tech': 3, 'legal-research': 2 } },
    ],
  },
  {
    id: 10,
    text: 'How comfortable are you with public speaking and advocacy?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very comfortable — I enjoy advocacy', weights: { 'legal-practice': 3, 'corporate-legal': 1 } },
      { label: 'B', text: 'Somewhat comfortable', weights: { 'corporate-legal': 2, 'hr-labor-law': 2 } },
      { label: 'C', text: 'I prefer written work', weights: { 'legal-research': 3, 'compliance-risk': 2 } },
      { label: 'D', text: 'I prefer research and analysis', weights: { 'legal-research': 3, 'legal-tech': 2 } },
    ],
  },
  {
    id: 11,
    text: 'How interested are you in regulatory frameworks and governance?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Very interested', weights: { 'compliance-risk': 3 } },
      { label: 'B', text: 'Somewhat interested', weights: { 'corporate-legal': 2, 'legal-research': 1 } },
      { label: 'C', text: 'Neutral', weights: { 'legal-practice': 1, 'hr-labor-law': 1 } },
      { label: 'D', text: 'Not very interested', weights: { 'legal-practice': 2, 'legal-tech': 2 } },
    ],
  },
  {
    id: 12,
    text: 'Which skill would you most want to develop?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Courtroom advocacy and litigation', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'Contract drafting and negotiation', weights: { 'corporate-legal': 3 } },
      { label: 'C', text: 'Risk assessment and compliance', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'Legal document automation', weights: { 'legal-tech': 3, 'legal-research': 1 } },
    ],
  },
  {
    id: 13,
    text: 'How do you approach a new legal problem?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'I analyze precedents and build arguments', weights: { 'legal-practice': 2, 'legal-research': 3 } },
      { label: 'B', text: 'I look at the business implications', weights: { 'corporate-legal': 3, 'compliance-risk': 2 } },
      { label: 'C', text: 'I check regulations and compliance', weights: { 'compliance-risk': 3 } },
      { label: 'D', text: 'I look for tech solutions', weights: { 'legal-tech': 3 } },
    ],
  },
  {
    id: 14,
    text: 'What kind of impact do you want to make?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'Win cases and defend clients', weights: { 'legal-practice': 3 } },
      { label: 'B', text: 'Protect companies from legal risk', weights: { 'corporate-legal': 2, 'compliance-risk': 3 } },
      { label: 'C', text: 'Protect employee rights', weights: { 'hr-labor-law': 3 } },
      { label: 'D', text: 'Modernize legal processes with tech', weights: { 'legal-tech': 3 } },
    ],
  },
  {
    id: 15,
    text: 'How interested are you in working with people vs documents?',
    faculty: 'Law',
    options: [
      { label: 'A', text: 'I prefer working directly with people', weights: { 'legal-practice': 2, 'hr-labor-law': 3 } },
      { label: 'B', text: 'I enjoy a mix of both', weights: { 'corporate-legal': 2, 'compliance-risk': 2 } },
      { label: 'C', text: 'I prefer deep document analysis', weights: { 'legal-research': 3, 'corporate-legal': 2 } },
      { label: 'D', text: 'I prefer working with systems and tech', weights: { 'legal-tech': 3 } },
    ],
  },
];

export const getQuestions = (faculty: Faculty): AssessmentQuestion[] =>
  faculty === 'Law' ? lawQuestions : commerceQuestions;
