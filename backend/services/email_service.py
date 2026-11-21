import os
import smtplib
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

EMAIL = os.getenv("EMAIL")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")


def send_otp_email(receiver_email: str, otp: str):
    print("EMAIL =", EMAIL)
    print("PASSWORD =", EMAIL_PASSWORD)
    print("Receiver =", receiver_email)
    try:
        msg = MIMEMultipart()

        msg["From"] = EMAIL
        msg["To"] = receiver_email
        msg["Subject"] = "Traffic AI - Password Reset OTP"

        body = f"""
Hello,

Your OTP is: {otp}

Regards,
Traffic AI Team
"""

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        print("EMAIL :", EMAIL)
        print("PASSWORD :", EMAIL_PASSWORD)

        server.login(EMAIL, EMAIL_PASSWORD)
        print("Logged into Gmail")
        server.send_message(msg)
        print("Mail Sent Successfully")
        server.quit()

        print("EMAIL SENT SUCCESSFULLY")

    except Exception as e:
        print("EMAIL ERROR :", e)