import google.generativeai as genai
from config.settings import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")

def load_prompt():
    with open("prompts/mentor_prompt.txt", "r", encoding="utf-8") as file:
        return file.read()

def generate_response(message: str) -> str:
    try:
        system_prompt = load_prompt()

        full_prompt = f"""
{system_prompt}

User: {message}
"""

        response = model.generate_content(full_prompt)

        return response.text

    except Exception as e:
        print(f"Gemini Error: {e}")
        if "429" in str(e):
            return "AI Mentor is temporarily busy. Please try again in a few seconds."
        