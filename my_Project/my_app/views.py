from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from my_app.forms import user_form,user_profile_info,comments_form
from my_app.models import Comments,User_Info,Cart,Comments_reply,user_rating
from django.template.defaultfilters import slugify
import urllib.request,json,datetime
import platform,math
import random


import getmac
from datetime import datetime, timedelta
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login,logout,authenticate






def auth(req):
    if req.user.is_authenticated:
        if req.user:
            if req.user.is_active:
                return True
def turn_to_string(arr):
    for x in range(len(arr)):
        arr[x] = str(arr[x])
    return arr

x = ['1','2','3','4','5','6']
url = "https://api.rawg.io/api/games"
reponse = urllib.request.urlopen(url)
data = json.load(reponse)
typer = ""

page_num_details = '0'








# Create your views here.

def calculate_url(type):
    global url
    global typer
    typer = type.replace(" ","%20")

    url = "https://api.rawg.io/api/"+typer
  
    print("ssssssssss" + url)
   
    reponse = urllib.request.urlopen(url)
    return json.load(reponse)

def calculate_date(delay):

    x = 7
    if delay == "last_month":
        x = 30
    from_date = datetime.now()
    to_date = from_date - timedelta(days=x)
    string = "dates="+str(to_date)[0:10]+","+str(from_date)[0:10]
    return string

def searcher(req,value,page_num = "1"):
   # value = slugify(value)

    print(value)
    global data
    y = 0
    rendering_data = {
        'names' : "sasd"
     
        
    }

    if(page_num != "games" and page_num != "1"):
        data = calculate_url("games?"+page_num+"="+value)
        rendering_data['names'] = data
        if auth(req):
            rendering_data["user_profile"] = User_Info.objects.filter(user = req.user).get()
        rendering_data['type']= "games"
        return render(req,"home.html" , rendering_data)

    if(page_num == "1"):
        data = calculate_url("games?search="+value)
    else:
        data = calculate_url("games?page="+page_num+"&search="+value)
    
    rendering_data = {
        'names' : data["results"],
        'pages' : ['1','2','3','4','5','6'],
        
    }

  

    if(auth(req)):
        rendering_data["user_profile"] = User_Info.objects.filter(user = req.user).get()
    rendering_data['names'] = data
    rendering_data['type'] = "games"
    return render(req,"home.html" , rendering_data)

def home(req , value = "null" , page_num = "1?" , search_term = "" , order="nothing"):
    global data
    global x
    global url
    global typer
    
    rendering_data = {
        'names' : data,
        'pages' : x,
        'last' : 0,
        
    }


    f = False
    my_cart = 0
    if(auth(req)):
        if(User_Info.objects.filter(user = req.user).get() ):
            rendering_data["user_profile"] = User_Info.objects.filter(user = req.user).get() 
        try:
            my_cart = Cart.objects.filter(user = req.user)
            f = True
        except Cart.DoesNotExist:
            f = False

        if(f):
            print("the cart is sent")
            rendering_data["cart"] = Cart.objects.filter(user = req.user) 
        
       
  

    print("the page num is" + page_num)
    
    if(page_num != 'more'):
        if(order != "nothing"):
            x = typer
            rendering_data['names'] = data = calculate_url(typer+"&ordering=-"+order)
            typer = x
            rendering_data['type'] = 'games'
            return render(req,'home.html',rendering_data)

        if value == "last_week" or value == "last_month":
            result_data = calculate_date(value)
            print("results_data : " + result_data )
            data = calculate_url('games?'+result_data)
            value = "games"

        
        if value != "games":
            data = calculate_url(value)

        


    else:
        url2 = data["next"]
        print("morerrrrr" + url2)
        reponse = urllib.request.urlopen(url2)
        data = json.load(reponse)
        #return JsonResponse(data , safe = False)
        rendering_data["names"] = data
        rendering_data['type'] = value
        return render(req,'home.html', rendering_data)
    

    if page_num == "1":
        data = calculate_url("games?")




    rendering_data["names"] = data
    rendering_data['type'] = value
    return render(req,'home.html', rendering_data)

def register(req):
    user_info = user_form()
    user_profile = user_profile_info()
    
    my_dic = {
         'former' : user_info ,
         'user_profiler' : user_profile 

         
         }

    if req.method == "POST":
        user_info = user_form(data=req.POST)
        user_profile = user_profile_info(data=req.POST)

        if user_info.is_valid():
            user = user_info.save()
            user.set_password(user.password)
            user.save()
            profile_info = user_profile.save(commit=False)
            profile_info.user = user
            
            if 'profile_image' in req.FILES:
                profile_info.profile_image = req.FILES['profile_image']

            profile_info.save()
        
            return redirect("/login")

    random.seed(1)
    
    # generate some integers
    x2 = [0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]


    x3 = random.sample(x2, 18) 
    my_dic["image"] = data["results"][x3[5]]
    return render(req,"register.html",my_dic)

def details(req,value):

    global data
    data = calculate_url("games?search="+value)
    

    genre = []

    urler = "games?genres="
    url2 = ""
    user = ""
    query = ""
    if auth(req):
        user = User_Info.objects.filter(user = req.user).get()
        
    average = 0
    for x in data["results"]:
        if(str(x["slug"]) == value):
            for y in x["genres"]:
       
                url2 = url2 + str(y["id"])+","

           # data2 = calculate_url("games?genres="+genre)
            similar_item = calculate_url(urler + url2[:-1])
            if auth(req):
                query = user_rating.objects.filter(user = req.user ,game_slug = value )
     
            rendering_data = {
                'replies' : Comments_reply.objects.all() , 
                'similar_items' : similar_item["results"],
                'data' : x , 'comments' : Comments.objects.filter(game_slug = value).order_by('-date_added') , 
                'comment_form' : comments_form() , 
                "user_profile" : user,
                'average' : average
            }
            
            if query:
                rendering_data['ratinger'] = query.get()
            
            

          
           
            return render(req,"game_details.html",rendering_data)
    return HttpResponse(data["results"])
            
def cart_view(req,value="",title=""):

    count = 0
    
    

    if(title == "delete"):

      Cart.objects.filter(id = value).delete()
      return redirect("/cart/id="+value)
        



    for x in data["results"]:
        if(str(x["slug"]) == value):
            # , mac_id = getmac.get_mac_address()
            Cart.objects.get_or_create(title=x["name"] , user = req.user , average_score = x["rating"] , rating_count = x["ratings_count"]  ,genres=x["genres"] ,user_rating = x["rating"] ,  release_date = x["released"] , slug = x["slug"] ,page_no= page_num_details ,metacritic= x["metacritic"],game_image= x["background_image"])[0]
            print('here in my slugger')
    
  


    # if auth(req):
    #     return render(req,"cart.html",{'data' : Cart.objects.all() ,'user_profile' : User_Info.objects.filter(user = req.user).get(),'count':count})
   

    return render(req,"cart.html",{'data' : Cart.objects.filter(user = req.user),'count':count})
    
def landing(req):
    week_from_date = datetime.now()

    week_to_date = week_from_date - timedelta(days=7)
  
    dic = {
          'most_anti_data' :  calculate_url("games?dates=2020-08-10,2020-10-10&ordering=-added")["results"],
          'hight_rating' : calculate_url("games?dates=2001-01-01,2001-12-31&ordering=-rating")["results"],
          'data' : calculate_url("games?dates="+str(week_to_date)[0:10]+","+str(week_from_date)[0:10])["results"],
          'most_popular' : calculate_url("games?dates=2020-01-01,2020-12-31&ordering=-added")["results"]
    }

    if auth(req):
        dic["user_profile"] = User_Info.objects.filter(user = req.user).get()

    return render(req,"landing.html",dic)

def settings(req):

    return render(req,"user_settings.html" , {'user_profile' : User_Info.objects.filter(user = req.user).get() })

def new_comment(req,value,comment_id = '-1',title="" , reply="false"):

    print('value :' + value )
    print('title :' + title )
    print('id :' + comment_id )
    print('reply :' + reply )
    if reply == "like":
        data = {}
        id_s = []

       

        user  = User_Info.objects.filter(user=req.user).values("liked_comments")
        id_s =  user[0]['liked_comments']
        print(id_s)
        id_s.append(comment_id)
      
        User_Info.objects.filter(user=req.user).update(liked_comments=id_s)
        

        query = Comments.objects.filter(id = comment_id).values('like')
        num = int(query.get()["like"]) + 1
        Comments.objects.filter(id = comment_id).update(like = num , liked = 1)
        data["num"] = num
        return JsonResponse(data , safe=False)

    if reply == "dislike":

        id_l = []
        user  = User_Info.objects.filter(user=req.user).values("disliked_comments")
        id_l =  user[0]['disliked_comments']
        print(id_l)
        id_l.append(comment_id)
      
        User_Info.objects.filter(user=req.user).update(disliked_comments=id_l)
        query = Comments.objects.filter(id = comment_id).values('dislike')
        num = int(query.get()["dislike"]) + 1
        Comments.objects.filter(id = comment_id).update(dislike = num , liked = 2)
        return HttpResponse('aaa')







    cum = comments_form()
    #return render(req,"AddComment.html" , { 'comment_form' : cum ,'title' : title})
    if req.method == "POST":
        
        comment_form = comments_form(req.POST)
      
        if comment_form.is_valid():
            print("ssss")
            if reply != "false":
            
                Comments.objects.filter(id = comment_id).update(has_reply=True)
                Comments_reply.objects.get_or_create(parent_username = reply , reply = req.POST.get("comment") ,   parent_id = comment_id ,   user = req.user ,  profile_image = User_Info.objects.filter(user = req.user).get().profile_image  )[0]

                return redirect("/game="+value)
          
            if title == "AddComment":
                
                comment = Comments.objects.get_or_create(comment = req.POST.get("comment") , user = req.user , game_slug = value , profile_image = User_Info.objects.filter(user = req.user).get().profile_image)[0]
            else:
               
                comment = Comments.objects.filter(id = comment_id).update(comment=comment_form.cleaned_data["comment"])
                
            return redirect("/game="+value)

    Comments.objects.filter(id = comment_id).delete()
    return redirect("/game="+value)
    
    
    
def logging_in(req):
    data = calculate_url("games")
    x2 = [0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]


    x3 = random.sample(x2, 18) 
    if req.method == "POST":
        username = req.POST.get("username")
        password = req.POST.get("password")

        user = authenticate(req,username = username , password = password)

        if user:
            if user.is_active:
                login(req,user)
                return redirect("/type=games/page=1")
            else:
                return HttpResponse("user not acitve")
        else:
            return render(req,"login.html",{'image' : data["results"][x3[5]] , 'msg' : 'Wrong Username or Password'})
    return render(req,'login.html',{'image' : data["results"][x3[5]]})

@login_required
def logging_out(req):

    logout(req)
    return redirect("/type=games/page=1")


def rating_reg(req,value,rating):
    
    if req.method == "POST":

       query = user_rating.objects.filter(user = req.user , game_slug = value)
       if query:
           print("updatttttt")
           query.update(rating = rating)
       else:
            user_rating.objects.get_or_create(user = req.user , game_slug = value , rating = rating )[0]
       return redirect("/game="+value)

    


    return HttpResponse("Success")