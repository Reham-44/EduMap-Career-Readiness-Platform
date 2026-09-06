import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Star, Award, Target, Users, Building2, Mail, Send } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { ProgressBar } from '@/components/ProgressBar';
import { useToast } from '@/contexts/ToastContext';
import { useAuth } from '@/contexts/AuthContext';
import { useLang } from '@/contexts/LanguageContext';

const candidateData: Record<string, {
  name: string; university: string; career: string; score: number;
  skills: string[]; challenges: { title: string; score: number; company: string }[];
  mentorFeedback: string;
}> = {
  c1: { name: 'Sara Ahmed', university: 'Cairo University', career: 'Business Analyst', score: 94, skills: ['Excel', 'Power BI', 'Business Analysis', 'SQL', 'Process Mapping'], challenges: [{ title: 'Business Process Improvement', score: 92, company: 'Cairo Logistics' }, { title: 'Sales Performance Analysis', score: 96, company: 'TechCorp Egypt' }, { title: 'Small Business Financial Review', score: 88, company: 'Cairo Accounting Group' }], mentorFeedback: 'Sara shows excellent analytical thinking and a strong ability to translate business problems into structured solutions. She is ready for an internship role.' },
  c2: { name: 'Mohamed Adel', university: 'Ain Shams University', career: 'Finance', score: 91, skills: ['Financial Analysis', 'Excel', 'Financial Modeling', 'Accounting'], challenges: [{ title: 'Investment Analysis Case', score: 93, company: 'Nile Capital' }, { title: 'Small Business Financial Review', score: 89, company: 'Cairo Accounting Group' }], mentorFeedback: 'Mohamed has strong quantitative skills and a good understanding of financial markets. Needs more exposure to real-world financial modeling.' },
  c3: { name: 'Nour Hassan', university: 'Helwan University', career: 'Marketing', score: 89, skills: ['Digital Marketing', 'Content Strategy', 'Market Research', 'Social Media'], challenges: [{ title: "Improve a Brand's Digital Engagement", score: 91, company: 'Digital Boost Agency' }, { title: 'Sales Performance Analysis', score: 85, company: 'TechCorp Egypt' }, { title: 'Small Business Financial Review', score: 82, company: 'Cairo Accounting Group' }, { title: 'Recruitment Shortlisting Challenge', score: 88, company: 'Helwan Industries' }], mentorFeedback: 'Nour is creative and data-driven. Excellent at combining marketing strategy with analytics. Great candidate for a marketing internship.' },
  c4: { name: 'Yara Khaled', university: 'Cairo University', career: 'Legal Practice', score: 88, skills: ['Case Analysis', 'Legal Research', 'Legal Writing', 'Critical Thinking'], challenges: [{ title: 'Case Analysis Challenge', score: 90, company: 'Cairo Legal Associates' }, { title: 'Contract Review Challenge', score: 86, company: 'Corporate Legal Partners' }], mentorFeedback: 'Yara demonstrates strong legal reasoning and excellent research skills. She would benefit from real courtroom exposure.' },
  c5: { name: 'Omar Sherif', university: 'Ain Shams University', career: 'Accounting', score: 86, skills: ['Accounting', 'Excel', 'Financial Analysis', 'Tax'], challenges: [{ title: 'Small Business Financial Review', score: 88, company: 'Cairo Accounting Group' }, { title: 'Investment Analysis Case', score: 84, company: 'Nile Capital' }, { title: 'Inventory Optimization', score: 85, company: 'Nile Retail Chain' }], mentorFeedback: 'Omar is detail-oriented and reliable. Strong foundation in accounting principles. Ready for an entry-level accounting role.' },
  c6: { name: 'Farida Tarek', university: 'Helwan University', career: 'Compliance & Risk', score: 85, skills: ['Regulatory Knowledge', 'Risk Assessment', 'Audit', 'Legal Research'], challenges: [{ title: 'Compliance Risk Assessment', score: 87, company: 'Nile Compliance Solutions' }, { title: 'Contract Review Challenge', score: 83, company: 'Corporate Legal Partners' }], mentorFeedback: 'Farida has a solid understanding of compliance frameworks. Needs more practical exposure to regulatory audits.' },
};

export function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { user, updateUser } = useAuth();
  const { t } = useLang();

  const candidate = id ? candidateData[id] : null;

  if (!candidate) {
    return (
      <AppLayout role="company">
        <div className="card p-8 text-center max-w-md mx-auto mt-12">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">{t.company.candidate} {t.common.notSet}</h2>
          <Link to="/company/dashboard" className="btn-primary mt-4">{t.company.backToDashboard}</Link>
        </div>
      </AppLayout>
    );
  }

  const handleInvite = () => {
    if (!candidate || !user) return;
    if (user.companyInvitations?.[id || '']) {
      showToast(`${t.company.invitationSent} ${candidate.name}`, 'info');
      return;
    }
    updateUser({
      companyInvitations: {
        ...(user.companyInvitations || {}),
        [id as string]: { candidateName: candidate.name, sentAt: new Date().toISOString() },
      },
    });
    showToast(`${t.company.invitationSent} ${candidate.name}`, 'success');
  };

  return (
    <AppLayout role="company">
      <Link to="/company/candidates" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 mb-4">
        <ArrowLeft className="w-4 h-4" /> {t.company.candidates}
      </Link>

      <div className="card p-6 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
              {candidate.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{candidate.name}</h1>
              <p className="text-sm text-slate-500">{candidate.university}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="primary">{candidate.career}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                  <span className="text-sm font-bold text-slate-700">{candidate.score}%</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleInvite} disabled={Boolean(user?.companyInvitations?.[id || ''])} className="btn-primary text-base px-6 py-3">
            <Send className="w-4 h-4" />
            {user?.companyInvitations?.[id || ''] ? t.company.invitationSent : t.company.inviteToInternship}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="card p-6">
          <h3 className="font-bold text-slate-900 mb-4">{t.company.skills}</h3>
          <div className="space-y-3">
            {candidate.skills.map((skill) => (
              <div key={skill}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{skill}</span>
                  <span className="text-slate-500">{Math.floor(Math.random() * 20) + 75}%</span>
                </div>
                <ProgressBar value={Math.floor(Math.random() * 20) + 75} size="sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-bold text-slate-900 mb-4">{t.company.mentorFeedback}</h3>
          <div className="p-4 rounded-xl bg-slate-50">
            <p className="text-sm text-slate-600 italic leading-relaxed">"{candidate.mentorFeedback}"</p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary-600" />
          {t.company.completedChallengesList}
        </h3>
        <div className="space-y-3">
          {candidate.challenges.map((ch, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
              <div>
                <p className="font-semibold text-slate-900 text-sm">{ch.title}</p>
                <p className="text-xs text-slate-500">{ch.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700">{ch.score}%</span>
                <Badge variant={ch.score >= 90 ? 'success' : 'warning'}>{ch.score >= 90 ? t.company.excellent : t.company.good}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
