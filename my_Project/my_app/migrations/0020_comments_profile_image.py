# Generated by Django 3.1.1 on 2020-09-25 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0019_auto_20200920_0349'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='profile_image',
            field=models.CharField(blank=True, max_length=250),
        ),
    ]
