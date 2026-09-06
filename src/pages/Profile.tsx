import { useState } from 'react';
import { User, Mail, GraduationCap, Calendar, Briefcase, Edit3, Save, X, Award, Target } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { ProgressBar } from '@/components/ProgressBar';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { getCareerById } from '@/data/careers';
import type { University, Faculty, Section, AcademicStatus, CareerGoal } from '@/types';

const universities: University[] = ['Cairo University', 'Ain Shams University', 'Helwan University'];
const faculties: Faculty[] = ['Commerce', 'Law'];
const sections: Section[] = ['Arabic', 'English'];
const academicStatuses: AcademicStatus[] = ['Fourth Year', 'Fresh Graduate'];
const careerGoals: CareerGoal[] = ['Internship', 'First Job', 'Discover path', 'Improve CV', 'Practical experience'];

export function Profile() {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    university: user?.university || '',
    faculty: user?.faculty || '',
    section: user?.section || '',
    graduationYear: user?.graduationYear || '',
    careerGoal: user?.careerGoal || '',
  });

  if (!user) return null;

  const career = user.topCareer ? getCareerById(user.topCareer) : null;
  const completedChallenges = user.challengeEvaluations ? Object.keys(user.challengeEvaluations).length : 0;

  const roadmapProgress = user.roadmapProgress || {};
  const totalSkills = career?.roadmap.reduce((acc, stage) => acc + stage.skills.length, 0) || 0;
  const completedSkills = Object.values(roadmapProgress).filter((s) => s === 'completed').length;
  const overallProgress = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;

  const handleSave = () => {
    updateUser({
      fullName: form.fullName,
      email: form.email,
      university: form.university as University,
      faculty: form.faculty as Faculty,
      section: form.section as Section,
      graduationYear: form.graduationYear,
      careerGoal: form.careerGoal as CareerGoal,
    });
    setEditing(false);
    showToast('Profile updated successfully!', 'success');
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your personal information and view your career stats.</p>
      </div>

      {/* Profile header */}
      <div className="card p-6 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.fullName?.[0] || 'S'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{user.fullName}</h2>
              <p className="text-sm text-slate-500">{user.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="primary">{user.faculty}</Badge>
                <Badge variant="neutral">{user.academicStatus}</Badge>
                {career && <Badge variant="secondary">{career.title}</Badge>}
              </div>
            </div>
          </div>
          {!editing ? (
            <button onClick={() => setEditing(true)} className="btn-secondary">
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button onClick={() => setEditing(false)} className="btn-ghost">
                <X className="w-4 h-4" /> Cancel
              </button>
              <button onClick={handleSave} className="btn-primary">
                <Save className="w-4 h-4" /> Save
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-primary-500" />
            <span className="text-xs text-slate-500">Career Path</span>
          </div>
          <p className="font-bold text-slate-900">{career?.title || 'Not set'}</p>
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-secondary-500" />
            <span className="text-xs text-slate-500">Overall Progress</span>
          </div>
          <p className="font-bold text-slate-900">{overallProgress}%</p>
          <ProgressBar value={overallProgress} size="sm" className="mt-2" />
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-success-500" />
            <span className="text-xs text-slate-500">Completed Challenges</span>
          </div>
          <p className="font-bold text-slate-900">{completedChallenges}</p>
        </div>
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-4 h-4 text-warning-500" />
            <span className="text-xs text-slate-500">Career Goal</span>
          </div>
          <p className="font-bold text-slate-900">{user.careerGoal || 'Not set'}</p>
        </div>
      </div>

      {/* Personal info */}
      <div className="card p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-4">Personal Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {editing ? (
            <>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Name</label>
                <input type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">University</label>
                <select value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} className="input-field">
                  {universities.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Faculty</label>
                <select value={form.faculty} onChange={(e) => setForm({ ...form, faculty: e.target.value })} className="input-field">
                  {faculties.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Section</label>
                <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className="input-field">
                  {sections.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Graduation Year</label>
                <input type="text" value={form.graduationYear} onChange={(e) => setForm({ ...form, graduationYear: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Career Goal</label>
                <select value={form.careerGoal} onChange={(e) => setForm({ ...form, careerGoal: e.target.value })} className="input-field">
                  <option value="">Select goal</option>
                  {careerGoals.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </>
          ) : (
            <>
              <InfoRow icon={<User className="w-4 h-4" />} label="Full Name" value={user.fullName} />
              <InfoRow icon={<Mail className="w-4 h-4" />} label="Email" value={user.email} />
              <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="University" value={user.university} />
              <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="Faculty" value={user.faculty} />
              <InfoRow icon={<User className="w-4 h-4" />} label="Section" value={user.section} />
              <InfoRow icon={<Calendar className="w-4 h-4" />} label="Graduation Year" value={user.graduationYear} />
              <InfoRow icon={<Briefcase className="w-4 h-4" />} label="Career Goal" value={user.careerGoal || 'Not set'} />
              <InfoRow icon={<Target className="w-4 h-4" />} label="Career Path" value={career?.title || 'Not set'} />
            </>
          )}
        </div>
      </div>

      {/* Skills */}
      {career && (
        <div className="card p-6">
          <h3 className="font-bold text-slate-900 mb-4">Your Skills</h3>
          <div className="space-y-3">
            {career.skills.map((skill) => {
              const current = user.skillLevels?.[skill.name] || 0;
              return (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{current}% / {skill.required}%</span>
                  </div>
                  <ProgressBar value={current} size="sm" color={current >= skill.required ? 'bg-success-500' : 'bg-warning-500'} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </AppLayout>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-3 rounded-xl bg-slate-50">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-slate-400">{icon}</span>
        <span className="text-xs font-medium text-slate-500">{label}</span>
      </div>
      <p className="text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}
