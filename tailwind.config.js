/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mali', 'Leelawadee UI', 'Tahoma', 'sans-serif'],
      },
      colors: {
        ink: '#2E3A59', // สีตัวอักษรหลัก
        paper: '#F6FAFD', // พื้นหลังแอป
        line: '#DCE7F0', // เส้นขอบ
        sun: '#FFC93C', // สีเหลือง EXP / ปุ่มหลัก
        'sun-dark': '#D9A21B',
        berry: '#E5484D', // ค่าต่ำ / อันตราย
        leaf: '#5FA449',
      },
    },
  },
  plugins: [],
}
