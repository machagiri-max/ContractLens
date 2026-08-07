import os
import shutil

from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.services.rag.chroma_service import store_contract
from app.database import get_db
from app.models.contract import Contract

from app.services.pdf.pdf_service import extract_text
from app.services.pdf.contract_parser import extract_contract_details
from app.services.ai.groq import analyze_contract


router = APIRouter(
    prefix="/api/contracts",
    tags=["Contracts"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_contract(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    # Save uploaded PDF
    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename,
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract PDF text
    text = extract_text(filepath)

    # Extract important contract details
    details = extract_contract_details(text)

    # AI Analysis
    ai_report = analyze_contract(text)

    # Save contract in database
    contract = Contract(
        filename=file.filename,
        file_path=filepath,
    )

    db.add(contract)
    db.commit()
    db.refresh(contract)
    store_contract(
    contract.id,
    text,
)

    return {
        "message": "Contract uploaded successfully",
        "contract_id": contract.id,
        "filename": contract.filename,
        "details": details,
        "ai_report": ai_report,
    }