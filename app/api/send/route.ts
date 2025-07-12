// app/api/send/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/app/components/EmailTemplate";
import { CustomerEmailTemplate } from "@/app/components/CustomerEmailTemplate";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the required fields
    const {
      serviceType,
      location,
      suburb,
      firstName,
      lastName,
      email,
      mobile,
      details,
    } = body;

    if (
      !serviceType ||
      !location ||
      !suburb ||
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !details
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      // Send notification email to business
      const businessEmail = await resend.emails.send({
        from: "hi@patrickyu.work",
        to: "hi@patrickyu.work",
        subject: `New Quote Request from ${firstName} ${lastName}`,
        react: EmailTemplate(body) as React.ReactElement,
      });

      // Send confirmation email to customer
      const customerEmail = await resend.emails.send({
        from: "hi@patrickyu.work",
        to: email,
        subject: "Thanks for Reaching Out to IT Tech!",
        react: CustomerEmailTemplate({ firstName }) as React.ReactElement,
      });

      if (businessEmail.error || customerEmail.error) {
        console.error(
          "Resend API error:",
          businessEmail.error || customerEmail.error
        );
        return NextResponse.json(
          {
            error: "Failed to send email. Please try again later.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          businessEmail: businessEmail.data,
          customerEmail: customerEmail.data,
        },
      });
    } catch (resendError) {
      console.error("Resend API error details:", {
        error: resendError,
        stack: resendError instanceof Error ? resendError.stack : undefined,
        message:
          resendError instanceof Error ? resendError.message : "Unknown error",
      });

      return NextResponse.json(
        {
          error: "Failed to process email request. Please try again later.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
