# Generated by Django 3.1.1 on 2020-10-30 02:20

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0032_comments_liked'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='genres',
            field=jsonfield.fields.JSONField(default=dict),
        ),
    ]
