# Generated by Django 3.1.1 on 2020-10-30 02:21

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0033_cart_genres'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_info',
            name='liked_comments',
            field=jsonfield.fields.JSONField(default=dict),
        ),
    ]