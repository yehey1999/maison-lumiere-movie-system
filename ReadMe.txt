Static Files
    All static files (images, js, css) are located in the static folder.
    In order for it to run, you need to do the following:
        1. On your main project directory (maison_lumiere_movie_project), go to settings.py
        2. At the bottom of the page, under STATIC_URL:
            STATICFILES_DIR = [os.path.join(BASE_DIR, 'static']
            STATIC_ROOT = os.path.join(BASE_DIR, 'assets')
            python manage.py collectstatic
        3. To use static files in your templates/html files, do the following:
            a. At the top of html file, type {% load static %} in order to access the files
            b. In href/src attribute, do this {% static 'path' %}
                ex. <a href="{% static 'css/style.css' %}"></a>
                    <script src="{% static 'js/app.js' %}"></script>

    References:
        static files part 1, part 2
        https://www.youtube.com/watch?v=K8Uem148uOU&list=PLsyeobzWxl7r2ukVgTqIQcl-1T0C2mzau&index=11

Apps
    Note: only the root project folder (maison_lumiere_movie_project) has settings.py which is used for configuration
    1. To create an app, run: django-admin startproject <project-name>
    2. Make sure you put your app name in the list of INSTALLED_APPS
         main-project-directory -> settings.py

    In this project, we have 3 apps:
    1. movie - registration, view 
        /movie/         => display the movie summary table
        /movie/register => displays the movie registration

    2. customer - registration, view 
        /customer/          => display the movie summary table
        /customer/register  => display the customer registration

    3. home - landing page, sign-up/Log-in
        /            => landing page
        /login       => login


Note: 
    Install Jinja extension => jinja code will have color code such as in the example above
    If you see, yellow squiggqy lines underneath python imports ex.(from django.shortcuts import render), 
        latest versions of VSCode have this problem (to be research), but still the program still works.
    If you have new css, js, or images, put it on static folder, 
       then run python manage.py collectstatic
       purpose: so that the files in static folder will be put in django folder (assets) which is used for deployment
    Dont change files on the asset folder, only in static folder



