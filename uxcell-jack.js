// uxcell 3.5mm audio jack
// A footprint for: https://www.amazon.com/dp/B07KY7XX34?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1
// Based on these dimmensions: https://m.media-amazon.com/images/I/51ZJOyglAqL._SL1100_.jpg

module.exports = {
  params: {
    HOLEA:  { type: 'net', value: 'HOLEA'   },
    HOLEB:  { type: 'net', value: 'HOLEB'   },
    HOLEC:  { type: 'net', value: 'HOLEC'   },
  },
  body: p => {
    const standard = `
      (module uxcellJack (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${''/* component outline */}
      (fp_line (start 5.5 3.0) (end 5.5 -3.0) (layer F.SilkS) (width 0.15))
      (fp_line (start 5.5 -3.0) (end -5.5 -3.0) (layer F.SilkS) (width 0.15))
      (fp_line (start -5.5 -3.0) (end -5.5 3.0) (layer F.SilkS) (width 0.15))
      (fp_line (start -5.5 3.0) (end 5.5 3.0) (layer F.SilkS) (width 0.15))
    
      ${''/* illustration of the circular overhung piece */}
      (fp_line (start 8.5 2.5) (end 8.5 -2.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.5 -2.5) (end 5.5 -2.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 5.5 -2.5) (end 5.5 2.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 5.5 2.5) (end 8.5 2.5) (layer F.SilkS) (width 0.15))
      `
    const pins = `
      ${''/* pin names */}
      (fp_text user HOLEA (at 3.1 -2.25) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
      (fp_text user HOLEB (at -3.5 -2.25) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
      (fp_text user HOLEC (at 1.6 2.25) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

      ${''/* now the actual pins */}
      (pad 1 thru_hole circle (at 3.1 -2.25) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.HOLEA})
      (pad 2 thru_hole circle (at -3.5 -2.25) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.HOLEB})
      (pad 3 thru_hole circle (at 1.6 2.25) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.HOLEC})
      `
    return `
      ${standard}
      ${pins})
      `
  }
}
