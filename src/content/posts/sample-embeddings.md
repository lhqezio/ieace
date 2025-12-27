---
title: "(SAMPLE) Why embeddings matter more than model size"
description: "The overlooked component of RAG systems."
pubDate: 2025-11-06
tag: research
---

Everyone obsesses over which LLM to use. Almost nobody thinks about embeddings.

This is backwards.

## The Math

In a RAG system:
- Embedding quality determines what context your LLM sees
- LLM quality determines what it does with that context

Bad embeddings + great LLM = bad results
Great embeddings + decent LLM = good results

## What We Tested

We ran experiments with 3 embedding models on a legal document corpus:

1. **OpenAI ada-002**: Fast, expensive, mediocre recall
2. **Sentence-BERT**: Free, slow, poor domain fit
3. **Fine-tuned E5-large**: Free, fast, 40% better recall

## The Takeaway

Spend time on your embedding strategy. It's the difference between a RAG system that works and one that hallucinates.

Most companies skip this step. Don't be most companies.
