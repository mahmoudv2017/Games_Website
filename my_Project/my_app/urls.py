from django.urls import path
from my_app import views

#Enter Your Paths

app_name = 'my_app'



urlpatterns = [
    path('', views.landing , name = 'landing'),

    #Home Page
    path('type=<value>/page=<page_num>', views.home , name = 'home'),
  
    path('type=<value>/order=<order>', views.home , name = 'home'),
    path('search=<value>/order=<order>', views.home , name = 'home'),
    path("platform=<value>",views.home , name = "home"),


    #///////////////////
    path("search=<value>/page=<page_num>" ,views.searcher , name = "search"),
    path("game=<value>" , views.details , name = 'details'),
    path("register" , views.register , name = "register"),
    path("logout" , views.logging_out , name = 'logout'),
    path("login" , views.logging_in , name = "login"),
    path("id=<value>/<title>/<comment_id>/reply=<reply>" , views.new_comment , name = "AddComment"),
 
    path("id=<value>/Current_Rating=<rating>" , views.rating_reg , name = "rating_request"),
    



    #/////////////////// Canceled
    path("cart/id=<value>",views.cart_view , name= "cart"),
    path("cart/id=<value>/<title>",views.cart_view , name= "cart"),
    path("cart",views.cart_view , name= "cart")

  
    
]
