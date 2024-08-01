// Raspberry Pi Pico W
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    orientation: 'down',
    GND:        { type: 'net', value: 'GND'      },
    VBUS:       { type: 'net', value: 'VBUS'     },
    VSYS:       { type: 'net', value: 'VSYS'     },
    EN_3V3:     { type: 'net', value: 'EN_3V3'   },
    OUT_3V3:    { type: 'net', value: 'OUT_3V3'  },
    ADC_VREF:   { type: 'net', value: 'ADC_VREF' },
    AGND:       { type: 'net', value: 'AGND'     },
    RUN:        { type: 'net', value: 'RUN'      },
    GP0:        { type: 'net', value: 'GP0'      },
    GP1:        { type: 'net', value: 'GP1'      },
    GP2:        { type: 'net', value: 'GP2'      },
    GP3:        { type: 'net', value: 'GP3'      },
    GP4:        { type: 'net', value: 'GP4'      },
    GP5:        { type: 'net', value: 'GP5'      },
    GP6:        { type: 'net', value: 'GP6'      },
    GP7:        { type: 'net', value: 'GP7'      },
    GP8:        { type: 'net', value: 'GP8'      },
    GP9:        { type: 'net', value: 'GP9'      },
    GP10:       { type: 'net', value: 'GP10'     },
    GP11:       { type: 'net', value: 'GP11'     },
    GP12:       { type: 'net', value: 'GP12'     },
    GP13:       { type: 'net', value: 'GP13'     },
    GP14:       { type: 'net', value: 'GP14'     },
    GP15:       { type: 'net', value: 'GP15'     },
    GP16:       { type: 'net', value: 'GP16'     },
    GP17:       { type: 'net', value: 'GP17'     },
    GP18:       { type: 'net', value: 'GP18'     },
    GP19:       { type: 'net', value: 'GP19'     },
    GP20:       { type: 'net', value: 'GP20'     },
    GP21:       { type: 'net', value: 'GP21'     },
    GP22:       { type: 'net', value: 'GP22'     },
    GP26:       { type: 'net', value: 'GP26'     },
    GP27:       { type: 'net', value: 'GP27'     },
    GP28:       { type: 'net', value: 'GP28'     },
  },
  body: p => {
    const standard = `
      (module ProMicro (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start 21.0 3.5) (end 26.8 3.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 26.8 3.5) (end 26.8 -3.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 26.8 -3.5) (end 21.0 -3.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 21.0 -3.5) (end 21.0 3.5) (layer F.SilkS) (width 0.15))
    
      ${''/* component outline */}
      (fp_line (start -25.5 10.5) (end 25.5 10.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 25.5 10.5) (end 25.5 -10.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 25.5 -10.5) (end -25.5 -10.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -25.5 -10.5) (end -25.5 10.5) (layer F.SilkS) (width 0.15))
      `
    function pins(def_pos, def_neg) {
      return `
        ${''/* pin names */}
        (fp_text user GP0 (at 24.13 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP1 (at 21.59 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 19.05 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP2 (at 16.51 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP3 (at 13.97 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP4 (at 11.43 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP5 (at 8.89 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 6.35 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP6 (at 3.81 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP7 (at 1.27 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP8 (at -1.27 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP9 (at -3.81 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP10 (at -8.89 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP11 (at -11.43 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP12 (at -13.97 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP13 (at -16.51 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -19.05 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP14 (at -21.59 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP15 (at -24.13 ${def_pos}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

        (fp_text user VBUS (at 24.13 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user VSYS (at 21.59 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 19.05 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user EN_3V3 (at 16.51 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user OUT_3V3 (at 13.97 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user ADC_VREF (at 11.43 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP28 (at 8.89 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 6.35 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP27 (at 3.81 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP26 (at 1.27 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user RUN (at -1.27 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP22 (at -3.81 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP21 (at -8.89 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP20 (at -11.43 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP19 (at -13.97 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP18 (at -16.51 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -19.05 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP17 (at -21.59 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GP16 (at -24.13 ${def_neg}5.89 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

        ${''/* and now the actual pins */}
        (pad 1 thru_hole circle (at 24.13 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP0})
        (pad 2 thru_hole circle (at 21.59 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP1})
        (pad 3 thru_hole circle (at 19.05 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 4 thru_hole circle (at 16.51 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP2})
        (pad 5 thru_hole circle (at 13.97 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP3})
        (pad 6 thru_hole circle (at 11.43 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP4})
        (pad 7 thru_hole circle (at 8.89 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP5})
        (pad 8 thru_hole circle (at 6.35 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 9 thru_hole circle (at 3.81 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP6})
        (pad 10 thru_hole circle (at 1.27 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP7})
        (pad 11 thru_hole circle (at -1.27 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP8})
        (pad 12 thru_hole circle (at -3.81 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP9})
        (pad 13 thru_hole circle (at -6.35 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 14 thru_hole circle (at -8.89 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP10})
        (pad 15 thru_hole circle (at -11.43 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP11})
        (pad 16 thru_hole circle (at -13.97 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP12})
        (pad 17 thru_hole circle (at -16.51 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP13})
        (pad 18 thru_hole circle (at -19.05 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 19 thru_hole circle (at -21.59 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP14})
        (pad 20 thru_hole circle (at -24.13 ${def_pos}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP15})

        (pad 40 thru_hole circle (at 24.13 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VBUS})
        (pad 39 thru_hole circle (at 21.59 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VSYS})
        (pad 38 thru_hole circle (at 19.05 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 37 thru_hole circle (at 16.51 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.EN_3V3})
        (pad 36 thru_hole circle (at 13.97 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.OUT_3V3})
        (pad 35 thru_hole circle (at 11.43 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ADC_VREF})
        (pad 34 thru_hole circle (at 8.89 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP28})
        (pad 33 thru_hole circle (at 6.35 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 32 thru_hole circle (at 3.81 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP27})
        (pad 31 thru_hole circle (at 1.27 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP26})
        (pad 30 thru_hole circle (at -1.27 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RUN})
        (pad 29 thru_hole circle (at -3.81 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP22})
        (pad 28 thru_hole circle (at -6.35 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 27 thru_hole circle (at -8.89 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP21})
        (pad 26 thru_hole circle (at -11.43 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP20})
        (pad 25 thru_hole circle (at -13.97 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP19})
        (pad 24 thru_hole circle (at -16.51 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP18})
        (pad 23 thru_hole circle (at -19.05 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 22 thru_hole circle (at -21.59 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP17})
        (pad 21 thru_hole circle (at -24.13 ${def_neg}8.89 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GP16})
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('', '-')})
        `
    } else {
      return `
        ${standard}
        ${pins('-', '')})
        `
    }
  }
}
