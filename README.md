# DevOps Practical Exam

## 🛠 Pipeline Stages

1. **Terraform**: Provisions Azure infra (RG, App Service Plan, ACR, Web App)
2. **Build & Push**: Builds Docker image of the Node.js app, tags with `latest` and build ID, pushes to ACR
3. **Deploy Web App**: Deploys container from ACR to Azure Web App using the tagged image

## 🚀 Deployment Flow

- Developer merges code → triggers pipeline
- Terraform deploys infra and outputs ACR and Web App details
- Docker job builds image locally and pushes to ACR
- Final job updates Web App in Azure to use the new image tag

## 🔐 Secrets Management

- Azure service connection handles Terraform creds via `ARM_*` variables
- Docker release credentials and Web App deployment handled by Azure DevOps service principal
- **In production**, secrets should be in secure vaults:
  - Terraform: Azure Key Vault provider or `terraform cloud`
  - Pipeline: Azure DevOps Library variable groups/key vault-backed secrets

## 📂 Repo Structure

/
├─ app/ # Node‑app + Dockerfile
├─ terraform/ # TF scripts for infra
├─ azure-pipelines.yml # CI/CD pipeline steps
└─ README.md


## ✅ How to Run Locally

1. Build and test Docker image in `app/`
2. Run `terraform init` & `apply` in `terraform/`
3. Commit & push to trigger pipeline
