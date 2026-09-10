#this is the main controler 
print("boot")
from time import sleep
import requests

#color
red = '\033[31m'
green = '\033[32m'
blue =  '\033[34m'
R = '\033[0m'

#sat varibuls
web_stat = "off"
py_dmx_stat = "off"

#set up the conecshin with node js server
url = "http://localhost:3000/data"
astab_pac = {"scerver":"bob","mess":"boot check"}

try:
    response = requests.post(url, json=astab_pac, timeout=5)
    response.raise_for_status()
    reply = response.json()

    if reply.get("status") == "success":
        web_stat = green + "connected"
    else:
        web_stat = red + "connection failed"
except requests.RequestException as error:
    print(f"web connection failed: {error}")
    web_stat = red + "connection failed"
  
try:
    print("dmx_boot")
    py_dmx_stat = green + "runing"
except:
    py_dmx_stat = red + "faild"


sleep(2)
print(f"runing")

print(f"status")
print(f"web:{web_stat}{R} dmx:{py_dmx_stat}{R}")

