# K8S-DEMO

## Description

This project demonstrates the use of Kubernetes to deploy a MongoDB instance and a web application.

## Features

- Kubernetes deployment configurations for MongoDB
- Kubernetes deployment configurations for a web application
- Secret management using Kubernetes

## Files

- `mongo-config.yaml`: Configuration for MongoDB
- `mongo-secret.yaml`: Secret configuration for MongoDB
- `mongo.yaml`: Deployment configuration for MongoDB
- `webapp.yaml`: Deployment configuration for the web application

## Installation

Ensure you have Kubernetes installed and configured.

```bash
# Apply the configurations
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-config.yaml
kubectl apply -f mongo.yaml
kubectl apply -f webapp.yaml

# Get the status of the pods
kubectl get pods

# Get the status of the services
kubectl get services
