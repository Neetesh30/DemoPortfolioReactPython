from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Portfolio API Running"
    }