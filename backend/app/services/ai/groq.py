from groq import Groq

from app.config import GROQ_API_KEY, GROQ_MODEL

client = Groq(api_key=GROQ_API_KEY)


def analyze_contract(text: str):

    print("GROQ MODEL:", GROQ_MODEL)
    print("GROQ API KEY EXISTS:", bool(GROQ_API_KEY))

    response = client.chat.completions.create(
        model=GROQ_MODEL,
        messages=[
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=0.2,
    )

    return response.choices[0].message.content