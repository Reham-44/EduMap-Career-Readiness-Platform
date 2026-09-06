export type Faculty = 'Commerce' | 'Law';
export type Section = 'Arabic' | 'English';
export type AcademicStatus = 'Fourth Year' | 'Fresh Graduate';
export type CareerExperience = 'No experience' | 'Internship experience' | 'Part-time experience' | 'Full-time experience';
export type University = 'Cairo University' | 'Ain Shams University' | 'Helwan University';

export type CareerGoal = 'Internship' | 'First Job' | 'Discover path' | 'Improve CV' | 'Practical experience';
export type ConfidenceLevel = 'Know exactly' | 'Some ideas' | 'No idea yet';

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  password: string;
  university: University;
  faculty: Faculty;
  section: Section;
  academicStatus: AcademicStatus;
  careerExperience: CareerExperience;
  graduationYear: string;
  careerGoal?: CareerGoal;
  confidence?: ConfidenceLevel;
  assessmentAnswers?: Record<number, number>;
  careerMatches?: CareerMatch[];
  topCareer?: string;
  skillLevels?: Record<string, number>;
  roadmapProgress?: Record<string, RoadmapSkillStatus>;
  joinedChallenges?: string[];
  challengeSubmissions?: Record<string, ChallengeSubmission>;
  challengeEvaluations?: Record<string, ChallengeEvaluation>;
  bookedSessions?: BookedSession[];
  portfolio?: PortfolioProject[];
  savedOpportunities?: string[];
  companyInvitations?: Record<string, { candidateName: string; sentAt: string }>;
  accountType: 'student' | 'company';
  companyName?: string;
}

export interface CareerMatch {
  careerId: string;
  title: string;
  score: number;
  reasons: string[];
}

export interface SkillGapItem {
  skill: string;
  required: number;
  current: number;
  gap: number;
  level: 'Strong' | 'Good' | 'Needs Improvement' | 'Critical Gap';
}

export interface RoadmapStage {
  id: string;
  title: string;
  skills: RoadmapSkill[];
}

export interface RoadmapSkill {
  id: string;
  name: string;
  description: string;
}

export type RoadmapSkillStatus = 'completed' | 'in_progress' | 'locked';

export interface Challenge {
  id: string;
  title: string;
  company: string;
  category: string;
  careerId: string;
  faculty: Faculty;
  description: string;
  businessContext: string;
  problem: string;
  requirements: string[];
  deliverables: string[];
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  deadline: string;
  participants: number;
}

export interface ChallengeSubmission {
  challengeId: string;
  solution: string;
  submittedAt: string;
}

export interface ChallengeEvaluation {
  challengeId: string;
  problemSolving: number;
  technicalSkills: number;
  communication: number;
  businessUnderstanding: number;
  overall: number;
  feedback: string;
  skillsDemonstrated: string[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  yearsExperience: number;
  careerTrack: string;
  rating: number;
  skills: string[];
  avatar: string;
}

export interface BookedSession {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorTitle: string;
  date: string;
  time: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Internship' | 'Entry-level';
  requiredSkills: string[];
  careerId: string;
  faculty: Faculty;
  match: number;
  salary?: string;
}

export interface PortfolioProject {
  id: string;
  challengeId: string;
  title: string;
  role: string;
  skills: string[];
  score: number;
  company: string;
  status: 'Completed';
  addedAt: string;
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  faculty: Faculty | 'Both';
  options: { label: string; text: string; weights: Record<string, number> }[];
}
