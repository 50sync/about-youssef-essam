import type { ReactNode } from "react";
import './ContactInfo.css';

type ContactInfoModel = {
  icon: ReactNode;
  title: string;
  description: string;
};

type ContactInfoProps = {
  contactInfo: ContactInfoModel;
};

export default function ContactInfo({ contactInfo }: ContactInfoProps) {
  return (
    <div className="contact-info">
      <div className="contact-info-row">
        <div className="contact-info-icon">{contactInfo.icon}</div>
        <div className="contact-info-column">
          <div className="contact-info-title">{contactInfo.title}</div>
          <div className="contact-info-description">
            {contactInfo.description}
          </div>
        </div>
      </div>
    </div>
  );
}
