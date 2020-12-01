from django import template

register = template.Library()

@register.simple_tag
def get_addressee():
    return "World"


@register.simple_tag
def define(val=None):
  return val

@register.filter(name="timers")
def timers(val):
  return range(val)

@register.filter(name="adder")
def adder(val):
  return int(val)+1


@register.filter(name="converter")
def converter(stringer):
    return int(stringer)

@register.filter(name="typer")
def typer(stringer):
    return type(stringer)

@register.filter(name="floater")
def floater(stringer):
    return round(stringer, 1)
