from selenium import webdriver
from selenium.webdriver.common.by import By
from faker import Faker
from selenium.webdriver.support.ui import Select
import time
import random
import argparse
import os
import random

class test:
    def login_register(self):

        driver = webdriver.Firefox()
        driver.get("http://localhost:5173/")
        fake = Faker()

        time.sleep(2)



        register_header_id = 'register'
        driver.find_element(By.ID,register_header_id).click()
        time.sleep(1)

        # element 
        name_id = 'name'
        email_id = 'email'
        password_id = 'password'
        repeat_password_id = 'rpassword'
        submit_btn_id = 'submit'
        job_id = 'job'
        readMore_button_id = 'readMore'
        logout_id = 'logout'

        # apply element
        apply_id = 'apply'
        f_name_id = 'first_name'
        l_name_id = 'last_name'
        birth_date_id = 'birth_date'
        experience_id = 'experience'
        department_select_id = 'department'
        job_title_select_id = 'job_title'
        cv_id = 'cv'

        # data
        name_data = fake.user_name()
        email_data = fake.email()
        password_data = fake.password()


        # register
        name = driver.find_element(By.ID,name_id)
        email = driver.find_element(By.ID,email_id)
        password = driver.find_element(By.ID,password_id)
        repeat_password = driver.find_element(By.ID,repeat_password_id)
        submit_btn = driver.find_element(By.ID,submit_btn_id)


        name.send_keys(name_data)
        email.send_keys(email_data)
        password.send_keys(password_data)
        repeat_password.send_keys(password_data)

        submit_btn.click()
        time.sleep(3)



        # login
        name = driver.find_element(By.ID,name_id)
        password = driver.find_element(By.ID,password_id)
        submit_btn = driver.find_element(By.ID,submit_btn_id)



        name.send_keys(name_data)
        password.send_keys(password_data)

        submit_btn.click()
        time.sleep(3)

        # visit job detailes
        jobs = driver.find_elements(By.ID, job_id)
        if jobs:
            first_job = jobs[0]
            first_job.find_element(By.ID,readMore_button_id ).click()
        time.sleep(3)
        apply = driver.find_element(By.ID, apply_id)
        apply.click()


        # apply jop
        f_name = driver.find_element(By.ID,f_name_id)
        l_name = driver.find_element(By.ID,l_name_id)
        birth_date = driver.find_element(By.ID,birth_date_id)
        experience = driver.find_element(By.ID,experience_id)
        department_select = driver.find_element(By.ID,department_select_id)
        job_title_select = driver.find_element(By.ID,job_title_select_id)
        cv = driver.find_element(By.ID,cv_id)
        submit_btn = driver.find_element(By.ID,submit_btn_id)


        fake_f_name = fake.first_name()
        fake_l_name = fake.last_name()
        fake_birth_date = fake.date_of_birth(minimum_age=18, maximum_age=65).strftime("%Y-%m-%d")
        fake_experience = random.randint(0,15)
        file_path = '/home/hp/Downloads/Web design.pdf'


        depart_select = Select(department_select)
        job_select = Select(job_title_select)

        f_name.send_keys(fake_f_name)
        l_name.send_keys(fake_l_name)
        birth_date.send_keys(fake_birth_date)
        experience.send_keys(fake_experience)
        depart_select.select_by_index(1)
        job_select.select_by_index(1)
        cv.send_keys(file_path)
        submit_btn.click()
        time.sleep(3)




# admin user and add jop//////////////////////////////
    def admin_user(self):

        driver = webdriver.Firefox()
        driver.get("http://localhost:5173/login")
        fake = Faker()

        time.sleep(2)

# admin element
        name_id = 'name'
        password_id = 'password'
        submit_btn_id = 'submit'
        admin_id = 'admin'
        job_id = 'job'
        readMore_button_id = 'readMore'


# admin login
        name = driver.find_element(By.ID,name_id)
        password = driver.find_element(By.ID,password_id)
        submit_btn = driver.find_element(By.ID,submit_btn_id)

        name.send_keys('admin')
        password.send_keys('12341234')
        submit_btn.click()
        time.sleep(3)

        admin_btn = driver.find_element(By.ID,admin_id)
        admin_btn.click()

        admin_list_jop = driver.find_element(By.ID,'admin_list_jop')
        admin_list_jop.click()
        time.sleep(3)
        admin_list_jop_app = driver.find_element(By.ID,'admin_list_jop_app')
        admin_list_jop_app.click()
        time.sleep(3)
        admin_add_job = driver.find_element(By.ID,'admin_add_job')
        admin_add_job.click()
        time.sleep(3)
# admin add jop


        job_title_id = driver.find_element(By.ID, 'title')
        job_description_id = driver.find_element(By.ID, 'description')
        job_department_id = driver.find_element(By.ID, 'department')
        job_image_id = driver.find_element(By.ID, 'image')
        submit_btn = driver.find_element(By.ID,submit_btn_id)

        depart_select = Select(job_department_id)
        directory_path = '/home/hp/Pictures/'

        all_files = os.listdir(directory_path)

        image_files = [file for file in all_files if file.lower().endswith(('.png', '.jpg', '.jpeg'))]

        if image_files:
            selected_image = random.choice(image_files)

            file_path = os.path.join(directory_path, selected_image)

        fake_job_description = fake.paragraph()
        fake_job_title = fake.sentence(nb_words=3, variable_nb_words=True)





        job_title_id.send_keys(fake_job_title)
        job_description_id.send_keys(fake_job_description)
        depart_select.select_by_index(1)
        job_image_id.send_keys(file_path)
        submit_btn.click()
        time.sleep(3)


        jobs = driver.find_elements(By.ID, job_id)
        if jobs:
            first_job = jobs[0]
            first_job.find_element(By.ID,readMore_button_id ).click()

# delete application and jop and download app
    def admin_application(self):

        driver = webdriver.Firefox()
        driver.get("http://localhost:5173/login")
        fake = Faker()

        time.sleep(2)

# admin element
        name_id = 'name'
        password_id = 'password'
        submit_btn_id = 'submit'
        admin_id = 'admin'
        job_id = 'job'
        readMore_button_id = 'readMore'


# admin login
        name = driver.find_element(By.ID,name_id)
        password = driver.find_element(By.ID,password_id)
        submit_btn = driver.find_element(By.ID,submit_btn_id)

        name.send_keys('admin')
        password.send_keys('12341234')
        submit_btn.click()
        time.sleep(3)

        admin_btn = driver.find_element(By.ID,admin_id)
        admin_btn.click()

        admin_list_jop = driver.find_element(By.ID,'admin_list_jop')
        admin_list_jop.click()
        time.sleep(3)

        delet_jop_icon = driver.find_element(By.ID,'delet_jop_icon')
        delet_jop_icon.click()



        time.sleep(3)
        admin_list_jop_app = driver.find_element(By.ID,'admin_list_jop_app')
        admin_list_jop_app.click()
        time.sleep(3)

        delete_post_icon = driver.find_element(By.ID,'delete_post_icon')
        delete_post_icon.click()
        time.sleep(3)
        details_post_icon = driver.find_element(By.ID,'details_post_icon')
        details_post_icon.click()
        time.sleep(3)
        download_cv = driver.find_element(By.ID,'download_cv')
        download_cv.click()
        time.sleep(3)



def main():
    parser = argparse.ArgumentParser(description="Run functions of test")
    parser.add_argument("function", choices=["login_register","admin_user","admin_application"], help="Function to run")
    
    args = parser.parse_args()

    # Create an instance of the class
    instance = test()

    # Call the specified function
    getattr(instance, args.function)()

if __name__ == "__main__":
    main()