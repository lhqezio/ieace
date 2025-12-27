---
title: "(SAMPLE) Evaluating open-weight models for production"
description: "A framework for testing local LLMs against your actual use case."
pubDate: 2025-11-08
tag: research
---

Everyone asks: "Which open-weight model should I use?"

Wrong question. The right question is: "Which model works best for *my* data?"

## Our Evaluation Framework

We built a standardized testing pipeline for clients considering local deployment:

### 1. Task Definition
- Extract 100-500 real examples from production
- Define success criteria (accuracy, latency, cost)
- Set baseline using current solution (GPT-4, human labor, etc.)

### 2. Model Selection
- Start with Llama 3 8B (baseline)
- Test Mistral 7B (efficiency)
- Test Mixtral 8x7B (quality)
- Fine-tune best performer if needed

### 3. Metrics That Matter
- **Accuracy**: Does it match human judgment?
- **Latency**: Can it hit your SLA?
- **Cost**: Hardware + electricity vs. API fees

## Results

In 80% of cases, a fine-tuned 7B model beats GPT-4 on domain-specific tasks.

The other 20%? Use GPT-4. Not everything needs to be local.
