from fastapi import APIRouter
from app.services.ai.groq import analyze_contract

router = APIRouter(
    prefix="/api/ai",
    tags=["AI"],
)


@router.get("/test")
def test_ai():

    sample_contract = """
    This employment agreement states that the employee
    will receive a salary of ₹50,000 per month.

    Either party may terminate the agreement with
    30 days written notice.

    Confidential company information must not be shared.
    """

    result = analyze_contract(sample_contract)

    return {
        "ai_report": result
    }