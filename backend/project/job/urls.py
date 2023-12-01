from django.urls import path
from job.views import *
app_name  = 'job'
urlpatterns  = [
    path('api/add_job/', JobView.as_view() , name= 'add_job'),
    path('api/list_job/', JobListView.as_view() , name= 'list_job'),
    path('api/delete_job/<int:pk>/',JobDeleteView.as_view(), name= 'delete_job'),
    path('api/apply_job/', ApplyJobView.as_view() , name= 'apply_job'),
    path('api/detail_job/<int:pk>/',JobDetailAPIView.as_view(), name= 'detailjob'),
    path('api/list_apply/', ApplyListView.as_view() , name= 'list_apply'),
    path('api/delete_app/<int:pk>/',ApplyDeleteView.as_view(), name= 'delete_app'),
    path('api/detail_app/<int:pk>/',AppDetailAPIView.as_view(), name= 'detail_app'),
    path('api/download-cv/<int:pk>/', download_cv, name='download_cv'),




]