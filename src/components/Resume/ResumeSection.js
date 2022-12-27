import SocialIcons from "../../assets/icons/SocialIcons";
import Data from "./data";

const ResumeListMap = ({ section, sectionKey, item }) => (
  <>
    <h3>{item.title}</h3>
    <ul className="rs-inner-list ">
      {section === "history" && <ResumeHist item={item} />}
      {item.points.map((point, index) => (
        <li key={`${sectionKey}-${index}`}>{point}</li>
      ))}
    </ul>
  </>
);
const Socials = () => {
  return (
    <>
      {Data.socials.map((item, index) => (
        <a title={item.name} {...item.data}>
          <span>{SocialIcons[item.iconImg]}</span>
          {item.social}
        </a>
      ))}
    </>
  );
};
export const SocialIcon = ({ icon = "github" }) => {
  const nums = {
    linkedin: 0,
    github: 1,
    instagram: 2,
    email: 3,
    pdf: 4,
    website: 5,
  };
  const item = Data.socials[nums[icon]];
  return (
    <li className="resume-socials-link">
      <a title={item.name} {...item.data}>
        <span>{SocialIcons[item.iconImg]}</span>
        {item.social}
      </a>
    </li>
  );
};
const ResumeHist = ({ item }) => (
  <p>
    {item.location} | {item.dates}
    <br /> {item.company}
  </p>
);

export const ResumeSection = ({ section, title }) => {
  const list = Data[section];
  return (
    <>
      <div className={`resume-section resume-${section}`}>
        {section === "socials" ? (
          <h2 className="sr-only">Social media links</h2>
        ) : (
          <h2>
            <span>{title ? title : section}</span>
          </h2>
        )}
        <ul className="rs-outer-list ">
          {section !== "socials" ? (
            <>
              {list.map((item, index) => (
                <li
                  key={`${section}-${index}`}
                  className={`${section}-${index}`}
                >
                  <ResumeListMap
                    section={section}
                    sectionKey={`${section}-${index}`}
                    item={item}
                  />
                </li>
              ))}
            </>
          ) : (
            <Socials />
          )}
        </ul>
      </div>
    </>
  );
};
