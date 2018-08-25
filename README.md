# osc2artnet
[![GitHub release](https://img.shields.io/github/release/margau/osc2artnet.svg)](https://github.com/margau/osc2artnet)
[![npm](https://img.shields.io/npm/v/osc2artnet.svg)](https://github.com/margau/osc2artnet)
[![GitHub issues](https://img.shields.io/github/issues/margau/osc2artnet.svg)](https://github.com/margau/osc2artnet/issues)
[![GitHub stars](https://img.shields.io/github/stars/margau/osc2artnet.svg)](https://github.com/margau/osc2artnet/stargazers)
[![GitHub license](https://img.shields.io/github/license/margau/osc2artnet.svg)](https://github.com/margau/osc2artnet/blob/master/LICENSE)
[![Github All Releases](https://img.shields.io/github/downloads/margau/osc2artnet/total.svg)](https://github.com/margau/osc2artnet)
[![npm](https://img.shields.io/npm/dt/osc2artnet.svg)](https://github.com/margau/osc2artnet)

This script can be used to Transfer OSC data into ArtNet data.


## Usage

Install osc2artnet globally:

```npm install -g osc2artnet```

Start node_modules/osc2artnet/index.js:

```node node_modules/osc2artnet/index.js```

Since version 0.2.0 you can use the command ```o2a``` or ```osc2artnet``` everywhere to run osc2artnet if you installed it with the ```-g``` switch.

Now send OSC-Messages between 0 and 255 to Port 57121 (either IP of the host running osc2artnet or broadcast address like 255.255.255.255).


Address/Channel for OSC:

```/o2a/(universe)/(channel)```


The prefix o2a ist customizable in the index.js file.

The universe consists of two parts:

Subnet: first 4 bits

Universe: last 4 bits

Example: Subnet 1 (0x1) DMX-Universe 0 (0x0) = 0x10 = 0d16 = Dezimal 16

Channel: int between 0 and 255

## Tested with
[TouchOSC](https://hexler.net/software/touchosc) on iOS/Android and [DMX Control 3](http://www.dmxcontrol.de/dmxcontrol3/funktionen.html)

Useful for debugging: [The ArtNetominator](http://www.lightjams.com/artnetominator/)


## Please feel free to contribute and improve osc2artnet!

## Known Bugs

**Installing on Linux says ```gyp WARN EACCESS``` and similar:**

This is a bug in a 3th part libary. 

Try to install using this command:

```npm install --unsafe-perm -g osc2artnet```

## License

MIT License

Copyright (c) 2017 margau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Credits

Art-Net™ Designed by and Copyright [Artistic Licence Holdings Ltd.](http://www.artisticlicence.com/)
