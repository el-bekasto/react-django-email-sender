from django.urls import path

from .views import *

urlpatterns = [
    path('api/v1/send', SendMailAPIView.as_view(), name='send'),
    path('api/v1/receivers', GetReceiversAPIView.as_view()),
    path('api/v1/add', CreateReceiverAPIView.as_view()),
    path('api/v1/del/<int:pk>', DeleteReceiverAPIView.as_view(), name='receiver_delete')
]
