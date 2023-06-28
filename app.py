from os import path

from flask import Flask, render_template
from flask_frozen import Freezer

template_folder = path.abspath('wikis')
static_folder = path.abspath('static')

app = Flask(__name__, template_folder=template_folder, static_folder=static_folder, static_url_path='')
# app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)


@app.cli.command()
def freeze():
    freezer.freeze()


@app.cli.command()
def serve():
    freezer.run()


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/<page>')
def pages(page):
    if '.html' in page:
        return render_template(page.lower())
    # for PWA
    if 'manifest.json' in page:
        return app.send_static_file('manifest.json')
    return render_template(page.lower() + '.html')


# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
