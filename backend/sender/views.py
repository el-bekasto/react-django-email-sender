from rest_framework.views import APIView, Response
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.request import Request
from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from .models import Receiver
from .serializers import ReceiverSerializer


class SendMailAPIView(APIView):
    def post(self, request: Request):
        receivers = [r.address for r in Receiver.objects.all()]
        with get_connection(
            host=settings.EMAIL_HOST,
            port=settings.EMAIL_PORT,
            username=settings.EMAIL_HOST_USER,
            password=settings.EMAIL_HOST_PASSWORD,
            use_tls=settings.EMAIL_USE_TLS
        ) as conn:
            EmailMessage(
                subject=request.data['subject'],
                body=request.data['body'],
                from_email=settings.EMAIL_HOST_USER,
                to=receivers,
                connection=conn
            ).send()
        return Response(
            data={'response': 'success'}
            # headers={
            #     'Access-Control-Allow-Origin': request.headers['origin']
            # }
        )

    # queryset = Receiver.objects.all()
    # serializer_class = SendMailSerializer


class GetReceiversAPIView(ListAPIView):
    queryset = Receiver.objects.all()
    serializer_class = ReceiverSerializer


class CreateReceiverAPIView(CreateAPIView):
    queryset = Receiver.objects.all()
    serializer_class = ReceiverSerializer

