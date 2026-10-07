const WaveDivider = ({ flip = false, color = 'white', bgColor = '', className = '', height = 'normal' }) => {
  const fillColor = color === 'white' ? '#ffffff' : color === 'dark' ? '#0A0F1C' : color === 'dark-light' ? '#111827' : color === 'gray-100' ? '#f3f4f6' : color

  const bgClass = bgColor === 'white' ? 'bg-white' : bgColor === 'dark' ? 'bg-dark' : bgColor === 'dark-light' ? 'bg-dark-light' : bgColor === 'gray-100' ? 'bg-gray-100' : bgColor

  const heightClass = height === 'tall' 
    ? 'h-[50px] sm:h-[80px] lg:h-[110px]' 
    : height === 'short'
    ? 'h-[30px] sm:h-[45px] lg:h-[60px]'
    : 'h-[40px] sm:h-[60px] lg:h-[80px]'

  return (
    <div
      className={`w-full overflow-hidden leading-[0] pointer-events-none relative z-10 ${bgClass} ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full ${heightClass} block`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,100 480,20 720,50 C960,80 1200,20 1440,60 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

export default WaveDivider
