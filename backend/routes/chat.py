from fastapi import APIRouter

router = APIRouter()

@router.post("/chat")
def chat(message : dict):
    return{
        "reply" : "Message recieved successfully"
    }