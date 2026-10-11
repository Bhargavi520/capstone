import { CheckCircle2, FileText, UploadCloud, WandSparkles, Pencil, Plus } from "lucide-react";
import { resumeData } from "../data/demoData";
import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";

export default function ResumeAnalyzer() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="PERCEPTION LAYER"
        title="Resume Analyzer"
        description="Upload your resume and turn unstructured information into a student profile that the guidance workflow can use."
        action={<button className="button button-primary"><WandSparkles size={16} /> Analyze resume</button>}
      />

      <div className="resume-upload-grid">
        <SectionCard title="Upload resume" subtitle="PDF or DOCX · Max 5 MB">
          <div className="upload-zone">
            <div className="upload-icon"><UploadCloud size={25} /></div>
            <h3>Drop your resume here</h3>
            <p>or browse from your device</p>
            <button className="button button-secondary">Choose file</button>
            <small>Sample mode: no file is actually uploaded.</small>
          </div>
        </SectionCard>

        <SectionCard title="Resume quality" subtitle="Sample analysis for your current resume">
          <div className="resume-score">
            <div className="score-circle"><strong>82</strong><span>/100</span></div>
            <div>
              <div className="score-status">Good foundation</div>
              <p>Add measurable project outcomes and role-specific keywords to improve your score.</p>
            </div>
          </div>
          <div className="quality-list">
            <div><CheckCircle2 size={16} /><span>Contact & education</span><strong>Good</strong></div>
            <div><CheckCircle2 size={16} /><span>Technical skills</span><strong>Good</strong></div>
            <div><CheckCircle2 size={16} /><span>Projects</span><strong>Improve</strong></div>
          </div>
        </SectionCard>
      </div>

      <div className="content-grid">
        <SectionCard title="Extracted skills" subtitle="Editable structured data from the sample resume" action={<button className="icon-text-button"><Pencil size={14} /> Edit</button>}>
          <div className="tag-cloud">
            {resumeData.extractedSkills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            <button className="tag add-tag"><Plus size={13} /> Add skill</button>
          </div>
        </SectionCard>

        <SectionCard title="Education" subtitle="Academic information identified from the resume">
          <div className="record-list">
            {resumeData.education.map((item) => (
              <div className="record-item" key={item.title}>
                <div className="record-icon"><FileText size={17} /></div>
                <div><strong>{item.title}</strong><span>{item.subtitle}</span></div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Experience & projects" subtitle="Relevant experience found in the sample resume">
          <div className="record-list">
            {resumeData.experience.map((item) => (
              <div className="record-item" key={item.title}>
                <div className="record-icon"><WandSparkles size={17} /></div>
                <div><strong>{item.title}</strong><span>{item.subtitle}</span></div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Next step" subtitle="Use your parsed profile for career matching">
          <div className="callout">
            <div className="callout-icon"><WandSparkles size={18} /></div>
            <div><strong>Profile ready for matching</strong><p>Your extracted skills can now be compared with target roles.</p></div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
