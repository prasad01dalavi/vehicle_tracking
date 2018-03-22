import socket
from thread import *
import datetime as dt                    # This is for timestamp conversion
import mysql.connector
import datetime
import time

host = ''                       # Defining server address and port
port = 5201
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.bind((host, port))         # Binding socket to a address. bind() takes tuple of host and port.
sock.listen(100)                # 5 denotes the number of clients can queue


def client_thread(conn):
    while True:
##        db = mysql.connector.connect(host='localhost', user='root', password='lmtech123', database='mytestdb')
##        cur = db.cursor()
        # Receiving from client
        try:
            print 'Waiting for data...'                   # Waiting for the connection
            print 'Connecting to Device on address:', addr
            clientData = conn.recv(4096)                  # Receive 1024 bytes of data
            print 'data received!'
            if not clientData:
                print 'No data found!'
                break;
            hexString = clientData.encode('hex')          # Encode that data into hex
        # -------------------------Decoding the hex String---------------------------------- #
        # --------------------------IMEI Decoding-------------------------------------------  #
            imeiHex = hexString[4:20]
            imei = int(imeiHex, 16)
            imei = str(imei)
        # -----------------------Time Stamp Decoding----------------------------------------- #
            hexString = hexString[26::]
            byteNum = 0
            timeStampList = []
            while byteNum < 8:
                    timeStampList.append(hexString[byteNum])
                    byteNum += 1
            timeStampString = ''.join(timeStampList)
            decimalTS = int(timeStampString, 16)
            timeStamp = dt.datetime.fromtimestamp(decimalTS)
            dateTime = str(timeStamp)
            print 'Device Timestamp:', dateTime
            dts = str(dateTime)
        # ---------------End of Time Stamp Decoding------------------------------------------ #
        # -------------------Longitude Decoding-------------------------------------- -------- #
            byteNum = 12
            longitudeList = []
            while byteNum < 20:
                    longitudeList.append(hexString[byteNum])
                    byteNum += 1
            longitudeString = ''.join(longitudeList)
            decimalLongitude = int(longitudeString, 16)
            lng = float(decimalLongitude)
            lng = lng/10000000
            ln = str(lng)
        # ---------------End of Longitude Decoding------------------------------------------------- #
        # ----------------Latitude Decoding--------------------------------------------------------- #
            byteNum = 20
            latitudeList = []
            while byteNum < 28:
                    latitudeList.append(hexString[byteNum])
                    byteNum += 1
            latitudeString = ''.join(latitudeList)
            print 'Latitude Hex:', latitudeString
            print 'Longitude Hex:', longitudeString
            decimalLatitude = int(latitudeString, 16)
            lat = float(decimalLatitude)
            lat = lat/10000000
            lt = str(lat)
        # ---------------End of Latitude Decoding-------------------------------------------------#
        # ----------------Altitude Decoding------------------------------------------------------ #
            byteNum = 28
            altitudeList = []
            while byteNum < 32:
                    altitudeList.append(hexString[byteNum])
                    byteNum += 1
            altitudeString = ''.join(altitudeList)
            decimalAltitude = int(altitudeString, 16)
            altitude = decimalAltitude/10
            alt = str(altitude)
        # ---------------End of Altitude Decoding----------------------------------------------------#
        # ----------------Angle Decoding-------------------------------------------------------------#
            byteNum = 32
            AngleList = []
            while byteNum < 36:
                    AngleList.append(hexString[byteNum])
                    byteNum += 1

            angleString = ''.join(AngleList)
            print angleString
            decimalAngle = int(angleString, 16)
            angle = decimalAngle/100
            print 'Angle =', angle, 'degrees'
        # ---------------End of Angle Decoding---------------------------------------------------#
        # -------------Satellite Decoding--------------------------------------------------------#
            byteNum = 36
            satList = []
            while byteNum < 38:
                    satList.append(hexString[byteNum])
                    byteNum += 1
            satString = ''.join(satList)
            decimalsat = int(satString, 16)
            sat = str(decimalsat)
        # ------------End of Satellite Decoding--------------------------------------------------------#
        # -------------Speed Decoding-------------------------------------------------------------------#
            byteNum = 38
            speedList = []
            while byteNum < 40:
                    speedList.append(hexString[byteNum])
                    byteNum += 1
            speedString = ''.join(speedList)
            decimalSpeed = int(speedString, 16)
            speed = str(decimalSpeed)
            print 'Speed = ', speed, 'Kmph'
        # ------------End of Speed Decoding-----------------------------------------------------------#
        # -------------HDOP Decoding-------------------------------------------------------------------#
            byteNum = 42
            hdopList = []
            while byteNum < 44:
                    hdopList.append(hexString[byteNum])
                    byteNum += 1
            hdopString = ''.join(hdopList)
            decimalhdop = int(hdopString, 16)
            decimalhdop = float(decimalhdop%10)/10+(decimalhdop/10)
            hdop = str(decimalhdop)
            print 'HDOP =', hdop
        # ------------End of HDOP Decoding----------------------------------------------------------------#
        # -------------Igninition Decoding----------------------------------------------------------------#
            byteNum = 48
            ignitionList = []
            while byteNum < 50:
                    ignitionList.append(hexString[byteNum])
                    byteNum += 1
            ignitionString = ''.join(ignitionList)
            print 'Ingition Status = OFF'
        # ------------End of Ignition Decoding----------------------------------------------------------------#
            print
            print 'Before database update'
        # ---------------------------End of Decoding-----------------------------------------------------------#
            ts = time.time()
            timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
##            query = "insert into device_data(created_at, updated_at, Device_ID, DeviceTimeStamp, Longitude, Latitude, Altitude, Angle, Satellite, Speed_kmph, HDOP, Ignition, Country_Code_Geonames, Virtual_GPS_Odometer) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            print 'Updating Database...'
            values = timestamp, timestamp, imei, dts, ln, lt, alt, angle, sat, speed, hdop, 'ON', '27', 'In Progress'
            print 'Received Data =', values
##            cur.execute(query, values)
##            db.commit()
##            cur.close()
##            db.close()
            print 'Database has been updated!'
            print
        except Exception as e:
            print "error", e
            print 'Error was occured !'


while True:
    conn, addr = sock.accept()                     # Accepting incoming connections
    # Creating new thread. Calling client_thread function for this function and passing conn as argument.
    start_new_thread(client_thread, (conn,))       # start new thread takes 1st argument as a function name to be run, second is the tuple of arguments to the function.



