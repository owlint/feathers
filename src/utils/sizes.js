export const getMaxWidth = (width) => {
  switch (width) {
    case 'sm':
      return 'sm:max-w-sm'
    case 'xs':
      return 'sm:max-w-xs'
    case 'md':
      return 'sm:max-w-md'
    case 'lg':
      return 'sm:max-w-lg'
    case 'xl':
      return 'sm:max-w-xl'
    case '2xl':
      return 'sm:max-w-2xl'
    case '4xl':
      return 'sm:max-w-4xl'
    case '5xl':
      return 'sm:max-w-5xl'
    case '6xl':
      return 'sm:max-w-6xl'
    case '7xl':
      return 'sm:max-w-7xl'
    default:
      console.log(`modal size of ${width} not implemented yet`)
      return 'sm:max-w-md'
  }
}
export const getBadgeSize = (width) => {
  switch (width) {
    case 'xs':
      return 'text-xs py-1 px-2'
    case 'sm':
      return 'text-sm py-2 px-3'
    case 'md':
      return 'text-base py-3 px-4'
    case 'lg':
      return 'text-lg py-4 px-5'
    case 'xl':
      return 'text-xl py-5 px-6'
    case '2xl':
      return 'text-2xl py-6 px-7'
    case '3xl':
      return 'text-2xl py-7 px-8'
    case '4xl':
      return 'text-4xl py-8 px-9'
    case '5xl':
      return 'text-5xl py-9 px-10'
    case '6xl':
      return 'text-6xl py-10 px-11'
    case '7xl':
      return 'text-7xl py-11 px-12'
    default:
      console.log(`Size ${width} not implemented yet`)
      return ' text-xs py-1 px-2'
  }
}
export const getIconButtonSize = (width) => {
  switch (width) {
    case 'xs':
      return 'w-6 h-6 focus:ring-1'
    case 'sm':
      return 'w-7 h-7 focus:ring-2'
    case 'md':
      return 'w-8 h-8 focus:ring-2'
    case 'lg':
      return 'w-9 h-9 focus:ring-2'
    case 'xl':
      return 'w-10 h-10 focus:ring-2'
    case '2xl':
      return 'w-11 h-11 focus:ring-4'
    case '3xl':
      return 'w-12 h-12 focus:ring-4'
    case '4xl':
      return 'w-14 h-14 focus:ring-4'
    case '5xl':
      return 'w-16 h-16 focus:ring-4'
    case '6xl':
      return 'w-20 h-20 focus:ring-4'
    case '7xl':
      return 'w-24 h-24 focus:ring-8'
    default:
      console.log(`Size ${width} not implemented yet`)
      return 'w-8 h-8 focus:ring-2'
  }
}
export const getIconSize = (width) => {
  switch (width) {
    case 'xs':
      return 'w-3 h-3'
    case 'sm':
      return 'w-3.5 h-3.5'
    case 'md':
      return 'w-4 h-4'
    case 'lg':
      return 'w-5 h-5'
    case 'xl':
      return 'w-6 h-6'
    case '2xl':
      return 'w-7 h-7'
    case '3xl':
      return 'w-8 h-8'
    case '4xl':
      return 'w-9 h-9'
    case '5xl':
      return 'w-10 h-10'
    case '6xl':
      return 'w-11 h-11'
    case '7xl':
      return 'w-14 h-14'
    default:
      console.log(`Size ${width} not implemented yet`)
      return 'w-4 h-4'
  }
}
