import datetime

from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

# Notebook Model
@python_2_unicode_compatible
class Notebook(models.Model):

	def __str__(self):
		return self.title
	
	# Show Notebooks that are created yesterday or mote recently
	def was_created_recently(self):
		return self.created_at >= timezone.now() - datetime.timedelta(days=1)

	title = models.CharField(max_length=200)
	created_at = models.DateTimeField('date created')
	updated_at = models.DateTimeField('date updated')


# Story Model
@python_2_unicode_compatible
class Story(models.Model):

	def __str__(self):
		return self.title

	notebook = models.ForeignKey(Notebook, on_delete=models.CASCADE)
	title = models.CharField(max_length=200)
	body = models.TextField(null=True, blank=True)
	created_at = models.DateTimeField('date created')
	updated_at = models.DateTimeField('date updated')