this project created using react for frontend development and django for backend

it help hr to add carres and normal user to apply for this job

you have to do some steps to run My project on your local host:

A- install xampp for run apache web server and my sql:

    then run exampp using gui or you can run this command line if your machine is linux(ubuntu):
    
    -cd /opt/lampp
    
    -sudo ./xampp start
    
    go to phpmyadmin on your prowser 
    https://localhost/phpmyadmin
    and create new database by name(hr_system)



B- first lets create backend virtual environment:
    -download my project repo
        
        https://github.com/houssam072/Hr_System
        
    -cd backend
    
    -virtualenv venv
    
    -source venv/bin/activate (for linux)
    
    or
    
    -source venv/scripts/activate (for windows)
    
    -install requirements (from requirement.text file)
    
    -cd project
    
    -python3 manage.py makemigrations
    
    -python3 manage.py migrate
    
    -now must to create super user to manage the website using this command line:
    
        python3 manage.py 
        createsuperuser
        
    -runserver:
    
        python3 manage.py 
        runserver
        if display an error beacause you are using default port 8000
        just run:
        
        -python3 manage.py runserver 8001   


C-Second must to create front end setup:
    -cd frontend
    -install dependencies:
        npm install
    -run:
        npm run dev



D- test directory:

​	-cd test

​	-virtualenv venv

​	-

​	-source venv/bin/activate(for linux)

​		or

​	source venv/scripts/activate(for windows)

​    -install requirements (from requirement.tex tfile)

- my test code have a class and the class containe 3 function if you want to run one by one:

- to run login_register which is create a user then login and show job then apply for jop run this command:

  ​	-python3 register_login.py  login_register

  

- to run admin login and create jop run:

  ​	-python3 register_login.py  admin_user

  

- to run admin_application run:

  ​	-python3 register_login.py  admin_application



​	

​	
