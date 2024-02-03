from flask import Flask, request
from bot import get_case_description
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ans=get_case_description("murder")
# print(ans)
@app.route("/", methods=["POST"])
def main():
    msg = request.json["msg"]
    return get_case_description(msg)

if __name__ == "__main__":
    app.run(debug=True)
