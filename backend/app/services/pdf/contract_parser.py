import re


def extract_contract_details(text: str):
    details = {
        "title": "Unknown",
        "effective_date": "Not Found",
        "payment_terms": "Not Found",
        "termination": "Not Found",
        "confidentiality": "Not Found",
        "liability": "Not Found",
    }

    lines = text.split("\n")

    if lines:
        details["title"] = lines[0][:100]

    date = re.search(r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b", text)

    if date:
        details["effective_date"] = date.group()

    for line in lines:

        lower = line.lower()

        if "payment" in lower:
            details["payment_terms"] = line.strip()

        if "termination" in lower:
            details["termination"] = line.strip()

        if "confidential" in lower:
            details["confidentiality"] = line.strip()

        if "liability" in lower:
            details["liability"] = line.strip()

    return details