import * as React from "react";

interface CustomerEmailTemplateProps {
  firstName: string;
}

export const CustomerEmailTemplate: React.FC<CustomerEmailTemplateProps> = ({
  firstName,
}) => (
  <div style={{ fontFamily: "'Arial', sans-serif" }}>
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#2A2559",
          padding: "20px",
          borderRadius: "8px 8px 0 0",
          textAlign: "center" as const,
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            margin: "0",
            fontSize: "24px",
          }}
        >
          Thanks for Reaching Out to IT Tech!
        </h1>
      </div>

      {/* Content */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "0 0 8px 8px",
          border: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#2C3E50",
            marginBottom: "20px",
          }}
        >
          Hi {firstName},
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#2C3E50",
            marginBottom: "20px",
          }}
        >
          Thanks for getting in touch with IT Tech – we&apos;ve received your
          enquiry and we&apos;re here to help!
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#2C3E50",
            marginBottom: "20px",
          }}
        >
          Whether you&apos;re looking for a TV antenna installation, CCTV setup,
          Starlink install, or help with Wi-Fi, data points, or tech support,
          one of our technicians will review your request and get back to you
          shortly.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#2C3E50",
            marginBottom: "20px",
          }}
        >
          In the meantime, feel free to reply to this email with any extra info,
          photos, or preferred times for us to visit.
        </p>

        {/* Service Info Box */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px 0",
              color: "#2C3E50",
            }}
          >
            📍 Areas we service: Wollongong, & surrounding suburbs
          </p>
          <p
            style={{
              margin: "0",
              color: "#2C3E50",
            }}
          >
            📞 Need urgent help? Give us a call on 0404123860
          </p>
        </div>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#2C3E50",
            marginBottom: "20px",
          }}
        >
          We look forward to assisting you!
        </p>

        {/* Signature */}
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "20px",
            color: "#2C3E50",
          }}
        >
          <p style={{ margin: "0 0 5px 0" }}>Best regards,</p>
          <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Robert Zhou</p>
          <p style={{ margin: "0 0 5px 0", color: "#64748b" }}>
            Owner / Technician
          </p>
          <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>IT Tech</p>
          <p style={{ margin: "0 0 5px 0" }}>📧 info@example.com.au</p>
          <p style={{ margin: "0" }}>🌐 www.aussietechmasters.com.au</p>
        </div>
      </div>
    </div>
  </div>
);
