from flask import Flask, render_template, request, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm 
from datetime import datetime
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired, Email, Length
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = 'Thisisasecret!'
db = SQLAlchemy(app)
Bootstrap(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = '/'
login = LoginManager(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/register.html', methods=['GET', 'POST'])
def register():
    form = RegisterForm()

    if form.validate_on_submit():
        hashed_password= generate_password_hash(form.password.data, method='sha256')
        new_user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return '<h1>New user has been created!</h2>'
        #return '<h1>' + form.username.data + ' ' + form.email.data + ' ' + form.password.data + '</h1>'
        
    return render_template("register.html", form=form)

class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(),Length(min=4, max=15)])
    password = StringField('password', validators=[InputRequired(), Length(min=6, max=80)])
    remember = BooleanField('remember me')

class RegisterForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(),Length(min=4, max=15)])
    email = StringField('email', validators=[InputRequired(), Email(message='Invalid email'), Length(max=50)])
    password = StringField('password', validators=[InputRequired(), Length(min=6, max=80)])

@app.route('/', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def index():
    form = LoginForm()
    
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if check_password_hash(user.password, form.password.data):
                login_user(user, remember=form.remember.data)
                return redirect(url_for('panel'))

        return '<h1>Invalid username or password</h1>' 
        # return '<h1>' + form.username.data + ' ' + form.password.data + '</h1>'
    
    if request.method == 'POST':
        lidosta = Lidosta(content=request.form['content'])
        new_rezervacija = Rezervacija(nolidostas=request.form['nolidostas'],uzlidostas=request.form['uzlidostas'], datumsno=request.form['datumsno'])
        try:
            db.session.add(lidosta)
            db.session.add(new_rezervacija)
            db.session.commit()
            return redirect('/')
        except:
            return "error"
    else:
        lidostas = Lidosta.query.order_by(Lidosta.date_created).all()
        tasks = Rezervacija.query.order_by(Rezervacija.id).all()
        
    return render_template('index.html', lidostas=lidostas, form=form, tasks=tasks)


class Lidosta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    saisinajums = db.Column(db.String(3), nullable=False)
    adrese = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return 'Lidosta %r' % self.id
    
class Rezervacija(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  nolidostas = db.Column(db.String(200), nullable=False)
  uzlidostas = db.Column(db.String(200), nullable=False)
  datumsno = db.Column(db.String(200), nullable=False)

  def __repr__(self):
        return 'Rezervacija %r' % self.id

class Lidmasina(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    modelis = db.Column(db.String(200), nullable=False)
    razosanas_gads = db.Column(db.String(3), nullable=False)
    vietu_skaits = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return 'Lidmasina %r' % self.id

@app.route('/panelPlanes.html', methods=['POST', 'GET'])
def lidmasina():
    if request.method == 'POST':
      new_lidmasina = Lidmasina(content=request.form['content'],modelis=request.form['modelis'], razosanas_gads=request.form['razosanas_gads'], vietu_skaits=request.form['vietu_skaits'])
      try:
        db.session.add(new_lidmasina)
        db.session.commit()
        return redirect('/panelPlanes.html')
      except:
        return "error"
    else:
      tasks = Lidmasina.query.order_by(Lidmasina.date_created).all()
      return render_template('/panelPlanes.html', tasks=tasks)

@app.route('/delete/<int:id>')
def delete_plane(id):
    task_to_delete = Lidmasina.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/panelPlanes.html')
    except:
        return "error"

@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    task = Lidmasina.query.get_or_404(id)

    if request.method == 'POST':
        task.content = request.form['content']
        task.modelis = request.form['modelis']
        task.razosanas_gads = request.form['razosanas_gads']
        task.vietu_skaits = request.form['vietu_skaits']

        try:
            db.session.commit()
            return redirect('/panelPlanes.html')
        except:
            return 'There was an issue updating your task'

    else:
        return render_template('panelPlanesUpdate.html', task=task)

@app.route('/secondlpp.html')
def secondlpp():
    return render_template("secondlpp.html")

@app.route('/reservation.html')
def reservation():
    return render_template("reservation.html")

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
@login_required
def panel():
    return render_template("panel.html", name=current_user.username, email=current_user.email)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/panelPlanes.html')
def panelPlanes():
    return render_template("panelPlanes.html")

@app.route('/panelPlanesUpadte.html')
def panelPlanesUpadte():
    return render_template("panelPlanesUpadte.html")

@app.route('/latvia.html')
def latvia():
    return render_template("countries/latvia.html")

@app.route('/Netherlands.html')
def netherlands():
    return render_template("countries/Netherlands.html")

@app.route('/Norway.html')
def norway():
    return render_template("countries/Norway.html")

@app.route('/Romania.html')
def romania():
    return render_template("countries/Romania.html")

@app.route('/Russia.html')
def russia():
    return render_template("countries/Russia.html")

@app.route('/Spain.html')
def spain():
    return render_template("countries/Spain.html")

@app.route('/USA.html')
def usa():
    return render_template("countries/USA.html")

@login.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class MyModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated

    def is_inaccessible(self, name, **kwargs):
        return redirect(url_for('panel'))

admin = Admin(app)
admin.add_view(MyModelView(User, db.session))
admin.add_view(MyModelView(Lidmasina, db.session))
admin.add_view(MyModelView(Lidosta, db.session))

@app.route('/login')
def login():
    user = User.query.get(2)
    login_user(user)
    return 'Logged in!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)