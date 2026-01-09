import ContactInfo from "../ContactInfo/ContactInfo";
import { CgMail } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import "./ContactSection.css";

const contactInfoList = [
  {
    icon: <CgMail />,
    title: "Email",
    description: "youssefessam.work@gmail.com",
  },
  {
    icon: <BiPhone />,
    title: "Phone",
    description: "+201099870599",
  },
  {
    icon: <CiLocationOn />,
    title: "Location",
    description: "Egypt, Cairo",
  },
];

export default function ContactSection() {
  return (
    <div className="contact-section section-style">
      <div className="contact-section-content">
        <div className="contact-section-title-description-column">
          <div className="contact-title section-title">Get In Touch</div>
          <div className="contact-description section-description">
            Have a project in mind or want to collaborate? Let's connect and
            build something amazing together.
          </div>
        </div>
        <div className="contact-informations" id="contact-section">
          {contactInfoList.map((contactInfo, index) => {
            return <ContactInfo key={index} contactInfo={contactInfo} />;
          })}
        </div>
      </div>
    </div>
  );
}
