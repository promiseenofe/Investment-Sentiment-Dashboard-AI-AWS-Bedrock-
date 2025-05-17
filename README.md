# Investment Sentiment Dashboard (AI + AWS Bedrock)

An AI-powered dashboard that analyzes financial news headlines using Amazon Bedrock's GenAI models, such as Claude or Titan, and classifies sentiment to assist investment decisions.

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
