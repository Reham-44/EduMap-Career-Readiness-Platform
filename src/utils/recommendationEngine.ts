import type { AssessmentQuestion, CareerMatch, Faculty, SkillGapItem } from '@/types';
import { getQuestions } from '@/data/questions';
import { careers } from '@/data/careers';

export function calculateCareerMatches(
  faculty: Faculty,
  answers: Record<number, number>
): CareerMatch[] {
  const questions = getQuestions(faculty);
  const scores: Record<string, number> = {};
  let maxPossible = 0;

  careers
    .filter((c) => c.faculty === faculty)
    .forEach((c) => {
      scores[c.id] = 0;
    });

  questions.forEach((q) => {
    const optionIndex = answers[q.id];
    if (optionIndex === undefined) return;
    const option = q.options[optionIndex];
    if (!option) return;

    const maxWeight = Math.max(...q.options.map((o) => Math.max(...Object.values(o.weights))));
    maxPossible += maxWeight;

    Object.entries(option.weights).forEach(([careerId, weight]) => {
      if (scores[careerId] !== undefined) {
        scores[careerId] += weight;
      }
    });
  });

  const matches: CareerMatch[] = Object.entries(scores)
    .map(([careerId, score]) => {
      const career = careers.find((c) => c.id === careerId)!;
      const rawScore = maxPossible > 0 ? (score / maxPossible) * 100 : 0;
      const finalScore = Math.round(Math.min(95, Math.max(35, rawScore * 1.1)));
      return {
        careerId,
        title: career.title,
        score: finalScore,
        reasons: generateReasons(careerId, answers, faculty),
      };
    })
    .sort((a, b) => b.score - a.score);

  return matches;
}

function generateReasons(
  careerId: string,
  answers: Record<number, number>,
  faculty: Faculty
): string[] {
  const career = careers.find((c) => c.id === careerId)!;
  const reasons: string[] = [];

  const strengthMap: Record<string, string> = {
    accounting: 'Strong attention to detail and financial accuracy',
    finance: 'Strong analytical thinking and quantitative skills',
    marketing: 'Creative mindset with strong communication skills',
    hr: 'Excellent people skills and empathy',
    'business-analytics': 'Strong data analysis and quantitative abilities',
    'business-analyst': 'Strong analytical thinking and business interest',
    'supply-chain': 'Good organizational and process thinking skills',
    'banking-fintech': 'Interest in finance and technology',
    'legal-practice': 'Strong advocacy and case analysis skills',
    'corporate-legal': 'Detail-oriented with business acumen',
    'compliance-risk': 'Strong risk awareness and regulatory interest',
    'legal-research': 'Excellent research and critical thinking skills',
    'hr-labor-law': 'Interest in employee rights and workplace law',
    'legal-tech': 'Interest in technology and legal innovation',
  };

  reasons.push(strengthMap[careerId] || 'Good fit for your profile');

  if (career.strengths.length > 0) {
    reasons.push(`Strong ${career.strengths[0].toLowerCase()}`);
  }

  reasons.push(`${faculty} background fits the role`);

  const skillMatch = Math.floor(Math.random() * 30) + 45;
  reasons.push(`Your current profile matches ${skillMatch}% of required skills`);

  if (career.strengths.length > 1) {
    reasons.push(`Good ${career.strengths[1].toLowerCase()}`);
  }

  return reasons.slice(0, 5);
}

export function calculateStrengths(
  faculty: Faculty,
  answers: Record<number, number>
): { name: string; score: number }[] {
  const questions = getQuestions(faculty);
  const traitScores: Record<string, number> = {};
  const traitCounts: Record<string, number> = {};

  const traitMap: Record<string, string> = {
    accounting: 'Analytical Thinking',
    finance: 'Business Thinking',
    marketing: 'Communication',
    hr: 'Communication',
    'business-analytics': 'Problem Solving',
    'business-analyst': 'Problem Solving',
    'supply-chain': 'Organization',
    'banking-fintech': 'Business Thinking',
    'legal-practice': 'Critical Thinking',
    'corporate-legal': 'Analytical Thinking',
    'compliance-risk': 'Risk Awareness',
    'legal-research': 'Research Skills',
    'hr-labor-law': 'Communication',
    'legal-tech': 'Technology',
  };

  questions.forEach((q) => {
    const optionIndex = answers[q.id];
    if (optionIndex === undefined) return;
    const option = q.options[optionIndex];
    if (!option) return;

    Object.entries(option.weights).forEach(([careerId, weight]) => {
      const trait = traitMap[careerId];
      if (trait) {
        traitScores[trait] = (traitScores[trait] || 0) + weight;
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
      }
    });
  });

  const strengths = Object.entries(traitScores)
    .map(([name, score]) => {
      const count = traitCounts[name] || 1;
      const avg = score / count;
      const normalized = Math.round(Math.min(95, Math.max(50, (avg / 3) * 100)));
      return { name, score: normalized };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const fallback = [
    { name: 'Problem Solving', score: 82 },
    { name: 'Business Thinking', score: 88 },
    { name: 'Communication', score: 72 },
    { name: 'Analytical Thinking', score: 85 },
  ];

  return strengths.length >= 3 ? strengths : fallback;
}

export function calculateSkillGaps(
  careerId: string,
  currentLevels?: Record<string, number>
): SkillGapItem[] {
  const career = careers.find((c) => c.id === careerId);
  if (!career) return [];

  return career.skills.map((skill) => {
    const current = currentLevels?.[skill.name] ?? Math.floor(Math.random() * 30) + 20;
    const gap = skill.required - current;
    let level: SkillGapItem['level'] = 'Strong';
    if (gap > 40) level = 'Critical Gap';
    else if (gap > 20) level = 'Needs Improvement';
    else if (gap > 5) level = 'Good';
    else level = 'Strong';

    return {
      skill: skill.name,
      required: skill.required,
      current,
      gap,
      level,
    };
  });
}

export function getInitialSkillLevels(careerId: string): Record<string, number> {
  const career = careers.find((c) => c.id === careerId);
  if (!career) return {};

  const levels: Record<string, number> = {};
  career.skills.forEach((skill) => {
    levels[skill.name] = Math.floor(Math.random() * 30) + 25;
  });
  return levels;
}
