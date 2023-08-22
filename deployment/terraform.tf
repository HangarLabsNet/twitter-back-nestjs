terraform {
  cloud {
    workspaces {
      name = "live-aws-ue1-lambda"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      scope = "test"
    }
  }
}
