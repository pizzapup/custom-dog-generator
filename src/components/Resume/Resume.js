import { ResumeSection, SocialIcon } from "./ResumeSection";
import { ResumeQR } from "./ResumeQR";
import Data from "./data";
import "./Resume.css";

const ResumeHeader = () => (
  <h1 className="resume-header">
    <div className="resume-header-name resume-header-section">
      <span>{Data.fName} </span>
      <span>{Data.lName}</span>
    </div>
    <div className="resume-header-section resume-header-divider">
      <span className="sr-only">resume</span>
    </div>
    <div className="resume-header-description resume-header-section">
      <span>{Data.primaryTitle} & </span>
      <span> {Data.secondaryTitle}</span>
    </div>
  </h1>
);
const ResumeSummary = () => (
  <div className="resume-summary">
    {/* <h2>Summary</h2> */}
    {Data.summary}
  </div>
);
export default function Resume() {
  return (
    <>
      <div className="resume">
        <div className="resume-top">
          <ResumeHeader />
          <ResumeSection section="socials" />
        </div>
        <div className="resume-divider">
          <div className="resume-main">
            <ResumeSummary />
            <ResumeSection section="experience" title="Work Experience" />
          </div>
          <div className="resume-sidebar">
            <ResumeQR />
            <ResumeSection section="skills" title="Main Skills" />
            <ResumeSection section="history" title="Job History" />
          </div>
        </div>
      </div>
    </>
  );
}
