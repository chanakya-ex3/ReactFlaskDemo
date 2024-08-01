FROM python:3.11

WORKDIR /app/backend

COPY requirements.txt .

RUN pip --no-cache install -r requirements.txt

COPY . .

EXPOSE 3000

ENTRYPOINT [ "python","app.py" ]