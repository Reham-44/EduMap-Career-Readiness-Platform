import { useState } from 'react';
import { Star, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';
import { Badge } from '@/components/Badge';
import { Modal } from '@/components/Modal';
import { EmptyState } from '@/components/EmptyState';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { mentors } from '@/data/mentors';
import type { Mentor, BookedSession } from '@/types';
import { useLang } from '@/contexts/LanguageContext';

const dates = ['Today', 'Tomorrow', 'Sep 8', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12'];
const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

export function Mentorship() {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const { t } = useLang();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!user) return null;

  const bookedSessions = user.bookedSessions || [];
  const relevantMentors = mentors.filter((m) => {
    if (!user.topCareer) return true;
    const careerMap: Record<string, string> = {
      'business-analyst': 'Business Analyst',
      'business-analytics': 'Business Analytics',
      finance: 'Finance',
      marketing: 'Marketing',
      hr: 'Human Resources',
      accounting: 'Accounting',
      'supply-chain': 'Supply Chain & Operations',
      'banking-fintech': 'Banking & FinTech',
      'legal-practice': 'Legal Practice',
      'corporate-legal': 'Corporate Legal',
      'compliance-risk': 'Compliance & Risk',
      'legal-research': 'Legal Research',
      'hr-labor-law': 'HR & Labor Law',
      'legal-tech': 'Legal Tech',
    };
    const userCareerTitle = careerMap[user.topCareer];
    return userCareerTitle ? m.careerTrack === userCareerTitle : true;
  });

  const handleBook = () => {
    if (!selectedMentor || !selectedDate || !selectedTime) {
      showToast(t.mentorship.selectDateTime, 'error');
      return;
    }
    const session: BookedSession = {
      id: `session-${Date.now()}`,
      mentorId: selectedMentor.id,
      mentorName: selectedMentor.name,
      mentorTitle: selectedMentor.title,
      date: selectedDate,
      time: selectedTime,
    };
    updateUser({ bookedSessions: [...bookedSessions, session] });
    showToast(t.mentorship.sessionBookedSuccess, 'success');
    setSelectedMentor(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">{t.mentorship.title}</h1>
        <p className="text-sm text-slate-500 mt-1">{t.mentorship.subtitle}</p>
      </div>

      {/* Booked sessions */}
      {bookedSessions.length > 0 && (
        <div className="card p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-600" />
            {t.mentorship.bookedSessions}
          </h3>
          <div className="space-y-3">
            {bookedSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 rounded-xl bg-primary-50 border border-primary-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-semibold">
                    {session.mentorName.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{session.mentorName}</p>
                    <p className="text-xs text-slate-500">{session.mentorTitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">{session.date}</p>
                  <p className="text-xs text-slate-500">{session.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mentor cards */}
      <h3 className="font-bold text-slate-900 mb-4">{t.mentorship.availableMentors}</h3>
      {relevantMentors.length === 0 ? (
        <EmptyState
          icon={<Users className="w-7 h-7" />}
          title={t.mentorship.noMentors}
          message={t.mentorship.noMentorsDesc}
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relevantMentors.map((mentor) => {
            const alreadyBooked = bookedSessions.some((s) => s.mentorId === mentor.id);
            return (
              <div key={mentor.id} className="card p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                    {mentor.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{mentor.name}</h3>
                    <p className="text-xs text-slate-500">{mentor.title}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm text-slate-600">
                  <p><span className="text-slate-400">{t.mentorship.company}:</span> {mentor.company}</p>
                  <p><span className="text-slate-400">{t.mentorship.experience}:</span> {mentor.yearsExperience}</p>
                  <p><span className="text-slate-400">{t.mentorship.track}:</span> {mentor.careerTrack}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                    <span className="font-semibold">{mentor.rating}</span>
                    <span className="text-slate-400 text-xs">{t.mentorship.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mentor.skills.map((s) => (
                    <span key={s} className="badge bg-slate-100 text-slate-600 text-xs">{s}</span>
                  ))}
                </div>

                <button
                  onClick={() => { setSelectedMentor(mentor); setSelectedDate(''); setSelectedTime(''); }}
                  disabled={alreadyBooked}
                  className={alreadyBooked ? 'btn-secondary w-full opacity-60 pointer-events-none' : 'btn-primary w-full'}
                >
                  {alreadyBooked ? <><CheckCircle2 className="w-4 h-4" /> {t.mentorship.sessionBooked}</> : t.mentorship.bookSession}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Booking Modal */}
      <Modal open={!!selectedMentor} onClose={() => setSelectedMentor(null)} title={t.mentorship.bookTitle}>
        {selectedMentor && (
          <div>
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
                {selectedMentor.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{selectedMentor.name}</p>
                <p className="text-xs text-slate-500">{selectedMentor.title} at {selectedMentor.company}</p>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">{t.mentorship.chooseDate}</label>
              <div className="grid grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedDate === d ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">{t.mentorship.chooseTime}</label>
              <div className="grid grid-cols-3 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedTime === t ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleBook} className="btn-primary w-full">{t.mentorship.confirmBooking}</button>
          </div>
        )}
      </Modal>
    </AppLayout>
  );
}
