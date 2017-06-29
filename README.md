# osc2artnet
Transfers OSC-Messages into Artnet Channel-Values

## Usage

Install with
```npm install osc2artnet```

Start index.js:
```node index.js```

Send OSC-Messages between 0 and 255 to Port 57121.

Address/Channel for OSC:
```/o2a/(universe)/(channel)```

Universe in decimal!
Subnet: first 4 bits
Universe: last 4 bits

Example: Subnet 1 (0x1) DMX-Universe 0 (0x0) = 0x10 = 0d16 = Dezimal 16

Channel: int between 0 and 255

Please feel free to contribute!
