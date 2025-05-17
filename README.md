# Investment Sentiment Dashboard (AI + AWS Bedrock)

An AI-powered dashboard that analyzes financial news headlines using Amazon Bedrock's GenAI models, such as Claude or Titan, and classifies sentiment to assist investment decisions.
In summary, I deployede a JavaScript-based microservices architecture using Kubernetes and Infrastructure as Code (IaC) principles to support an AI-driven application. The solution was containerized for scalability and resilience, enabling rapid deployment and automated management across environments. This kind of architecture is especially beneficial for a wealth and asset management company, as it supports real-time data processing, secure AI model orchestration, and efficient scaling—all of which are critical for delivering intelligent financial insights and maintaining robust digital infrastructure.


## Features
- Node.js Express backend
- React frontend
- Sentiment analysis via AWS Bedrock
- Dockerized full stack
- Kubernetes deployment manifests
- GitHub Actions CI/CD pipeline for EKS

## Setup
1. Clone repo and configure `.env`
2. Run locally:
   ```bash
   docker-compose up --build
   ```
3. Access via [http://localhost:3000](http://localhost:3000)

## Kubernetes
Apply deployments using:
```bash
kubectl apply -f k8s/
```

## GitHub Actions
Secrets needed:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

CI/CD auto-deploys to AWS EKS on push to `main`.

## Author
Promise Enofe.
