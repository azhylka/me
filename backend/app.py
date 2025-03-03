from flask import Flask, jsonify
from your_combined_script import combine_publications

app = Flask(__name__)

ORCID_ID = "your_orcid_id"
BIBTEX_FILE = "path/to/your.bib"

@app.route('/api/publications', methods=['GET'])
def get_publications():
    publications = combine_publications(ORCID_ID, BIBTEX_FILE)
    return jsonify(publications)

if __name__ == "__main__":
    app.run(debug=True)

