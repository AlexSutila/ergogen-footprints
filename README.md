# ergogen-footprints

![image](https://github.com/user-attachments/assets/6d7a71ae-8b3f-4d24-a684-b9ea161bc7c8)

## why?

Because I went down the rabbit hole, and wanted to use micro-controllers I already had and wasn't doing anything with. 

I personally could not find an existing footprint (there is a chance I did not look hard enough lol) so I decided to make my own.

## Contents

The current collection is as follows:
 - `pipicow.js` - `Raspberry Pi Pico W`

I may or may not add more, but additions are welcome.

## usage

There is a great guide that describes how to use ergogen with external footprints [here](https://flatfootfox.com/ergogen-part4-footprints-cases/).

But in a nutshell, the following steps can be taken:
1. Install ergogen via `npm i -g ergogen`
2. In the same directory as `config.yaml`, copy or move any external footprints to `./footprints/`
3. Generate KiCad files with `ergogen .`, providing the project directory as the only argument
