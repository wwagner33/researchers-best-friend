import requests

def search_papers(query, start_date, end_date, paper_type, impact_factor):
    # Implement search logic for Science Direct and IEEE Xplore
    pass

if __name__ == '__main__':
    import sys
    query = sys.argv[1]
    start_date = sys.argv[2]
    end_date = sys.argv[3]
    paper_type = sys.argv[4]
    impact_factor = sys.argv[5]
    search_papers(query, start_date, end_date, paper_type, impact_factor)
