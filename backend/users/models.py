from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, name, age, address, contact, password=None):
        if not name:
            raise ValueError('Users must have a name')
        user = self.model(name=name, age=age, address=address, contact=contact)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, name, age, address, contact, password=None):
        user = self.create_user(name, age, address, contact, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    name = models.CharField(max_length=255, unique=True)
    age = models.IntegerField()
    address = models.CharField(max_length=255)
    contact = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['age', 'address', 'contact']

    def __str__(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin