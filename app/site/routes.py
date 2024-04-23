from flask import Blueprint, render_template, session
from flask import flash, redirect, url_for, request, json
from forms import UserLoginForm
from flask_login import login_user, logout_user, LoginManager, current_user, login_required


site = Blueprint('site', __name__, template_folder = 'site_templates')

@site.route('/')
def home():
    form = UserLoginForm()
    return render_template('index.html', form=form)

@site.route('/learn')
def learn():
    form = UserLoginForm()
    return render_template('learn.html', form=form)

@site.route('/marketplaces')
def market():
    form = UserLoginForm()
    return render_template('market_place.html', form=form)

@site.route('/imagine')
def imagine():
    return render_template('imagine.html')