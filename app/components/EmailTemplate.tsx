import * as React from "react";

interface EmailTemplateProps {
  serviceType: string;
  location: string;
  suburb: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  details: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  serviceType,
  location,
  suburb,
  firstName,
  lastName,
  email,
  mobile,
  details,
}) => {
  const emailContent = `Client: ${firstName} ${lastName}
Address: ${location}
Suburb: ${suburb}
Mobile: ${mobile}
Home phone: 
Work phone: 
Email: ${email}
Service: ${serviceType}
Service Type: ${serviceType}
Date: 
Operator: 
Comments: ${details}`;

  return (
    <div style={main}>
      <div style={container}>
        <div style={section}>
          <pre style={preformatted}>{emailContent}</pre>
        </div>
        <hr style={divider} />

        <p style={footer}>
          © {new Date().getFullYear()} IT Tech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  borderRadius: "5px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

const section = {
  marginBottom: "24px",
};

const preformatted = {
  fontFamily: "inherit",
  fontSize: "18px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
  wordBreak: "break-word" as const,
  color: "#333",
  margin: 0,
  padding: 0,
};

const divider = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  fontSize: "12px",
  color: "#687087",
  textAlign: "center" as const,
  marginTop: "20px",
};

export default EmailTemplate;
