# server.py
from flask import Flask, render_template


app = Flask(__name__, static_folder="../client/bundles", template_folder="../client/templates")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
