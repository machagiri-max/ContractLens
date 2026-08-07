from fastapi import APIRouter

from app.schemas.chat import ChatRequest
from app.services.rag.chroma_service import search_contract
from app.services.ai.groq import analyze_contract

router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"],
)


@router.post("/")
def chat(request: ChatRequest):

    # Search relevant contract text
    contract_text = search_contract(request.question)

    prompt = f"""
You are an expert contract lawyer.

Use ONLY the contract below.

Answer the user's question clearly.

Contract:
{contract_text}

Question:
{request.question}
"""

    answer = analyze_contract(prompt)

    return {
        "question": request.question,
        "answer": answer,
    }