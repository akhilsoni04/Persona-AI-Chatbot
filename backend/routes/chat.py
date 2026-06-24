from fastapi import APIRouter
from services.llm_service import generate_response

router = APIRouter()

@router.post("/chat")
def chat(message: dict):

    user_message = message.get("message", "")

    reply = generate_response(user_message)

    return {
        "reply": reply
    }