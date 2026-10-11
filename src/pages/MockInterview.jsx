import { Bot, ChevronLeft, ChevronRight, Mic, RotateCcw, Send, Sparkles, Star, UserRound } from "lucide-react";
import { useState } from "react";
import { interviewQuestions } from "../data/demoData";
import PageHeader from "../components/PageHeader";

export default function MockInterview() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const question = interviewQuestions[index];

  const next = () => {
    setIndex((i) => (i + 1) % interviewQuestions.length);
    setAnswer("");
    setSubmitted(false);
  };

  return (
    <div className="page">
      <PageHeader
        eyebrow="REFLECTION LAYER"
        title="Mock Interview"
        description="Practice with a sample interviewer flow and see how an evaluator could provide structured feedback."
        action={<button className="button button-secondary"><RotateCcw size={15} /> New session</button>}
      />

      <div className="interview-layout">
        <section className="interview-main">
          <div className="interview-session-bar">
            <div><span className="live-dot" /> Practice session</div>
            <span>Question {index + 1} of {interviewQuestions.length}</span>
          </div>

          <div className="interview-question">
            <div className="question-agent"><Bot size={19} /></div>
            <div>
              <div className="question-meta"><span>{question.category}</span><span>{question.difficulty}</span></div>
              <h2>{question.question}</h2>
            </div>
          </div>

          <div className="answer-box">
            <div className="answer-box-top"><span>Your answer</span><button className="mic-button"><Mic size={17} /> Voice</button></div>
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer here..." />
            <div className="answer-box-bottom">
              <span>{answer.length} characters</span>
              <button className="button button-primary" onClick={() => setSubmitted(true)}><Send size={15} /> Submit answer</button>
            </div>
          </div>

          {submitted && (
            <div className="feedback-card">
              <div className="feedback-heading"><div className="feedback-icon"><Sparkles size={17} /></div><div><strong>Evaluator Agent — sample feedback</strong><span>Based on a prototype rubric</span></div><div className="feedback-score">7.5/10</div></div>
              <div className="feedback-columns">
                <div><span className="feedback-label">What went well</span><p>Good understanding of the core concept. The answer can be made stronger with a concrete example.</p></div>
                <div><span className="feedback-label">Improve next</span><p>Compare the two concepts explicitly and mention a practical use case for each.</p></div>
              </div>
            </div>
          )}

          <div className="interview-navigation">
            <button className="button button-secondary" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}><ChevronLeft size={16} /> Previous</button>
            <button className="button button-primary" onClick={next}>Next question <ChevronRight size={16} /></button>
          </div>
        </section>

        <aside className="interview-side">
          <div className="interview-agent-card">
            <div className="agent-avatar"><Bot size={22} /></div>
            <div><strong>Interviewer Agent</strong><span>Asking role-specific questions</span></div>
            <span className="agent-online">Active</span>
          </div>

          <div className="interview-agent-card">
            <div className="agent-avatar evaluator"><Star size={19} /></div>
            <div><strong>Evaluator Agent</strong><span>Scores clarity & correctness</span></div>
            <span className="agent-online muted">Ready</span>
          </div>

          <div className="session-stats">
            <div><span>Current score</span><strong>7.5/10</strong></div>
            <div><span>Questions answered</span><strong>1 / 3</strong></div>
            <div><span>Interview readiness</span><strong>68%</strong></div>
          </div>

          <div className="interview-tip">
            <Sparkles size={16} />
            <div><strong>Interview tip</strong><p>Structure technical answers as: concept → example → trade-off.</p></div>
          </div>
        </aside>
      </div>

      <div className="demo-note"><UserRound size={15} /><span>This is a UI simulation of the proposed multi-agent interview workflow. No LLM is connected in this phase.</span></div>
    </div>
  );
}
