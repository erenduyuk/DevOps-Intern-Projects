# EC2 Docker Compose

## Description

The EC2 Docker Compose project demonstrates how to deploy an application on an Amazon EC2 instance using Docker Compose. This project includes all necessary Docker Compose configuration files and application code to facilitate deployment.

This application saves database logs when the logging button is pressed on the website created with streamlit.

## Features

This project includes the following features:
- Docker Compose configuration for deploying an application on an EC2 instance.
- Dockerfile for building the application container.
- Application code and dependencies specified in `requirements.txt`.

## Files

The project contains the following files:

- `docker-compose.yaml`: This file contains the Docker Compose configuration.
- `app/Dockerfile`: This file contains the Dockerfile for building the application container.
- `app/app.py`: This file contains the main application code.
- `app/requirements.txt`: This file lists the Python dependencies required by the application.

## Installation

To install and set up this project on an EC2 instance, follow these steps:

1. Ensure that Docker and Docker Compose are installed on your EC2 instance. You can install Docker by following the instructions on the [Docker website](https://docs.docker.com/engine/install/). For Docker Compose, follow the instructions on the [Docker Compose installation page](https://docs.docker.com/compose/install/).

2. Clone the repository to your EC2 instance using the following command:

    ```bash
    git clone https://github.com/your-username/DevOps-Intern-Projects.git
    ```

3. Navigate to the project directory:

    ```bash
    cd DevOps-Intern-Projects/ec2-docker-compose
    ```

4. Start the application using Docker Compose:

    ```bash
    docker-compose up
    ```

This command will build the Docker image and start the application containers as specified in the `docker-compose.yaml` file.

## Usage

After deployment, you can access the application via the public IP address of your EC2 instance on the specified port. The port configuration can be found in the `docker-compose.yaml` file.

## Results

Upon successful deployment, the application should be accessible and running on your EC2 instance. You can verify the status of the running containers using the following command:

```bash
docker-compose ps
```

## Usage

### Whether kubernetes or docker compose ports are as follows

- streamlit 8501
- postgresql 5432
