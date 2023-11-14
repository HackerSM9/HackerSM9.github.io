from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("C:\\Users\\Acer One\\GitHub\\HackerSM9.github.io\\templates\\index.html")

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)