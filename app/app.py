from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="./static"), name="static")

templates = Jinja2Templates(directory="./templates")


@app.get("/", response_class=HTMLResponse)
async def get_profile(request: Request):
    return templates.TemplateResponse("pages/profile.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def get_profile(request: Request):
    return templates.TemplateResponse("pages/about.html", {"request": request})


@app.get("/zajel", response_class=HTMLResponse)
async def get_profile(request: Request):
    return templates.TemplateResponse("pages/projects/zajel.html", {"request": request})


@app.get("/organizer", response_class=HTMLResponse)
async def get_profile(request: Request):
    return templates.TemplateResponse(
        "pages/projects/organizer.html", {"request": request}
    )


@app.get("/vision", response_class=HTMLResponse)
async def get_profile(request: Request):
    return templates.TemplateResponse(
        "pages/projects/e-dentist.html", {"request": request}
    )
