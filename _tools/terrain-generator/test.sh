#!/bin/bash

clear
echo 'start >'

rm isr1.*
gdalbuildvrt ./data/isr1.vrt N30E033.hgt N30E034.hgt N30E035.hgt N31E033.hgt N31E034.hgt N31E035.hgt
gdalwarp -te 3005501 3644175 3086959 3755543 -t_srs EPSG:32632 -r bilinear ./data/isr1.vrt ./data/isr1.tif
# gdalwarp -t_srs EPSG:32632 -r bilinear ./data/isr1.vrt ./data/isr1.tif
gdal_translate -of PNG -ot Byte -scale 15 2466 0 256 ./data/isr1.tif ./data/isr1.png
gdaldem hillshade -of PNG ./data/isr1.tif ./data/isr1_hillshade.png
# gdaldem hillshade -of PNG -az 135 ./data/isr1.tif ./data/isr1_hillshade_az135.png
gdaldem color-relief ./data/isr1.tif color_relief.txt ./data/isr1_color_relief.tif
gdaldem slope ./data/isr1.tif ./data/isr1_slope.tif
gdaldem color-relief ./data/isr1_slope.tif color_slope.txt ./data/isr1_slopeshade.tif

gdal_translate -of PNG -scale -425 1732 0 255 -outsize 1970 1690 ./data/isr1.tif ./data/isr1_hm.png
gdal_translate -of ENVI -scale -425 1732 0 65535 -ot UInt16 -outsize 1970 1690 ./data/isr1.tif ./data/isr1_hm.bin

cp ./data/isr1_hm.bin ./build
cp ./data/isr1_hm.bin ../../assets/images

python terrain.py

echo 'end <'

# 30.969284,34.976639
# https://www.google.co.il/maps/place/HaMakhtesh+HaGadol/@30.969284,34.976639,3a,75y,90t/data=!3m8!1e2!3m6!1s8742302!2e1!3e10!6s%2F%2Fstorage.googleapis.com%2Fstatic.panoramio.com%2Fphotos%2Fsmall%2F8742302.jpg!7i2900!8i2067!4m2!3m1!1s0x150239678660eb31:0x275d701dbba32e70?hl=en

# Upper Left  ( 2795501.725, 3879543.645) ( 33d10'19.33"E, 32d36'56.45"N)
# Lower Left  ( 2795501.725, 3574175.699) ( 32d29'48.59"E, 30d 5'45.97"N)
# Upper Right ( 3151959.557, 3879543.645) ( 36d34'21.45"E, 31d52' 0.88"N)
# Lower Right ( 3151959.557, 3574175.699) ( 35d49'50.26"E, 29d25' 1.20"N)
