# from fastapi import APIRouter
# from auth.schemas import (
#     SignupRequest,
#     LoginRequest,
#     ForgotPasswordRequest
# )
# from auth.security import hash_password,verify_password,create_access_token
# from database.database import (
#     create_user,
#     get_user_by_email,
#     save_otp
# )
# import random
# from services.email_service import send_otp_email
# router = APIRouter()
# @router.post("/signup")
# def signup(request: SignupRequest):

#     # Check email already exists
#     existing_user = get_user_by_email(request.email)

#     if existing_user:
#         return {
#             "success": False,
#             "message": "Email already registered."
#         }

#     # Hash password
#     hashed_password = hash_password(request.password)

#     # Save user
#     create_user(
#         request.name,
#         request.email,
#         hashed_password
#     )

#     return {
#         "success": True,
#         "message": "Account created successfully."
#     }

# @router.post("/login")
# def login(request: LoginRequest):

#     # Check if user exists
#     user = get_user_by_email(request.email)

#     if user is None:
#         return {
#             "success": False,
#             "message": "Invalid email or password."
#         }

#     # Verify password
#     if not verify_password(
#         request.password,
#         user["password"]
#     ):
#         return {
#             "success": False,
#             "message": "Invalid email or password."
#         }

#     # Generate JWT Token
#     access_token = create_access_token({
#         "user_id": user["id"],
#         "email": user["email"]
#     })

#     return {
#         "success": True,
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "id": user["id"],
#             "name": user["name"],
#             "email": user["email"]
#         }
#     }
# @router.post("/forgot-password")
# def forgot_password(request: ForgotPasswordRequest):

#     user = get_user_by_email(request.email)

#     if user is None:
#         return {
#             "success": False,
#             "message": "Email not registered."
#         }

#     otp = random.randint(100000, 999999)

#     print("OTP:", otp)

#     return {
#         "success": True,
#         "message": "OTP generated successfully."
#     }
# @router.post("/forgot-password")
# def forgot_password(request: ForgotPasswordRequest):

#     user = get_user_by_email(request.email)

#     if user is None:
#         return {
#             "success": False,
#             "message": "Email not registered."
#         }

#     otp = str(random.randint(100000, 999999))

#     save_otp(
#         request.email,
#         otp
#     )

#     # Send OTP to Gmail
#     send_otp_email(
#         request.email,
#         otp
#     )

#     return {
#         "success": True,
#         "message": "OTP sent successfully."
#     }
from fastapi import APIRouter
from auth.schemas import (
    SignupRequest,
    LoginRequest,
    ForgotPasswordRequest
)

from auth.security import (
    hash_password,
    verify_password,
    create_access_token
)

from database.database import (
    create_user,
    get_user_by_email,
    save_otp
)

from services.email_service import send_otp_email

import random

router = APIRouter()


# ==========================
# SIGNUP
# ==========================

@router.post("/signup")
def signup(request: SignupRequest):

    existing_user = get_user_by_email(request.email)

    if existing_user:
        return {
            "success": False,
            "message": "Email already registered."
        }

    hashed_password = hash_password(request.password)

    create_user(
        request.name,
        request.email,
        hashed_password
    )

    return {
        "success": True,
        "message": "Account created successfully."
    }


# ==========================
# LOGIN
# ==========================

@router.post("/login")
def login(request: LoginRequest):

    user = get_user_by_email(request.email)

    if user is None:
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    if not verify_password(
        request.password,
        user["password"]
    ):
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    access_token = create_access_token({
        "user_id": user["id"],
        "email": user["email"]
    })

    return {
        "success": True,
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }


# ==========================
# FORGOT PASSWORD
# ==========================

@router.post("/forgot-password")
def forgot_password(request: ForgotPasswordRequest):

    user = get_user_by_email(request.email)

    if user is None:
        return {
            "success": False,
            "message": "Email not registered."
        }

    otp = str(random.randint(100000, 999999))

    save_otp(
        request.email,
        otp
    )

    try:

        send_otp_email(
            request.email,
            otp
        )

        return {
            "success": True,
            "message": "OTP sent successfully."
        }

    except Exception as e:

        print(e)

        return {
            "success": False,
            "message": str(e)
        }