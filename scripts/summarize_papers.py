from transformers import pipeline

def summarize_papers(papers):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summaries = [summarizer(paper['content']) for paper in papers]
    return summaries

if __name__ == '__main__':
    import sys
    papers = sys.argv[1]
    summaries = summarize_papers(papers)
    print(summaries)
