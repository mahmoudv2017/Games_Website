from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.core import validators
from my_app.models import User_Info,Comments,Cart
from emoji_picker.widgets import EmojiPickerTextInputAdmin, EmojiPickerTextareaAdmin


class YourModelForm(forms.ModelForm):
    short_text = forms.CharField(widget=EmojiPickerTextInputAdmin)
    long_text = forms.CharField(widget=EmojiPickerTextareaAdmin)

class comments_form(forms.ModelForm):

    class Meta:
        model = Comments
        fields = ('comment',)


class user_form(forms.ModelForm):
    username = forms.CharField(help_text=False)
    password = forms.CharField(widget=forms.PasswordInput())
    Confirm_Password = forms.CharField(widget=forms.PasswordInput())
    
    
    def clean(self):
        all_data = super().clean()
        if(all_data["password"] != all_data["Confirm_Password"]):

            raise forms.ValidationError("Password Not Correct")

    class Meta:
        model = User
        fields = ('username','email','password')


class user_profile_info(forms.ModelForm):
    class Meta:
        model = User_Info
        fields = ('profile_image',)

class Cart_form(forms.ModelForm):
    class Meta:
        fields = "__all__"