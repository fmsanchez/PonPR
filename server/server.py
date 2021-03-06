from flask import Flask, render_template
from secrets import add_secrets

app = Flask(
    __name__,
    static_folder="../client/static",
    template_folder="../client/templates",
)


add_secrets(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/busqueda")
def search():
    return render_template("search.html")


@app.route("/viaje")
def trip():
    return render_template("trip.html")


@app.route("/publicar")
def publish():
    return render_template("publish.html")


if __name__ == "__main__":
    app.run()
