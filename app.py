from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config.update(dict(
    DEBUG = True,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USE_SSL = False,
    MAIL_USERNAME = 'jackwinford@gmail.com',
    MAIL_PASSWORD = 'tflddtifuphyused',
))

mail = Mail(app)

@app.route("/", methods=["POST", "GET"])
def display_home():
    if request.method == "POST":
        msg = Message(
                    subject="From Portfolio Site",
                    body=request.form['content'] + " From: " + request.form['mail'],
                    sender="jackwinford@gmail.com",
                    recipients=["jackwinford@gmail.com"])
        mail.send(msg)
    return render_template("home.html")