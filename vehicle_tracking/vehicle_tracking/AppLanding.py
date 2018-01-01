# This file will load Angular 2 Files
from django.views.generic.base import TemplateView


class AppLanding(TemplateView):
    template_name = "index.html"

    def dispatch(self, *args, **kwargs):
        return super(AppLanding, self).dispatch(*args, **kwargs)
