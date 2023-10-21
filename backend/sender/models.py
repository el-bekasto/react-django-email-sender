from django.db import models
from django.contrib.postgres.fields import *


class Receiver(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name
