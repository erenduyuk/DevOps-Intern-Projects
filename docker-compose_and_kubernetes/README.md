# Docker Compose and Kubernetes

## Description

This project combines Docker Compose and Kubernetes for deploying a FastAPI application, PostgreSQL database, and Streamlit application. 

This application calculates whether you can survive on the Titanic based on the values ​​entered on the website created with Streamlit. This calculation is made with the titanic_model.sav model in the fastapi folder. And then it saves this result to the database.

![Ekran Resmi 2024-07-09 11 34 33](https://github.com/erenduyuk/DevOps-Intern-Projects/assets/106580963/4f58f709-1c5f-4fe4-bc8a-2b1c35146624)

## Features

- Docker Compose configuration for local development
- Kubernetes configurations for production deployment


- `docker-compose.yml`: Docker Compose configuration
- `fastapi-config.yaml`: Kubernetes config for FastAPI
- `fastapi.yaml`: Kubernetes deployment for FastAPI
- `postgre-config.yaml`: Kubernetes config for PostgreSQL
- `postgre-secret.yaml`: Secret configuration for PostgreSQL
- `postgre.yaml`: Kubernetes deployment for PostgreSQL
- `streamlit.yaml`: Kubernetes deployment for Streamlit

### FastAPI

- `fastapi/Dockerfile`
- `fastapi/main.py`
- `fastapi/models.py`
- `fastapi/requirements.txt`
- `fastapi/titanic_model.sav`

### Streamlit

- `streamlit/Dockerfile`
- `streamlit/app.py`
- `streamlit/requirements.txt`

## Installation

For Docker Compose:

```bash
docker-compose up
```

For Kubernetes:

```bash
# Apply the PostgreSQL secret configuration
kubectl apply -f postgre-secret.yaml

# Apply the PostgreSQL configuration
kubectl apply -f postgre-config.yaml

# Deploy the PostgreSQL instance
kubectl apply -f postgre.yaml

# Apply the FastAPI configuration
kubectl apply -f fastapi-config.yaml

# Deploy the FastAPI application
kubectl apply -f fastapi.yaml

# Deploy the Streamlit application
kubectl apply -f streamlit.yaml
```

## Usage

### Whether kubernetes or docker compose ports are as follows

- streamlit 8501
- fastapi 8000
- postgresql 5432

## Note

This project was developed based on `https://github.com/kaveai/docker-compose-example.git`
