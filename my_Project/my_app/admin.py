from django.contrib import admin
from my_app.models import User_Info,Comments,Cart,Comments_reply,user_rating

# Register your models here.

admin.site.register(User_Info)
admin.site.register(Comments)
admin.site.register(Cart)
admin.site.register(Comments_reply)
admin.site.register(user_rating)
