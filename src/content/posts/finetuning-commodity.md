---
title: "Fine-tuning llama on commodity hardware"
description: "LoRA + quantization = state of the art on a budget."
pubDate: 2025-11-05
tag: case-study
---

You don't need A100s to fine-tune state-of-the-art models.

We recently fine-tuned Llama 3 8B for a medical coding task using:
- 2x RTX 3090s
- QLoRA
- 4 hours of compute

Accuracy improved from 65% (base model) to 94%.

Hardware is not the bottleneck. Knowledge is.
