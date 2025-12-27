---
title: "(SAMPLE) Building a local RAG system for legal discovery"
description: "How we deployed a 5TB document search system without cloud APIs."
pubDate: 2025-11-18
tag: case-study
---

A law firm approached us with a problem: they needed to search through 5TB of discovery documents, but cloud APIs were too expensive and violated client privacy agreements.

## The Challenge

- 5TB of unstructured legal documents
- Sub-second search requirements
- Zero data egress (air-gapped environment)
- Budget constraints ruled out enterprise solutions

## Our Approach

We deployed a 3-node cluster using consumer hardware:
- 3x RTX 4090 GPUs
- Qdrant for vector storage
- Mistral 7B for document synthesis
- Custom embedding pipeline

## Results

- Sub-200ms query latency
- 100% local execution
- Hardware cost: $9,800
- Operational cost: $0/month (vs. $15k/month for cloud APIs)

The system paid for itself in the first month.
