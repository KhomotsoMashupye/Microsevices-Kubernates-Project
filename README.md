# 📦 Docker-k8s-Orchestration  
### Multi-Service Docker & Kubernetes Deployment

---

## Project Overview

This project demonstrates a **full-stack microservices architecture** deployed with **Docker and Kubernetes**. It includes:

- **Frontend service** (Express.js)  
- **Users service** (Express.js + DynamoDB)  
- **Orders service** (Express.js + DynamoDB)  

The goal is to showcase **containerization, internal service communication, and Kubernetes orchestration** for microservices.


---

## Architecture

### Service Flow

1. **Frontend service** serves client requests and communicates with backend services.  
2. **Users service** manages user data and exposes REST endpoints.  
3. **Orders service** manages order data and exposes REST endpoints.  
4. All services are **containerized with Docker** and deployed to Kubernetes.  
5. **ClusterIP Services** allow internal communication between services in the cluster.  

### Technology Stack

- **Node.js & Express** – application logic for each microservice  
- **AWS DynamoDB** – backend database for users and orders  
- **Docker** – containerization for each service  
- **Kubernetes (K8s)** – deployment and service orchestration  
- **ClusterIP Services** – internal communication between pods  

---

## Repo Structure

```text
microservices-k8s-demo/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── users/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── orders/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── k8s-manifests/
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── users-deployment.yaml
│   ├── users-service.yaml
│   ├── orders-deployment.yaml
│   └── orders-service.yaml
└── README.md
