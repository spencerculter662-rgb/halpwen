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


class relays:
    def _init_(adress_s,adress_e):
        #start the relay manager
        print("thisis a skjdfkjsdh")


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
print("Python receiver listening on port 3000")
server.serve_forever()


