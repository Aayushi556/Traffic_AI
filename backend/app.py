
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.predict import router
from database.database import (
    create_table,
    create_users_table,
    create_otp_table
)
from auth.auth import router as auth_router
app = FastAPI(title="Traffic AI")

create_table()
create_users_table()
create_otp_table()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(auth_router)












