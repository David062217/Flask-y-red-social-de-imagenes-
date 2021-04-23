import os
from flask import Flask, url_for, render_template

def create_app():
    app = Flask(__name__)

    app.config.from_mapping (
        SECRET_KEY= 'mikey',
        DATABASE_HOST =os.environ.get('FLASK_DATABASE_HOST'),
        DATABASE_PASSWORD =os.environ.get('FLASK_DATABASE_PASSWORD'),
        DATABASE_USER =os.environ.get('FLASK_DATABASE_USER'),
        DATABASE =os.environ.get('FLASK_DATABASE')
    )

    @app.route('/')
    def home():
        return render_template('index.html')
    
    return app