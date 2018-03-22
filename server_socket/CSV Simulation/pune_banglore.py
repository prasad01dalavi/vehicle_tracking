import socket
import time
import calendar
from time import gmtime, strftime
from decimal import *
import pandas as pd

df = pd.read_csv('pune_banglore.csv')
cnt = 0
port = 5200

while True:
    for index, row in df.iterrows():
        longitude = float(row['Longitude'])       
        latitude = float(row['Latitude'])
        long = int(Decimal(longitude * 10000000))
        longHex = hex(long).split('x')[-1]
        lati = round(latitude,5)
        lat = int(Decimal(lati * 10000000))
        latHex = hex(lat).split('x')[-1]
        
        date_time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        date_today = calendar.timegm(time.strptime(date_time, '%Y-%m-%d %H:%M:%S'))
        date_hex =  hex(date_today).split('x')[-1]
        
        IMEI = 33333333333333
        IMEI_Hex = hex(IMEI).split('x')[-1]
        imei = list(IMEI_Hex)
        IMEI_hex = imei[0:12]
        IMEI_HEX = ''.join(IMEI_hex)
        
        device_data = '00260003106797269be301000159bf985900002bf88fc00b11ca6416f131ce003c000007000000002a77'
        data_list = list(device_data)
        data_list[4:8] = '0000'
        data_list[8:20] = IMEI_HEX
        data_list[26:34] = date_hex
        data_list[38:46] = longHex
        data_list[46] = '0'
        data_list[47:54] = latHex
        device_data = ''.join(data_list)
        ascii_data = ''.join([chr(int(''.join(c), 16)) for c in zip(device_data[0::2],device_data[1::2])])
               
        print 'Device Data in Hex Format:',device_data
        ascii_data = ''.join([chr(int(''.join(c), 16)) for c in zip(device_data[0::2],device_data[1::2])])            
        client = socket.socket()    
        client.connect(('localhost', port))   
        client.send(ascii_data)  
        print 'Device: 33333333333333'
        cnt += 1
        print 'Data Count: #'+str(cnt)
        print 
        time.sleep(10)

