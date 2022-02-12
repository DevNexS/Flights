from flask import Flask, render_template, url_for

app = Flask('app')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/secondlpp.html')
def secondlpp():
    return render_template("secondlpp.html")

@app.route('/login.html')
def login():
    return render_template("login.html")

@app.route('/register.html')
def register():
    return render_template("register.html")

@app.route('/airports.html')
def airports():
    return render_template("footerPages/airports.html")

@app.route('/aboutUs.html')
def aboutUs():
    return render_template("footerPages/aboutUs.html")

@app.route('/advertisingOffer.html')
def advertisingOffer():
    return render_template("footerPages/advertisingOffer.html")

@app.route('/cities.html')
def cities():
    return render_template("footerPages/cities.html")

@app.route('/confidentiality.html')
def confidentiality():
    return render_template("footerPages/confidentiality.html")

@app.route('/countries.html')
def countries():
    return render_template("footerPages/countries.html")

@app.route('/onWeekend.html')
def onWeekend():
    return render_template("footerPages/onWeekend.html")

@app.route('/reference.html')
def reference():
    return render_template("footerPages/reference.html")

@app.route('/settings.html')
def settings():
    return render_template("footerPages/settings.html")

@app.route('/panel.html')
def panel():
    return render_template("panel.html")

app.run(host='0.0.0.0', port=8080)