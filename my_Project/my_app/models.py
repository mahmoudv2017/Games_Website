from django.db import models
import jsonfield


from django.contrib.auth.models import User


class User_Info(models.Model):
    user = models.OneToOneField(User  , on_delete = models.CASCADE)
    profile_image = models.ImageField( upload_to = 'profile_image/' , blank = True)


    def __str__(self):
        return self.user.username


class user_rating(models.Model):
    user = models.ForeignKey(User ,null = True , on_delete = models.CASCADE )
    rating = models.FloatField(default=0)
    is_rated = models.BooleanField(default=False)
    game_slug = models.CharField( max_length = 250 , blank=True)

    def __str__(self):
        return self.user.username
    
 
    

class Comments_reply(models.Model):
    user = models.ForeignKey(User ,null = True , on_delete = models.CASCADE )
    date_added = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True)
    parent_username = models.CharField(max_length = 250 , blank = True)
    parent_id = models.IntegerField(blank = True)
    reply = models.CharField(max_length = 250 , blank = True)
    profile_image = models.CharField(max_length = 250 , blank = True)
    def __str__(self):
        return self.user.username


class Comments(models.Model):
    user = models.ForeignKey(User ,null = True , on_delete = models.CASCADE )
    liked = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
    game_slug =  models.CharField(max_length = 250 , blank = True)
    comment = models.CharField(max_length = 250)
    has_reply = models.BooleanField(default=False)
    profile_image = models.CharField(max_length = 250 , blank = True)
    date_added = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True)
    def __str__(self):
        return self.user.username
    
class Cart(models.Model):
    game_image = models.CharField(max_length = 250 , blank = True)
    title = models.CharField(max_length = 250 , blank = True)
    genres = jsonfield.JSONField()
    mac_id = models.CharField(max_length = 250 , blank = True)
    slug = models.CharField(max_length = 250 , blank = True)
    page_no = models.CharField(max_length = 250 , blank = True)
    price = models.IntegerField( blank = True)

    def __str__(self):
        return self.title