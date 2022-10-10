/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'image-header-desktop': "url('/images/desktop/image-header.jpg')",
        'image-header-mobile': "url('/images/mobile/image-header.jpg')",
        'image-graphic-design-desktop': "url('/images/desktop/image-graphic-design.jpg')",
        'image-graphic-design-mobile': "url('/images/mobile/image-graphic-design.jpg')",
        'image-photography-desktop': "url('/images/desktop/image-photography.jpg')",
        'image-photography-mobile': "url('/images/mobile/image-photography.jpg')",
        'image-milkbottles-mobile': "url('/images/mobile/image-gallery-milkbottles.jpg')",
        'image-milkbottles-desktop': "url('/images/desktop/image-gallery-milkbottles.jpg')",
        'image-orange-desktop': "url('/images/desktop/image-gallery-orange.jpg')",
        'image-orange-mobile': "url('/images/mobile/image-gallery-orange.jpg')",
        'image-cone-desktop': "url('/images/desktop/image-gallery-cone.jpg')",
        'image-cone-mobile': "url('/images/mobile/image-gallery-cone.jpg')",
        'image-sugarcubes-desktop': "url('/images/desktop/image-gallery-sugarcubes.jpg')",
        'image-sugarcubes-mobile': "url('/images/mobile/image-gallery-sugarcubes.jpg')",
        

      },

      colors: {
        SoftRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(182, 41%, 62%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        skyBlue: 'hsl(197.4, 71.43%, 72.55%)',
      }
    },
  },
  plugins: [],
}
