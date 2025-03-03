import bibtexparser

def parse_bibtex(file_path):
    with open(file_path, "r") as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)
    
    publications = []
    for entry in bib_database.entries:
        publications.append({
            "title": entry.get("title", "No Title"),
            "doi": entry.get("doi", ""),
            "link": f"https://doi.org/{entry.get('doi', '')}" if entry.get("doi") else "",
            "source": "BibTeX",
        })
    return publications

