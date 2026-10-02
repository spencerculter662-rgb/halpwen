#this is the python sub server that handles the output
print("boot")
from time import sleep
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from PyDMXControl.controllers import OpenDMXController
from PyDMXControl.profiles.Generic import Dimmer
from flask import Flask
import time


#color
red = '\033[31m'
green = '\033[32m'
blue =  '\033[34m'
R = '\033[0m'

#sat varibuls
web_stat = "off"
py_dmx_stat = "off"

#atempt to start and conect to the dmx controler
try:
    dmx = OpenDMXController()
    print("dmx_boot")
    py_dmx_stat = green + "runing"
except:
    py_dmx_stat = red + "faild"


# ther relays are off or on not a dmx value the swich is at the 1/2 point
class relays:
    def _init_(self):
        #start the relay manager

        #configer all of the relay outputs
        self.relay_1 = dmx.add_fixture(Dimmer, name="rl1",start_channel=1)
        self.relay_2 = dmx.add_fixture(Dimmer, name="rl2",start_channel=2)
        self.relay_3 = dmx.add_fixture(Dimmer, name="rl3",start_channel=3)
        self.relay_4 = dmx.add_fixture(Dimmer, name="rl4",start_channel=4)
        self.relay_5 = dmx.add_fixture(Dimmer, name="rl5",start_channel=5)
        self.relay_6 = dmx.add_fixture(Dimmer, name="rl6",start_channel=6)
        self.relay_7 = dmx.add_fixture(Dimmer, name="rl7",start_channel=7)
        self.relay_8 = dmx.add_fixture(Dimmer, name="rl8",start_channel=8)
        self.relay_9 = dmx.add_fixture(Dimmer, name="rl9",start_channel=9)
        self.relay_10 = dmx.add_fixture(Dimmer, name="rl10",start_channel=10)

    def dim(self,relay ,value ,time):
        if relay == 1:
            self.relay_1.dim(value,time)
        if relay == 1:
            self.relay_1.dim(value,time)
        if relay == 2:
            self.relay_2.dim(value,time)
        if relay == 3:
            self.relay_3.dim(value,time)
        if relay == 4:
            self.relay_4.dim(value,time)
        if relay == 5:
            self.relay_5.dim(value,time)
        if relay == 6:
            self.relay_6.dim(value,time)
        if relay == 7:
            self.relay_7.dim(value,time)
        if relay == 8:
            self.relay_8.dim(value,time)
        if relay == 9:
            self.relay_9.dim(value,time)
        if relay == 10:
            self.relay_10.dim(value,time)

class rgb_light():

    def _init_(self,kind,s_chan):
        self.k = kind
        if kind == "par":
            print("genrating par")
            self.red = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 0)
            self.green = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 1)
            self.blue = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 2)

        if kind == "bar":
            self.man = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 0)
            self.red = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 1)
            self.green = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 2)
            self.blue = dmx.add_fixture(Dimmer, name="idk",start_channel= s_chan + 3)

    def dim(self,color,vlaue,time):
        #this is to make it so ther is not a problum with the bar losing it furst data tha is neded for it to work
        if self.k == "bar":
            self.man.dim(118,500)
        


#pull in all of the fixtors for the nexst step
relay = relays()
par1 = rgb_light("par",11)
par2 = rgb_light("par", 14)

bar1 = rgb_light("bar",17)
bar2 = rgb_light("bar",21)




class DataHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/data":
            self.send_error(404)
            return

        length = int(self.headers.get("Content-Length", 0))
        payload = json.loads(self.rfile.read(length))

        can = payload.get("can")
        dat = payload.get("dat")
        print(f"Received from browser: can={can}, dat={dat}")

        # Handle the controls here, for example:
        # if can == "power" and dat == "on":
        #     ...

        if can == "power" and dat == "on":
            print("the power buton is feading data")

        response = json.dumps({"status": "ok"}).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(response)))
        self.end_headers()
        self.wfile.write(response)





sleep(2)
print(f"runing")

print(f"status")
print(f"web:{web_stat}{R} dmx:{py_dmx_stat}{R}")

server = ThreadingHTTPServer(("127.0.0.1", 3040), DataHandler)
print("Python receiver listening on port 3040")
server.serve_forever()


