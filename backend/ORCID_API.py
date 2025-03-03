import requests

def fetch_publications(orcid_id):
    url = f"https://pub.orcid.org/v3.0/{orcid_id}/works"
    headers = {'Accept': 'application/json'}
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        publications = []
        for work in data.get("group", []):
            title = work["work-summary"][0]["title"]["title"]["value"]
            doi = work["work-summary"][0].get("external-ids", {}).get("external-id", [])[0].get("external-id-value", "")
            link = f"https://doi.org/{doi}" if doi else ""
            publications.append({
                "title": title,
                "doi": doi,
                "link": link,
                "source": "ORCID",
            })
        return publications
    else:
        return []

