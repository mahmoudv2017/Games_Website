# Generated by Django 3.1.1 on 2020-10-30 15:10

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0034_user_info_liked_comments'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_info',
            name='disliked_comments',
            field=jsonfield.fields.JSONField(default=dict),
        ),
    ]
