import { BookOpen, Check, Edit3, GraduationCap, MapPin, Save, Target, UserRound } from "lucide-react";
import { useState } from "react";
import { student } from "../data/demoData";
import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";

export default function Profile() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="page">
      <PageHeader
        eyebrow="STUDENT PROFILE"
        title="My Profile"
        description="The information below represents the context the guidance system would use for personalization."
        action={<button className="button button-primary" onClick={() => setSaved(true)}>{saved ? <Check size={15} /> : <Save size={15} />} {saved ? "Saved" : "Save changes"}</button>}
      />

      <div className="profile-layout">
        <SectionCard className="profile-card">
          <div className="profile-identity">
            <div className="avatar avatar-lg">{student.initials}</div>
            <div><h2>{student.name}</h2><p>{student.degree} · {student.university}</p><span className="profile-badge">Student profile</span></div>
            <button className="icon-text-button"><Edit3 size={14} /> Edit</button>
          </div>
          <div className="profile-fields">
            <label><span>Full name</span><input defaultValue={student.name} /></label>
            <label><span>Degree</span><input defaultValue={student.degree} /></label>
            <label><span>University</span><input defaultValue={student.university} /></label>
            <label><span>Location</span><div className="input-with-icon"><MapPin size={15} /><input defaultValue="Visakhapatnam, India" /></div></label>
          </div>
        </SectionCard>

        <SectionCard title="Career goal" subtitle="Your primary placement target">
          <div className="goal-card">
            <div className="goal-icon"><Target size={19} /></div>
            <div><span>Target role</span><strong>{student.targetRole}</strong><small>High-demand placement track</small></div>
          </div>
          <div className="goal-options">
            <button className="selected">Full Stack Developer</button>
            <button>Java Backend Developer</button>
            <button>Data Analyst</button>
          </div>
        </SectionCard>

        <SectionCard title="Academic context" subtitle="Information used to personalize recommendations">
          <div className="context-list">
            <div><GraduationCap size={17} /><span>Program</span><strong>B.Tech CSE</strong></div>
            <div><BookOpen size={17} /><span>Current focus</span><strong>Placements & DSA</strong></div>
            <div><UserRound size={17} /><span>Profile completion</span><strong>82%</strong></div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
