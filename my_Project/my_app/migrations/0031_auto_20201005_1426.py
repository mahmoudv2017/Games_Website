# Generated by Django 3.1.1 on 2020-10-05 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0030_auto_20201005_1329'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='dislike',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='comments',
            name='like',
            field=models.IntegerField(default=0),
        ),
    ]
