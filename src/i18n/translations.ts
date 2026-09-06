export type Language = 'ar' | 'en';

export interface Translations {
  // Nav
  nav: {
    home: string;
    howItWorks: string;
    careerPaths: string;
    challenges: string;
    mentorship: string;
    opportunities: string;
    login: string;
    getStarted: string;
  };
  // Sidebar
  sidebar: {
    dashboard: string;
    careerMap: string;
    skillGaps: string;
    roadmap: string;
    challenges: string;
    mentorship: string;
    portfolio: string;
    opportunities: string;
    profile: string;
    candidates: string;
    student: string;
    company: string;
    companyAccount: string;
    logout: string;
  };
  // Common
  common: {
    back: string;
    next: string;
    previous: string;
    submit: string;
    cancel: string;
    save: string;
    edit: string;
    view: string;
    viewAll: string;
    continue: string;
    loading: string;
    redirecting: string;
    confirm: string;
    completed: string;
    inProgress: string;
    locked: string;
    notSet: string;
    markComplete: string;
    startLearning: string;
    undo: string;
    viewProject: string;
    viewDetails: string;
    lightMode: string;
    darkMode: string;
    switchLanguage: string;
    close: string;
    toggleMenu: string;
  };
  // Home
  home: {
    badge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    startJourney: string;
    explorePaths: string;
    journeyTitle: string;
    assessment: string;
    skillGap: string;
    roadmap: string;
    realChallenge: string;
    careerOpportunity: string;
    problemTitle: string;
    problemSubtitle: string;
    problems: string[];
    problemSolution: string;
    solutionTitle: string;
    solutionSubtitle: string;
    solutionSteps: { title: string; desc: string }[];
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    howItWorksSteps: { title: string; desc: string }[];
    targetUsersTitle: string;
    targetUsersSubtitle: string;
    commerceStudents: string;
    commerceDesc: string;
    lawStudents: string;
    lawDesc: string;
    commercePaths: string[];
    lawPaths: string[];
    statsLabel: string;
    statsSubtitle: string;
    stats: { value: string; label: string }[];
    usp: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaButton: string;
    footerTagline: string;
    footerAbout: string;
    footerHowItWorks: string;
    footerCareerPaths: string;
    footerChallenges: string;
    footerMentorship: string;
    footerContact: string;
    footerCompanyTitle: string;
    footerCompanyDesc: string;
    footerCompanyLink: string;
    footerCopyright: string;
    quickLinks: string;
  };
  // Auth
  auth: {
    welcomeBack: string;
    loginSubtitle: string;
    email: string;
    password: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    login: string;
    noAccount: string;
    signUp: string;
    companyLogin: string;
    companyPortal: string;
    companyPortalDesc: string;
    companyName: string;
    companyNamePlaceholder: string;
    enterCompanyPortal: string;
    areYouCompany: string;
    areYouStudent: string;
    studentLogin: string;
    createAccount: string;
    signupSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    university: string;
    faculty: string;
    section: string;
    graduationYear: string;
    graduationYearPlaceholder: string;
    academicStatus: string;
    careerExperience: string;
    selectUniversity: string;
    selectFaculty: string;
    selectSection: string;
    selectStatus: string;
    selectExperience: string;
    alreadyHaveAccount: string;
    passwordMinLength: string;
    fillAllFields: string;
    incorrectPassword: string;
    noAccountFound: string;
    companyAccountError: string;
    emailExists: string;
  };
  // Universities
  universities: string[];
  // Faculties
  faculties: string[];
  // Sections
  sections: string[];
  // Academic statuses
  academicStatuses: string[];
  // Career experiences
  careerExperiences: string[];
  // Onboarding
  onboarding: {
    title: string;
    goalQuestion: string;
    goals: { label: string }[];
    confidenceQuestion: string;
    confidenceLevels: { label: string; desc: string }[];
    startAssessment: string;
    selectGoal: string;
    selectConfidence: string;
    onboardingComplete: string;
  };
  // Assessment
  assessment: {
    title: string;
    questionOf: string;
    pleaseSelect: string;
    assessmentComplete: string;
    generating: string;
  };
  // Assessment Result
  assessmentResult: {
    title: string;
    subtitle: string;
    topMatch: string;
    matchScore: string;
    whyThisPath: string;
    yourStrengths: string;
    skillsToImprove: string;
    viewSkillGap: string;
    viewRoadmap: string;
    noResult: string;
    noResultDesc: string;
    takeAssessment: string;
  };
  // Skill Gap
  skillGap: {
    title: string;
    subtitle: string;
    requiredLevel: string;
    yourLevel: string;
    gap: string;
    gapMessage: string;
    meetLevel: string;
    biggestGaps: string;
    buildRoadmap: string;
    noMatch: string;
    noMatchDesc: string;
    levels: { strong: string; good: string; needsImprovement: string; criticalGap: string };
  };
  // Roadmap
  roadmap: {
    title: string;
    subtitle: string;
    overallProgress: string;
    completed: string;
    inProgress: string;
    remaining: string;
    stage: string;
    noCareer: string;
    noCareerDesc: string;
    exploreChallenges: string;
  };
  // Dashboard
  dashboard: {
    goodMorning: string;
    goodAfternoon: string;
    goodEvening: string;
    overview: string;
    roadmapProgress: string;
    skillMatch: string;
    challengesCompleted: string;
    careerGoal: string;
    continueLearning: string;
    nextSkill: string;
    upcomingMentorship: string;
    noSessions: string;
    bookSession: string;
    viewSessions: string;
    recommendedChallenge: string;
    activeChallenges: string;
    completeAssessment: string;
    completeAssessmentDesc: string;
    takeAssessment: string;
  };
  // Challenges
  challenges: {
    title: string;
    subtitle: string;
    allChallenges: string;
    facultyOnly: string;
    joined: string;
    noChallenges: string;
    noChallengesDesc: string;
    company: string;
    difficulty: string;
    estimatedTime: string;
    participants: string;
    description: string;
    businessContext: string;
    theProblem: string;
    requirements: string;
    deliverables: string;
    skillsRequired: string;
    joinChallenge: string;
    submitSolution: string;
    solutionPlaceholder: string;
    uploadPlaceholder: string;
    submitChallenge: string;
    submitted: string;
    overallScore: string;
    viewEvaluation: string;
    addToPortfolio: string;
    challengeAdded: string;
    pleaseDescribe: string;
    submittedMsg: string;
    notFound: string;
    backToChallenges: string;
    readyToJoin: string;
    readyToJoinDesc: string;
  };
  // Evaluation
  evaluation: {
    title: string;
    overallPerformance: string;
    problemSolving: string;
    technicalSkills: string;
    communication: string;
    businessUnderstanding: string;
    feedback: string;
    skillsDemonstrated: string;
    addedToPortfolio: string;
    alreadyInPortfolio: string;
  };
  // Mentorship
  mentorship: {
    title: string;
    subtitle: string;
    bookedSessions: string;
    availableMentors: string;
    noMentors: string;
    noMentorsDesc: string;
    company: string;
    experience: string;
    track: string;
    rating: string;
    bookSession: string;
    sessionBooked: string;
    alreadyBooked: string;
    bookTitle: string;
    chooseDate: string;
    chooseTime: string;
    confirmBooking: string;
    selectDateTime: string;
    sessionBookedSuccess: string;
    signUpToBook: string;
  };
  // Opportunities
  opportunities: {
    title: string;
    subtitle: string;
    filters: string;
    type: string;
    location: string;
    minMatch: string;
    all: string;
    internship: string;
    entryLevel: string;
    noOpps: string;
    noOppsDesc: string;
    saved: string;
    removed: string;
    signUpToMatch: string;
    matchLabel: string;
  };
  // Portfolio
  portfolio: {
    title: string;
    subtitle: string;
    noProjects: string;
    noProjectsDesc: string;
    browseChallenges: string;
    projectsInPortfolio: string;
    averageScore: string;
    takeMore: string;
    role: string;
    status: string;
  };
  // Profile
  profile: {
    title: string;
    subtitle: string;
    editProfile: string;
    personalInfo: string;
    yourSkills: string;
    careerPath: string;
    overallProgress: string;
    fullName: string;
    email: string;
    university: string;
    faculty: string;
    section: string;
    graduationYear: string;
    careerGoal: string;
    selectGoal: string;
    updated: string;
  };
  // Career Map
  careerMap: {
    title: string;
    subtitle: string;
    topMatch: string;
    yourJourney: string;
    allMatches: string;
    yourStrengths: string;
    noMap: string;
    noMapDesc: string;
    takeAssessment: string;
    journeySteps: { label: string; statusKey: string }[];
  };
  // Company
  company: {
    dashboard: string;
    dashboardSubtitle: string;
    activeChallenges: string;
    totalParticipants: string;
    completedChallenges: string;
    topCandidates: string;
    topStudents: string;
    viewCandidate: string;
    candidates: string;
    candidatesSubtitle: string;
    allCandidates: string;
    candidate: string;
    university: string;
    career: string;
    challenges: string;
    score: string;
    skills: string;
    mentorFeedback: string;
    completedChallengesList: string;
    inviteToInternship: string;
    invitationSent: string;
    backToDashboard: string;
    excellent: string;
    good: string;
  };
  // Toast messages
  toasts: {
    welcomeBack: string;
    accountCreated: string;
    onboardingComplete: string;
    assessmentComplete: string;
    challengeAdded: string;
    challengeSubmitted: string;
    pleaseDescribe: string;
    projectAdded: string;
    alreadyInPortfolio: string;
    sessionBooked: string;
    selectDateTime: string;
    oppSaved: string;
    oppRemoved: string;
    profileUpdated: string;
    invitationSent: string;
    pleaseSelectGoal: string;
    pleaseSelectConfidence: string;
    fillAllFields: string;
    passwordMinLength: string;
    emailExists: string;
    loginFailed: string;
  };
  // Career titles (for portfolio roles etc.)
  careerTitles: Record<string, string>;
  // Difficulty levels
  difficulty: { beginner: string; intermediate: string; advanced: string };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      careerPaths: 'Career Paths',
      challenges: 'Challenges',
      mentorship: 'Mentorship',
      opportunities: 'Opportunities',
      login: 'Login',
      getStarted: 'Get Started',
    },
    sidebar: {
      dashboard: 'Dashboard',
      careerMap: 'My Career Map',
      skillGaps: 'Skill Gaps',
      roadmap: 'Roadmap',
      challenges: 'Challenges',
      mentorship: 'Mentorship',
      portfolio: 'Portfolio',
      opportunities: 'Opportunities',
      profile: 'Profile',
      candidates: 'Candidates',
      student: 'Student',
      company: 'Company',
      companyAccount: 'Company Account',
      logout: 'Logout',
    },
    common: {
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      view: 'View',
      viewAll: 'View All',
      continue: 'Continue',
      loading: 'Loading...',
      redirecting: 'Redirecting...',
      confirm: 'Confirm',
      completed: 'Completed',
      inProgress: 'In Progress',
      locked: 'Locked',
      notSet: 'Not set',
      markComplete: 'Mark as Complete',
      startLearning: 'Start Learning',
      undo: 'Undo',
      viewProject: 'View Project',
      viewDetails: 'View Details',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      switchLanguage: 'Switch language',
      close: 'Close',
      toggleMenu: 'Toggle menu',
    },
    home: {
      badge: 'Career-readiness for Egyptian students',
      heroTitle: 'From University to Career —',
      heroTitleHighlight: 'With a Map.',
      heroSubtitle: 'Discover the career path that fits you, identify the skills you are missing, gain practical experience, and connect with real opportunities.',
      startJourney: 'Start Your Journey',
      explorePaths: 'Explore Career Paths',
      journeyTitle: 'The EduMap Journey',
      assessment: 'Assessment',
      skillGap: 'Skill Gap',
      roadmap: 'Roadmap',
      realChallenge: 'Real Challenge',
      careerOpportunity: 'Career Opportunity',
      problemTitle: "Graduation Shouldn't Be the Start of the Guessing Game.",
      problemSubtitle: 'These are the struggles we hear from students every day.',
      problems: [
        "I don't know which career fits me.",
        "I don't know what skills companies expect.",
        'I have a degree but no practical experience.',
        "My CV doesn't prove what I can actually do.",
        'I apply to jobs but rarely get interviews.',
      ],
      problemSolution: 'EduMap solves all of these.',
      solutionTitle: 'EduMap Turns Uncertainty Into a Career Plan.',
      solutionSubtitle: 'Five steps from lost to job-ready.',
      solutionSteps: [
        { title: 'Discover', desc: 'Take a career assessment to find paths that match your interests and strengths.' },
        { title: 'Analyze', desc: 'See exactly which skills you have and which ones you need to develop.' },
        { title: 'Learn', desc: 'Follow a personalized roadmap with structured learning at every stage.' },
        { title: 'Prove', desc: 'Solve real business challenges from companies and get evaluated on your performance.' },
        { title: 'Connect', desc: 'Unlock internships and jobs matched to your proven skills and performance.' },
      ],
      howItWorksTitle: 'How It Works',
      howItWorksSubtitle: 'A clear path from where you are to where you want to be.',
      howItWorksSteps: [
        { title: 'Take the Assessment', desc: 'Answer 15 questions about your interests, skills, and work preferences.' },
        { title: 'Get Your Career Matches', desc: 'See which career tracks fit you best with match scores and reasoning.' },
        { title: 'See Your Skill Gaps', desc: 'Compare your current skill levels to what employers expect.' },
        { title: 'Follow Your Personalized Roadmap', desc: 'Track your progress through structured learning stages.' },
        { title: 'Solve Real Challenges', desc: 'Tackle real-world business problems from Egyptian companies.' },
        { title: 'Unlock Opportunities', desc: 'Get matched with internships and jobs based on your proven performance.' },
      ],
      targetUsersTitle: 'Who Is EduMap For?',
      targetUsersSubtitle: 'Built for Commerce and Law students in Egyptian universities.',
      commerceStudents: 'Commerce Students',
      commerceDesc: 'From accounting to FinTech, discover the business career that fits you.',
      lawStudents: 'Law Students',
      lawDesc: 'From litigation to legal tech, find your place in the legal world.',
      commercePaths: ['Accounting', 'Finance', 'Marketing', 'HR', 'Business Analytics', 'Business Analysis', 'Supply Chain', 'Banking / FinTech'],
      lawPaths: ['Legal Practice', 'Corporate Legal', 'Compliance & Risk', 'Legal Research', 'HR & Labor Law', 'Legal Tech'],
      statsLabel: 'Prototype Metrics',
      statsSubtitle: 'Mock statistics for demonstration purposes',
      stats: [
        { value: '10K+', label: 'Students' },
        { value: '100+', label: 'Companies' },
        { value: '500+', label: 'Challenges' },
        { value: '80%+', label: 'Skill Completion Rate' },
      ],
      usp: "EduMap doesn't just tell students what to learn. It shows them why, helps them practice, measures their performance, and connects them to opportunities.",
      ctaTitle1: 'Your Degree Is the Starting Point.',
      ctaTitle2: 'Your Career Is the Destination.',
      ctaButton: 'Build My Career Map',
      footerTagline: 'Career readiness for the next generation.',
      footerAbout: 'About',
      footerHowItWorks: 'How It Works',
      footerCareerPaths: 'Career Paths',
      footerChallenges: 'Challenges',
      footerMentorship: 'Mentorship',
      footerContact: 'Contact',
      footerCompanyTitle: 'For Companies',
      footerCompanyDesc: 'Are you a company looking to discover talent?',
      footerCompanyLink: 'Company Portal',
      footerCopyright: '© 2026 EduMap. Built for Egyptian university students.',
      quickLinks: 'Quick Links',
    },
    auth: {
      welcomeBack: 'Welcome Back',
      loginSubtitle: 'Log in to continue your career journey.',
      email: 'Email',
      password: 'Password',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'Enter your password',
      login: 'Log In',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
      companyLogin: 'Are you a company? Login here',
      companyPortal: 'Company Portal',
      companyPortalDesc: 'Enter your company name to access the company dashboard. Discover top-performing students and invite them to internships.',
      companyName: 'Company Name',
      companyNamePlaceholder: 'e.g. TechCorp Egypt',
      enterCompanyPortal: 'Enter Company Portal',
      areYouCompany: 'Are you a company? Login here',
      areYouStudent: 'Are you a student?',
      studentLogin: 'Student Login',
      createAccount: 'Create Your Account',
      signupSubtitle: 'Start your career-readiness journey today.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Ahmed Mohamed',
      university: 'University',
      faculty: 'Faculty',
      section: 'Academic Section',
      graduationYear: 'Graduation Year',
      graduationYearPlaceholder: '2026',
      academicStatus: 'Academic Status',
      careerExperience: 'Career Experience',
      selectUniversity: 'Select university',
      selectFaculty: 'Select faculty',
      selectSection: 'Select section',
      selectStatus: 'Select status',
      selectExperience: 'Select experience',
      alreadyHaveAccount: 'Already have an account? Login',
      passwordMinLength: 'Password must be at least 6 characters.',
      fillAllFields: 'Please fill in all fields.',
      incorrectPassword: 'Incorrect password.',
      noAccountFound: 'No account found with this email.',
      companyAccountError: 'This is a company account. Please use the company login.',
      emailExists: 'An account with this email already exists.',
    },
    universities: ['Cairo University', 'Ain Shams University', 'Helwan University'],
    faculties: ['Commerce', 'Law'],
    sections: ['Arabic', 'English'],
    academicStatuses: ['Fourth Year', 'Fresh Graduate'],
    careerExperiences: ['No experience', 'Internship experience', 'Part-time experience', 'Full-time experience'],
    onboarding: {
      title: "Let's Build Your Career Map.",
      goalQuestion: 'What is your main goal?',
      goals: [
        { label: 'I want an Internship' },
        { label: 'I want my first Job' },
        { label: 'I want to discover my career path' },
        { label: 'I want to improve my CV' },
        { label: 'I want practical experience' },
      ],
      confidenceQuestion: 'How confident are you about your career choice?',
      confidenceLevels: [
        { label: 'I know exactly what I want', desc: 'I have a clear career direction' },
        { label: 'I have some ideas', desc: 'I have a few directions in mind' },
        { label: 'I have no idea yet', desc: 'I need help discovering my path' },
      ],
      startAssessment: 'Start Assessment',
      selectGoal: 'Please select your main goal.',
      selectConfidence: 'Please select your confidence level.',
      onboardingComplete: 'Onboarding complete!',
    },
    assessment: {
      title: 'Career Assessment',
      questionOf: 'Question',
      pleaseSelect: 'Please select an answer to continue.',
      assessmentComplete: 'Assessment complete! Generating your career map...',
      generating: 'Generating your career map...',
    },
    assessmentResult: {
      title: 'Your Career Map Is Ready.',
      subtitle: 'Based on your assessment, here are your best career matches.',
      topMatch: 'Top Career Match',
      matchScore: 'Match Score',
      whyThisPath: 'Why This Path?',
      yourStrengths: 'Your Strengths',
      skillsToImprove: 'Skills to Improve',
      viewSkillGap: 'View My Skill Gap',
      viewRoadmap: 'View My Roadmap',
      noResult: 'No assessment result found',
      noResultDesc: 'Please take the career assessment first.',
      takeAssessment: 'Take Assessment',
    },
    skillGap: {
      title: 'Skill Gap Analysis',
      subtitle: 'Compare your current skill levels to what employers expect for',
      requiredLevel: 'Required Level',
      yourLevel: 'Your Level',
      gap: 'Gap',
      gapMessage: 'Gap of',
      meetLevel: 'You meet or exceed the required level.',
      biggestGaps: 'Your Biggest Gaps',
      buildRoadmap: 'Build My Personalized Roadmap',
      noMatch: 'No career match found',
      noMatchDesc: 'Take the assessment first to see your skill gap analysis.',
      levels: { strong: 'Strong', good: 'Good', needsImprovement: 'Needs Improvement', criticalGap: 'Critical Gap' },
    },
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Follow your personalized learning path to become job-ready.',
      overallProgress: 'Overall Progress',
      completed: 'Completed',
      inProgress: 'In Progress',
      remaining: 'Remaining',
      stage: 'Stage',
      noCareer: 'No career path selected',
      noCareerDesc: 'Take the assessment to get your personalized roadmap.',
      exploreChallenges: 'Explore Challenges',
    },
    dashboard: {
      goodMorning: 'Good Morning',
      goodAfternoon: 'Good Afternoon',
      goodEvening: 'Good Evening',
      overview: "Here's an overview of your career journey.",
      roadmapProgress: 'Roadmap Progress',
      skillMatch: 'Skill Match',
      challengesCompleted: 'Challenges Completed',
      careerGoal: 'Career Goal',
      continueLearning: 'Continue Learning',
      nextSkill: 'Next recommended skill:',
      upcomingMentorship: 'Upcoming Mentorship',
      noSessions: 'No mentorship sessions booked yet.',
      bookSession: 'Book a Session',
      viewSessions: 'View Sessions',
      recommendedChallenge: 'Recommended Challenge',
      activeChallenges: 'Your Active Challenges',
      completeAssessment: 'Complete your assessment',
      completeAssessmentDesc: 'Take the career assessment to get your personalized career map, skill gap analysis, and roadmap.',
      takeAssessment: 'Take Assessment',
    },
    challenges: {
      title: 'Real-World Challenges',
      subtitle: 'Solve real business and legal problems from Egyptian companies. Prove your skills.',
      allChallenges: 'All',
      facultyOnly: 'Only',
      joined: 'Joined',
      noChallenges: 'No challenges available',
      noChallengesDesc: 'No challenges match your selected filter. Try a different filter.',
      company: 'Company',
      difficulty: 'Difficulty',
      estimatedTime: 'Estimated Time',
      participants: 'participants',
      description: 'Description',
      businessContext: 'Business Context',
      theProblem: 'The Problem',
      requirements: 'Requirements',
      deliverables: 'Expected Deliverables',
      skillsRequired: 'Skills Required',
      joinChallenge: 'Join Challenge',
      submitSolution: 'Submit Your Solution',
      solutionPlaceholder: 'Describe your solution...',
      uploadPlaceholder: 'Upload your solution (mock placeholder)',
      submitChallenge: 'Submit Challenge',
      submitted: 'Submitted',
      overallScore: 'Overall Score',
      viewEvaluation: 'View Evaluation',
      addToPortfolio: 'Add Project to Portfolio',
      challengeAdded: 'Challenge added to your dashboard.',
      pleaseDescribe: 'Please describe your solution before submitting.',
      submittedMsg: 'Challenge submitted! Generating your evaluation...',
      notFound: 'Challenge not found',
      backToChallenges: 'Back to Challenges',
      readyToJoin: 'Ready to take on this challenge?',
      readyToJoinDesc: 'Join to access the full challenge and submit your solution.',
    },
    evaluation: {
      title: 'Challenge Evaluation',
      overallPerformance: 'Overall Performance',
      problemSolving: 'Problem Solving',
      technicalSkills: 'Technical Skills',
      communication: 'Communication',
      businessUnderstanding: 'Business Understanding',
      feedback: 'Feedback',
      skillsDemonstrated: 'Skills Demonstrated',
      addedToPortfolio: 'Project added to your portfolio!',
      alreadyInPortfolio: 'This project is already in your portfolio.',
    },
    mentorship: {
      title: 'Mentorship',
      subtitle: 'Book sessions with experienced professionals in your field.',
      bookedSessions: 'Your Booked Sessions',
      availableMentors: 'Available Mentors',
      noMentors: 'No mentors available',
      noMentorsDesc: 'No mentors match your career track at the moment.',
      company: 'Company',
      experience: 'Experience',
      track: 'Track',
      rating: 'rating',
      bookSession: 'Book Session',
      sessionBooked: 'Session Booked',
      alreadyBooked: 'Session Booked',
      bookTitle: 'Book a Mentorship Session',
      chooseDate: 'Choose Date',
      chooseTime: 'Choose Time',
      confirmBooking: 'Confirm Booking',
      selectDateTime: 'Please select a date and time.',
      sessionBookedSuccess: 'Session booked successfully!',
      signUpToBook: 'Sign up to book a session',
    },
    opportunities: {
      title: 'Opportunities',
      subtitle: 'Internships and entry-level jobs matched to your profile.',
      filters: 'Filters',
      type: 'Opportunity Type',
      location: 'Location',
      minMatch: 'Minimum Match',
      all: 'All',
      internship: 'Internship',
      entryLevel: 'Entry-level',
      noOpps: 'No opportunities found',
      noOppsDesc: 'Try adjusting your filters to see more opportunities.',
      saved: 'Opportunity saved!',
      removed: 'Opportunity removed from saved.',
      signUpToMatch: 'Sign up to see your matches',
      matchLabel: 'Match',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Your completed challenges showcased as real-world projects.',
      noProjects: 'No projects in your portfolio yet',
      noProjectsDesc: 'Complete challenges and add them to your portfolio to showcase your skills to employers.',
      browseChallenges: 'Browse Challenges',
      projectsInPortfolio: 'Project',
      averageScore: 'Average score',
      takeMore: 'Take on More Challenges',
      role: 'Role',
      status: 'Status',
    },
    profile: {
      title: 'Profile',
      subtitle: 'Manage your personal information and view your career stats.',
      editProfile: 'Edit Profile',
      personalInfo: 'Personal Information',
      yourSkills: 'Your Skills',
      careerPath: 'Career Path',
      overallProgress: 'Overall Progress',
      fullName: 'Full Name',
      email: 'Email',
      university: 'University',
      faculty: 'Faculty',
      section: 'Section',
      graduationYear: 'Graduation Year',
      careerGoal: 'Career Goal',
      selectGoal: 'Select goal',
      updated: 'Profile updated successfully!',
    },
    careerMap: {
      title: 'My Career Map',
      subtitle: 'Your personalized career journey from assessment to opportunity.',
      topMatch: 'Your Top Career Match',
      yourJourney: 'Your Career Journey',
      allMatches: 'All Career Matches',
      yourStrengths: 'Your Strengths',
      noMap: 'No career map yet',
      noMapDesc: 'Take the assessment to generate your career map.',
      takeAssessment: 'Take Assessment',
      journeySteps: [
        { label: 'Assessment', statusKey: 'Completed' },
        { label: 'Skill Gap Analysis', statusKey: 'Available' },
        { label: 'Personalized Roadmap', statusKey: 'Complete' },
        { label: 'Real Challenges', statusKey: 'Joined' },
        { label: 'Portfolio', statusKey: 'Projects' },
      ],
    },
    company: {
      dashboard: 'Dashboard',
      dashboardSubtitle: 'Discover top-performing students and manage your challenges.',
      activeChallenges: 'Active Challenges',
      totalParticipants: 'Total Participants',
      completedChallenges: 'Completed Challenges',
      topCandidates: 'Top Candidates',
      topStudents: 'Top Performing Students',
      viewCandidate: 'View Candidate',
      candidates: 'Candidates',
      candidatesSubtitle: 'Browse top-performing students who have completed challenges.',
      allCandidates: 'All Candidates',
      candidate: 'Candidate',
      university: 'University',
      career: 'Career Path',
      challenges: 'Challenges',
      score: 'Score',
      skills: 'Skills',
      mentorFeedback: 'Mentor Feedback',
      completedChallengesList: 'Completed Challenges',
      inviteToInternship: 'Invite to Internship',
      invitationSent: 'Internship invitation sent to',
      backToDashboard: 'Back to Dashboard',
      excellent: 'Excellent',
      good: 'Good',
    },
    toasts: {
      welcomeBack: 'Welcome back!',
      accountCreated: 'Account created successfully!',
      onboardingComplete: 'Onboarding complete!',
      assessmentComplete: 'Assessment complete! Generating your career map...',
      challengeAdded: 'Challenge added to your dashboard.',
      challengeSubmitted: 'Challenge submitted! Generating your evaluation...',
      pleaseDescribe: 'Please describe your solution before submitting.',
      projectAdded: 'Project added to your portfolio!',
      alreadyInPortfolio: 'This project is already in your portfolio.',
      sessionBooked: 'Session booked successfully!',
      selectDateTime: 'Please select a date and time.',
      oppSaved: 'Opportunity saved!',
      oppRemoved: 'Opportunity removed from saved.',
      profileUpdated: 'Profile updated successfully!',
      invitationSent: 'Internship invitation sent to',
      pleaseSelectGoal: 'Please select your main goal.',
      pleaseSelectConfidence: 'Please select your confidence level.',
      fillAllFields: 'Please fill in all fields.',
      passwordMinLength: 'Password must be at least 6 characters.',
      emailExists: 'An account with this email already exists.',
      loginFailed: 'Login failed.',
    },
    careerTitles: {
      accounting: 'Accountant',
      finance: 'Financial Analyst',
      marketing: 'Marketing Specialist',
      hr: 'HR Specialist',
      'business-analytics': 'Data Analyst',
      'business-analyst': 'Business Analyst',
      'supply-chain': 'Supply Chain Analyst',
      'banking-fintech': 'FinTech Analyst',
      'legal-practice': 'Legal Associate',
      'corporate-legal': 'Corporate Legal Counsel',
      'compliance-risk': 'Compliance Officer',
      'legal-research': 'Legal Researcher',
      'hr-labor-law': 'Labor Law Consultant',
      'legal-tech': 'Legal Tech Specialist',
    },
    difficulty: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      howItWorks: 'كيف يعمل',
      careerPaths: 'المسارات المهنية',
      challenges: 'التحديات العملية',
      mentorship: 'الإرشاد المهني',
      opportunities: 'الفرص',
      login: 'تسجيل الدخول',
      getStarted: 'ابدأ الآن',
    },
    sidebar: {
      dashboard: 'لوحة التحكم',
      careerMap: 'الخريطة المهنية',
      skillGaps: 'فجوة المهارات',
      roadmap: 'المسار التعليمي',
      challenges: 'التحديات العملية',
      mentorship: 'الإرشاد المهني',
      portfolio: 'ملف الأعمال',
      opportunities: 'الفرص',
      profile: 'الملف الشخصي',
      candidates: 'المرشحون',
      student: 'طالب',
      company: 'شركة',
      companyAccount: 'حساب شركة',
      logout: 'تسجيل الخروج',
    },
    common: {
      back: 'رجوع',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      cancel: 'إلغاء',
      save: 'حفظ',
      edit: 'تعديل',
      view: 'عرض',
      viewAll: 'عرض الكل',
      continue: 'متابعة',
      loading: 'جارٍ التحميل...',
      redirecting: 'جارٍ التحويل...',
      confirm: 'تأكيد',
      completed: 'مكتمل',
      inProgress: 'قيد التنفيذ',
      locked: 'مقفل',
      notSet: 'غير محدد',
      markComplete: 'وضع علامة كمكتمل',
      startLearning: 'ابدأ التعلم',
      undo: 'تراجع',
      viewProject: 'عرض المشروع',
      viewDetails: 'عرض التفاصيل',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
      switchLanguage: 'تغيير اللغة',
      close: 'إغلاق',
      toggleMenu: 'فتح القائمة',
    },
    home: {
      badge: 'التأهب المهني للطلاب المصريين',
      heroTitle: 'من الجامعة إلى المسار المهني —',
      heroTitleHighlight: 'بخريطة واضحة.',
      heroSubtitle: 'اكتشف المسار المهني المناسب لك، حدد المهارات التي تنقصك، اكتسب خبرة عملية، وتواصل مع فرص حقيقية.',
      startJourney: 'ابدأ رحلتك',
      explorePaths: 'استكشف المسارات المهنية',
      journeyTitle: 'رحلة EduMap',
      assessment: 'التقييم',
      skillGap: 'فجوة المهارات',
      roadmap: 'المسار التعليمي',
      realChallenge: 'تحدٍ عملي',
      careerOpportunity: 'فرصة مهنية',
      problemTitle: 'التخرج لا ينبغي أن يكون بداية التخمين.',
      problemSubtitle: 'هذه هي التحديات التي نسمعها من الطلاب كل يوم.',
      problems: [
        'لا أعرف أي مسار مهني يناسبني.',
        'لا أعرف ما هي المهارات التي تتوقعها الشركات.',
        'لدي شهادة لكن ليست لدي خبرة عملية.',
        'سيرتي الذاتية لا تثبت ما يمكنني فعله.',
        'أقدم على الوظائف لكن نادراً ما أحصل على مقابلات.',
      ],
      problemSolution: 'EduMap يحل كل هذه المشاكل.',
      solutionTitle: 'EduMap يحول عدم اليقين إلى خطة مهنية.',
      solutionSubtitle: 'خمس خطوات من الحيرة إلى الاستعداد للوظيفة.',
      solutionSteps: [
        { title: 'اكتشف', desc: 'أجرِ تقييماً مهنياً لتجد المسارات التي تناسب اهتماماتك ونقاط قوتك.' },
        { title: 'حلل', desc: 'اعرف بالضبط المهارات التي تمتلكها والتي تحتاج إلى تطويرها.' },
        { title: 'تعلم', desc: 'اتبع مساراً تعليمياً مخصصاً مع تعلم منظم في كل مرحلة.' },
        { title: 'أثبت', desc: 'حل تحديات أعمال حقيقية من شركات واحصل على تقييم لأدائك.' },
        { title: 'تواصل', desc: 'افتح أبواب التدريب والوظائف المناسبة لمهاراتك وأدائك المثبت.' },
      ],
      howItWorksTitle: 'كيف يعمل',
      howItWorksSubtitle: 'مسار واضح من حيث أنت إلى حيث تريد أن تكون.',
      howItWorksSteps: [
        { title: 'أجرِ التقييم', desc: 'أجب عن 15 سؤالاً عن اهتماماتك ومهاراتك وتفضيلاتك في العمل.' },
        { title: 'احصل على توافقك المهني', desc: 'شاهد المسارات المهنية التي تناسبك مع نسب التوافق والأسباب.' },
        { title: 'شاهد فجوة مهاراتك', desc: 'قارن مستوى مهاراتك الحالي بما يتوقعه أصحاب العمل.' },
        { title: 'اتبع مسارك التعليمي', desc: 'تابع تقدمك عبر مراحل تعلم منظمة.' },
        { title: 'حل تحديات حقيقية', desc: 'تعامل مع مشاكل أعمال حقيقية من شركات مصرية.' },
        { title: 'افتح أبواب الفرص', desc: 'احصل على تدريب ووظائف بناءً على أدائك المثبت.' },
      ],
      targetUsersTitle: 'لمن صُمم EduMap؟',
      targetUsersSubtitle: 'مصمم لطلاب التجارة والحقوق في الجامعات المصرية.',
      commerceStudents: 'طلاب التجارة',
      commerceDesc: 'من المحاسبة إلى التكنولوجيا المالية، اكتشف المسار المهني الذي يناسبك.',
      lawStudents: 'طلاب الحقوق',
      lawDesc: 'من التقاضي إلى التكنولوجيا القانونية، جد مكانك في العالم القانوني.',
      commercePaths: ['المحاسبة', 'التمويل', 'التسويق', 'الموارد البشرية', 'تحليل الأعمال والبيانات', 'محلل أعمال', 'سلاسل الإمداد والعمليات', 'الخدمات المصرفية والتكنولوجيا المالية'],
      lawPaths: ['الممارسة القانونية', 'الشؤون القانونية للشركات', 'الامتثال وإدارة المخاطر', 'البحث القانوني', 'قانون العمل والموارد البشرية', 'التكنولوجيا القانونية'],
      statsLabel: 'بيانات تجريبية',
      statsSubtitle: 'إحصائيات تجريبية لأغراض العرض',
      stats: [
        { value: '+10K', label: 'طالب' },
        { value: '+100', label: 'شركة' },
        { value: '+500', label: 'تحدي' },
        { value: '+80%', label: 'معدل إكمال المهارات' },
      ],
      usp: 'EduMap لا يخبر الطلاب بما يجب تعلمه فحسب، بل يوضح لهم السبب، ويساعدهم على الممارسة، ويقيس أداءهم، ويربطهم بالفرص.',
      ctaTitle1: 'شهادتك هي نقطة البداية.',
      ctaTitle2: 'مسارك المهني هو الوجهة.',
      ctaButton: 'ابني خريطتي المهنية',
      footerTagline: 'التأهب المهني للجيل القادم.',
      footerAbout: 'من نحن',
      footerHowItWorks: 'كيف يعمل',
      footerCareerPaths: 'المسارات المهنية',
      footerChallenges: 'التحديات',
      footerMentorship: 'الإرشاد المهني',
      footerContact: 'تواصل معنا',
      footerCompanyTitle: 'للشركات',
      footerCompanyDesc: 'هل أنت شركة تبحث عن المواهب؟',
      footerCompanyLink: 'بوابة الشركات',
      footerCopyright: '© 2026 EduMap. مصمم لطلاب الجامعات المصرية.',
      quickLinks: 'روابط سريعة',
    },
    auth: {
      welcomeBack: 'مرحباً بعودتك',
      loginSubtitle: 'سجّل الدخول لمتابعة رحلتك المهنية.',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'أدخل كلمة المرور',
      login: 'تسجيل الدخول',
      noAccount: 'ليس لديك حساب؟',
      signUp: 'إنشاء حساب',
      companyLogin: 'هل أنت شركة؟ سجّل الدخول من هنا',
      companyPortal: 'بوابة الشركات',
      companyPortalDesc: 'أدخل اسم شركتك للوصول إلى لوحة تحكم الشركة. اكتشف الطلاب المتميزين وادعهم للتدريب.',
      companyName: 'اسم الشركة',
      companyNamePlaceholder: 'مثال: TechCorp Egypt',
      enterCompanyPortal: 'دخول بوابة الشركات',
      areYouCompany: 'هل أنت شركة؟ سجّل الدخول من هنا',
      areYouStudent: 'هل أنت طالب؟',
      studentLogin: 'تسجيل دخول الطلاب',
      createAccount: 'أنشئ حسابك',
      signupSubtitle: 'ابدأ رحلة التأهب المهني اليوم.',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'أحمد محمد',
      university: 'الجامعة',
      faculty: 'الكلية',
      section: 'القسم',
      graduationYear: 'سنة التخرج',
      graduationYearPlaceholder: '2026',
      academicStatus: 'الحالة الأكاديمية',
      careerExperience: 'الخبرة المهنية',
      selectUniversity: 'اختر الجامعة',
      selectFaculty: 'اختر الكلية',
      selectSection: 'اختر القسم',
      selectStatus: 'اختر الحالة',
      selectExperience: 'اختر الخبرة',
      alreadyHaveAccount: 'لديك حساب بالفعل؟ سجّل الدخول',
      passwordMinLength: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
      fillAllFields: 'يرجى ملء جميع الحقول.',
      incorrectPassword: 'كلمة المرور غير صحيحة.',
      noAccountFound: 'لا يوجد حساب بهذا البريد الإلكتروني.',
      companyAccountError: 'هذا حساب شركة. يرجى استخدام تسجيل دخول الشركات.',
      emailExists: 'يوجد حساب بهذا البريد الإلكتروني بالفعل.',
    },
    universities: ['جامعة القاهرة', 'جامعة عين شمس', 'جامعة حلوان'],
    faculties: ['تجارة', 'حقوق'],
    sections: ['عربي', 'إنجليزي'],
    academicStatuses: ['السنة الرابعة', 'خريج جديد'],
    careerExperiences: ['لا توجد خبرة', 'خبرة تدريب', 'خبرة بدوام جزئي', 'خبرة بدوام كامل'],
    onboarding: {
      title: 'لنبن خريطتك المهنية.',
      goalQuestion: 'ما هو هدفك الرئيسي؟',
      goals: [
        { label: 'أريد تدريباً مهنياً' },
        { label: 'أريد وظيفتي الأولى' },
        { label: 'أريد اكتشاف مساري المهني' },
        { label: 'أريد تحسين سيرتي الذاتية' },
        { label: 'أريد خبرة عملية' },
      ],
      confidenceQuestion: 'ما مدى ثقتك في اختيارك المهني؟',
      confidenceLevels: [
        { label: 'أعرف بالضبط ما أريد', desc: 'لدي اتجاه مهني واضح' },
        { label: 'لدي بعض الأفكار', desc: 'لدي بعض الاتجاهات في ذهني' },
        { label: 'لا أعرف بعد', desc: 'أحتاج مساعدة في اكتشاف مساري' },
      ],
      startAssessment: 'ابدأ التقييم',
      selectGoal: 'يرجى اختيار هدفك الرئيسي.',
      selectConfidence: 'يرجى اختيار مستوى ثقتك.',
      onboardingComplete: 'اكتمل الإعداد!',
    },
    assessment: {
      title: 'التقييم المهني',
      questionOf: 'سؤال',
      pleaseSelect: 'يرجى اختيار إجابة للمتابعة.',
      assessmentComplete: 'اكتمل التقييم! جارٍ إنشاء خريطتك المهنية...',
      generating: 'جارٍ إنشاء خريطتك المهنية...',
    },
    assessmentResult: {
      title: 'خريطتك المهنية جاهزة.',
      subtitle: 'بناءً على تقييمك، إليك أفضل المسارات المهنية لك.',
      topMatch: 'المسار المهني الأنسب',
      matchScore: 'نسبة التوافق',
      whyThisPath: 'لماذا هذا المسار؟',
      yourStrengths: 'نقاط قوتك',
      skillsToImprove: 'مهارات تحتاج إلى تطوير',
      viewSkillGap: 'عرض فجوة المهارات',
      viewRoadmap: 'عرض المسار التعليمي',
      noResult: 'لا توجد نتيجة تقييم',
      noResultDesc: 'يرجى إجراء التقييم المهني أولاً.',
      takeAssessment: 'إجراء التقييم',
    },
    skillGap: {
      title: 'تحليل فجوة المهارات',
      subtitle: 'قارن مستوى مهاراتك الحالي بما يتوقعه أصحاب العمل لـ',
      requiredLevel: 'المستوى المطلوب',
      yourLevel: 'مستواك الحالي',
      gap: 'الفجوة',
      gapMessage: 'فجوة بمقدار',
      meetLevel: 'أنت تصل أو تتجاوز المستوى المطلوب.',
      biggestGaps: 'أكبر الفجوات لديك',
      buildRoadmap: 'ابني مساري التعليمي',
      noMatch: 'لا يوجد مسار مهني',
      noMatchDesc: 'أجرِ التقييم أولاً لرؤية تحليل فجوة مهاراتك.',
      levels: { strong: 'قوي', good: 'جيد', needsImprovement: 'يحتاج إلى تطوير', criticalGap: 'فجوة كبيرة' },
    },
    roadmap: {
      title: 'المسار التعليمي',
      subtitle: 'اتبع مسارك التعليمي المخصص لتصبح جاهزاً للوظيفة.',
      overallProgress: 'التقدم الإجمالي',
      completed: 'مكتمل',
      inProgress: 'قيد التنفيذ',
      remaining: 'متبقٍ',
      stage: 'المرحلة',
      noCareer: 'لم يتم اختيار مسار مهني',
      noCareerDesc: 'أجرِ التقييم للحصول على مسارك التعليمي المخصص.',
      exploreChallenges: 'استكشف التحديات',
    },
    dashboard: {
      goodMorning: 'صباح الخير',
      goodAfternoon: 'مساء الخير',
      goodEvening: 'مساء الخير',
      overview: 'إليك نظرة عامة على رحلتك المهنية.',
      roadmapProgress: 'تقدم المسار التعليمي',
      skillMatch: 'توافق المهارات',
      challengesCompleted: 'التحديات المكتملة',
      careerGoal: 'الهدف المهني',
      continueLearning: 'متابعة التعلم',
      nextSkill: 'المهارة التالية الموصى بها:',
      upcomingMentorship: 'الإرشاد القادم',
      noSessions: 'لا توجد جلسات إرشاد محجوزة.',
      bookSession: 'احجز جلسة',
      viewSessions: 'عرض الجلسات',
      recommendedChallenge: 'تحدٍ موصى به',
      activeChallenges: 'تحدياتك النشطة',
      completeAssessment: 'أكمل تقييمك',
      completeAssessmentDesc: 'أجرِ التقييم المهني للحصول على خريطتك المهنية وتحليل فجوة المهارات ومسارك التعليمي.',
      takeAssessment: 'إجراء التقييم',
    },
    challenges: {
      title: 'التحديات العملية',
      subtitle: 'حل مشاكل أعمال وقانونية حقيقية من شركات مصرية. أثبت مهاراتك.',
      allChallenges: 'جميع التحديات',
      facultyOnly: 'فقط',
      joined: 'منضم',
      noChallenges: 'لا توجد تحديات متاحة',
      noChallengesDesc: 'لا توجد تحديات تطابق المرشح المحدد. جرّب مرشحاً آخر.',
      company: 'الشركة',
      difficulty: 'مستوى الصعوبة',
      estimatedTime: 'الوقت المقدر',
      participants: 'مشارك',
      description: 'الوصف',
      businessContext: 'سياق الأعمال',
      theProblem: 'المشكلة',
      requirements: 'المتطلبات',
      deliverables: 'المخرجات المتوقعة',
      skillsRequired: 'المهارات المطلوبة',
      joinChallenge: 'انضم للتحدي',
      submitSolution: 'قدّم حلك',
      solutionPlaceholder: 'صف الحل الخاص بك...',
      uploadPlaceholder: 'ارفع الحل الخاص بك (تجريبي)',
      submitChallenge: 'إرسال الحل',
      submitted: 'تم الإرسال',
      overallScore: 'النتيجة الإجمالية',
      viewEvaluation: 'عرض التقييم',
      addToPortfolio: 'أضف المشروع إلى ملف الأعمال',
      challengeAdded: 'تمت إضافة التحدي إلى لوحة التحكم.',
      pleaseDescribe: 'يرجى وصف الحل قبل الإرسال.',
      submittedMsg: 'تم إرسال الحل! جارٍ إنشاء التقييم...',
      notFound: 'التحدي غير موجود',
      backToChallenges: 'العودة إلى التحديات',
      readyToJoin: 'مستعد لخوض هذا التحدي؟',
      readyToJoinDesc: 'انضم للوصول إلى التحدي الكامل وتقديم حلك.',
    },
    evaluation: {
      title: 'تقييم التحدي',
      overallPerformance: 'الأداء الإجمالي',
      problemSolving: 'حل المشكلات',
      technicalSkills: 'المهارات التقنية',
      communication: 'التواصل',
      businessUnderstanding: 'فهم الأعمال',
      feedback: 'ملاحظات',
      skillsDemonstrated: 'المهارات المُثبتة',
      addedToPortfolio: 'تمت إضافة المشروع إلى ملف الأعمال!',
      alreadyInPortfolio: 'هذا المشروع موجود بالفعل في ملف الأعمال.',
    },
    mentorship: {
      title: 'الإرشاد المهني',
      subtitle: 'احجز جلسات مع محترفين ذوي خبرة في مجالك.',
      bookedSessions: 'جلساتك المحجوزة',
      availableMentors: 'المرشدون المتاحون',
      noMentors: 'لا يوجد مرشدون متاحون',
      noMentorsDesc: 'لا يوجد مرشدون يطابقون مسارك المهني حالياً.',
      company: 'الشركة',
      experience: 'الخبرة',
      track: 'التخصص',
      rating: 'التقييم',
      bookSession: 'حجز جلسة',
      sessionBooked: 'تم الحجز',
      alreadyBooked: 'تم الحجز',
      bookTitle: 'حجز جلسة إرشاد',
      chooseDate: 'اختر التاريخ',
      chooseTime: 'اختر الوقت',
      confirmBooking: 'تأكيد الحجز',
      selectDateTime: 'يرجى اختيار التاريخ والوقت.',
      sessionBookedSuccess: 'تم حجز الجلسة بنجاح!',
      signUpToBook: 'سجّل لحجز جلسة',
    },
    opportunities: {
      title: 'الفرص',
      subtitle: 'تدريب ووظائف للمبتدئين مطابقة لملفك.',
      filters: 'تصفية',
      type: 'نوع الفرصة',
      location: 'الموقع',
      minMatch: 'أقل نسبة توافق',
      all: 'الكل',
      internship: 'تدريب',
      entryLevel: 'وظيفة مبتدئة',
      noOpps: 'لا توجد فرص',
      noOppsDesc: 'حاول تعديل عوامل التصفية لرؤية المزيد من الفرص.',
      saved: 'تم حفظ الفرصة!',
      removed: 'تمت إزالة الفرصة من المحفوظات.',
      signUpToMatch: 'سجّل لرؤية فرصك المطابقة',
      matchLabel: 'توافق',
    },
    portfolio: {
      title: 'ملف الأعمال',
      subtitle: 'تحدياتك المكتملة معروضة كمشاريع حقيقية.',
      noProjects: 'لا توجد مشاريع في ملف أعمالك بعد',
      noProjectsDesc: 'أكمل التحديات وأضفها إلى ملف أعمالك لإظهار مهاراتك لأصحاب العمل.',
      browseChallenges: 'تصفح التحديات',
      projectsInPortfolio: 'مشروع',
      averageScore: 'متوسط الدرجة',
      takeMore: 'خوض المزيد من التحديات',
      role: 'الدور',
      status: 'الحالة',
    },
    profile: {
      title: 'الملف الشخصي',
      subtitle: 'أدر معلوماتك الشخصية وشاهد إحصائياتك المهنية.',
      editProfile: 'تعديل الملف',
      personalInfo: 'المعلومات الشخصية',
      yourSkills: 'مهاراتك',
      careerPath: 'المسار المهني',
      overallProgress: 'التقدم الإجمالي',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      university: 'الجامعة',
      faculty: 'الكلية',
      section: 'القسم',
      graduationYear: 'سنة التخرج',
      careerGoal: 'الهدف المهني',
      selectGoal: 'اختر الهدف',
      updated: 'تم تحديث الملف بنجاح!',
    },
    careerMap: {
      title: 'الخريطة المهنية',
      subtitle: 'رحلتك المهنية المخصصة من التقييم إلى الفرصة.',
      topMatch: 'المسار المهني الأنسب لك',
      yourJourney: 'رحلتك المهنية',
      allMatches: 'جميع المسارات المطابقة',
      yourStrengths: 'نقاط قوتك',
      noMap: 'لا توجد خريطة مهنية بعد',
      noMapDesc: 'أجرِ التقييم لإنشاء خريطتك المهنية.',
      takeAssessment: 'إجراء التقييم',
      journeySteps: [
        { label: 'التقييم', statusKey: 'مكتمل' },
        { label: 'تحليل فجوة المهارات', statusKey: 'متاح' },
        { label: 'المسار التعليمي', statusKey: 'مكتمل' },
        { label: 'التحديات العملية', statusKey: 'منضم' },
        { label: 'ملف الأعمال', statusKey: 'مشاريع' },
      ],
    },
    company: {
      dashboard: 'لوحة التحكم',
      dashboardSubtitle: 'اكتشف الطلاب المتميزين وأدر تحدياتك.',
      activeChallenges: 'التحديات النشطة',
      totalParticipants: 'إجمالي المشاركين',
      completedChallenges: 'التحديات المكتملة',
      topCandidates: 'أفضل المرشحين',
      topStudents: 'الطلاب المتميزون',
      viewCandidate: 'عرض المرشح',
      candidates: 'المرشحون',
      candidatesSubtitle: 'تصفح الطلاب المتميزين الذين أكملوا التحديات.',
      allCandidates: 'جميع المرشحين',
      candidate: 'المرشح',
      university: 'الجامعة',
      career: 'المسار المهني',
      challenges: 'التحديات',
      score: 'الدرجة',
      skills: 'المهارات',
      mentorFeedback: 'ملاحظات المرشد',
      completedChallengesList: 'التحديات المكتملة',
      inviteToInternship: 'دعوة للتدريب',
      invitationSent: 'تم إرسال دعوة التدريب إلى',
      backToDashboard: 'العودة إلى لوحة التحكم',
      excellent: 'ممتاز',
      good: 'جيد',
    },
    toasts: {
      welcomeBack: 'مرحباً بعودتك!',
      accountCreated: 'تم إنشاء الحساب بنجاح!',
      onboardingComplete: 'اكتمل الإعداد!',
      assessmentComplete: 'اكتمل التقييم! جارٍ إنشاء خريطتك المهنية...',
      challengeAdded: 'تمت إضافة التحدي إلى لوحة التحكم.',
      challengeSubmitted: 'تم إرسال الحل! جارٍ إنشاء التقييم...',
      pleaseDescribe: 'يرجى وصف الحل قبل الإرسال.',
      projectAdded: 'تمت إضافة المشروع إلى ملف الأعمال!',
      alreadyInPortfolio: 'هذا المشروع موجود بالفعل في ملف الأعمال.',
      sessionBooked: 'تم حجز الجلسة بنجاح!',
      selectDateTime: 'يرجى اختيار التاريخ والوقت.',
      oppSaved: 'تم حفظ الفرصة!',
      oppRemoved: 'تمت إزالة الفرصة من المحفوظات.',
      profileUpdated: 'تم تحديث الملف بنجاح!',
      invitationSent: 'تم إرسال دعوة التدريب إلى',
      pleaseSelectGoal: 'يرجى اختيار هدفك الرئيسي.',
      pleaseSelectConfidence: 'يرجى اختيار مستوى ثقتك.',
      fillAllFields: 'يرجى ملء جميع الحقول.',
      passwordMinLength: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
      emailExists: 'يوجد حساب بهذا البريد الإلكتروني بالفعل.',
      loginFailed: 'فشل تسجيل الدخول.',
    },
    careerTitles: {
      accounting: 'محاسب',
      finance: 'محلل مالي',
      marketing: 'أخصائي تسويق',
      hr: 'أخصائي موارد بشرية',
      'business-analytics': 'محلل بيانات',
      'business-analyst': 'محلل أعمال',
      'supply-chain': 'محلل سلاسل إمداد',
      'banking-fintech': 'محلل التكنولوجيا المالية',
      'legal-practice': 'محامٍ مبتدئ',
      'corporate-legal': 'مستشار قانوني للشركات',
      'compliance-risk': 'مسؤول امتثال',
      'legal-research': 'باحث قانوني',
      'hr-labor-law': 'مستشار قانون العمل',
      'legal-tech': 'أخصائي التكنولوجيا القانونية',
    },
    difficulty: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم' },
  },
};
