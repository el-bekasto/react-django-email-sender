from rest_framework import serializers
from .models import Receiver


class ReceiverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receiver
        fields = ['id', 'name', 'address']
