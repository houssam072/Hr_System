from django.http import HttpResponse
from job.serializers import JobSerializer, ApplySerializer
from rest_framework import generics, permissions
from job.models import Apply, Job





from django.contrib.auth.models import User






# Create your views here.
class JobView(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobListView(generics.ListAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobSerializer
    permission_classes = [permissions.IsAuthenticated]


class JobDeleteView(generics.DestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobDetailAPIView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [permissions.IsAuthenticated]

    lookup_field = 'pk'


class ApplyJobView(generics.CreateAPIView):
    queryset = Apply.objects.all()
    serializer_class = ApplySerializer



class ApplyListView(generics.ListAPIView):
    queryset = Apply.objects.all().order_by('-created_at')
    serializer_class = ApplySerializer

class ApplyDeleteView(generics.DestroyAPIView):
    queryset = Apply.objects.all()
    serializer_class = ApplySerializer


class AppDetailAPIView(generics.RetrieveAPIView):
    queryset = Apply.objects.all()
    serializer_class = ApplySerializer
    lookup_field = 'pk'


class DownloadCv(generics.RetrieveAPIView):
    queryset = Apply.objects.all()
    serializer_class = ApplySerializer
    lookup_field = 'pk'
    permission_classes = [permissions.IsAuthenticated]



    def get(self, request, *args, **kwargs):
      
        cv = self.get_object()
      

        cv_file = cv.cv
      


        file_extension = cv_file.name.split('.')[-1].lower()
      

        content_type = 'application/pdf' if file_extension == 'pdf' else 'application/msword'
      

        res = HttpResponse(cv_file.read(), content_type = content_type)
      

        res['Content-Disposition'] = f'attachment; filename="{cv_file.name}"'
      

        return res
def download_cv(request, pk):
    view = DownloadCv.as_view()
    return view(request, pk=pk)


# def download_cv(request):
#     print(request.user.is_staff)
#     print(request.user.is_superuser)
#     print(request.user)
#     return HttpResponse("User data printed in the console.")
