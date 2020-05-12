import Typography from 'typography';

const typography = new Typography({
  title: 'skyfour',
  baseFontSize: '17px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '600', '700'],
    },
  ],
  headerFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  scaleRatio: 3,
  headerColor: 'rgba(22,20,40,1)',
  bodyColor: 'rgba(22,20,40,0.8)',
});

export default typography;
