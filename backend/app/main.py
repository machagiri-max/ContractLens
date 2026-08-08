from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

# Models
from app.models.user import User
from app.models.contract import Contract

# Routers
from app.routers.auth import router as auth_router
from app.routers.ai import router as ai_router
from app.routers.contracts import router as contracts_router
from app.routers.chat import router as chat_router


app = FastAPI(
    title="ContractLens API",
    version="1.0.0",
)


# =========================================================
# DATABASE
# =========================================================

# Create tables if they don't already exist.
# IMPORTANT: Do NOT use drop_all() in production.
Base.metadata.create_all(bind=engine)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # Local development
        "http://localhost:5173",

        # Vercel production frontend
        "https://contract-lens-3c7l-phhe3pdji-machagirimudhiraj39-3571s-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# ROUTERS
# =========================================================

app.include_router(auth_router)
app.include_router(ai_router)
app.include_router(contracts_router)
app.include_router(chat_router)


# =========================================================
# ROOT
# =========================================================

@app.get("/")
def root():
    return {
        "message": "ContractLens Backend Running 🚀"
    }
    