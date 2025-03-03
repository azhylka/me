import requests
from bs4 import BeautifulSoup

def get_abstract_and_figures(doi):
    url = f"https://doi.org/{doi}"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    abstract = soup.find('abstract').text if soup.find('abstract') else "No abstract found"
    figures = [img['src'] for img in soup.find_all('img') if 'figure' in img['src']]
    
    return {"abstract": abstract, "figures": figures}


