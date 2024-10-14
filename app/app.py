from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="./static"), name="static")

templates = Jinja2Templates(directory="./templates")


@app.get("/{username}", response_class=HTMLResponse)
async def get_profile(request: Request, username: str):
    user_data = {"name": username, "bio": "This is a sample bio"}  # Example data
    return templates.TemplateResponse(
        "profile.html", {"request": request, "user": user_data}
    )
