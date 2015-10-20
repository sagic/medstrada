#!/usr/bin/env python
import mapnik
map = mapnik.Map(3134, 3134)
mapnik.load_map(map, 'terrain.xml')
map.zoom_all() 
mapnik.render_to_file(map, 'terrain.png')